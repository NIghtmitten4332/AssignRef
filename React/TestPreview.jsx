import React, { useState, useEffect } from "react";
import PreviewQuestion from "./PreviewQuestion";
import testService from "services/testService";
import { Button, Row, Accordion, ListGroup } from "react-bootstrap";
import { Formik, Form, FieldArray } from "formik";
import debug from "sabio-debug";
import TitleHeader from "components/general/TitleHeader";
import toastr from "toastr";
import { Col } from "reactstrap";
import Pagination from "rc-pagination";
import { ProgressBar } from "react-bootstrap";
import PropTypes from "prop-types";
import "rc-pagination/assets/index.css";
import "./test.css";

const _logger = debug.extend("TestPreview");

const TestPreview = ({ testId }) => {
  const localeEng = {
    prevPage: "Previous Page",
    nextPage: "Next Page",
    pageSize: "Page Size",
  };

  const [test, setTest] = useState({
    id: testId,
    testQuestionList: [],
    paginatedList: [],
    testData: [],
    currentQuestionId: 0,
    currentIndex: 0,
    testStart: false,
    testEnd: false,
    current: 1,
    total: 10,
    questionAnswered: [],
  });

  useEffect(() => {
    testService.getById(testId).then(onGetSuccess).catch(onError);
  }, [test.currentQuestionId]);

  const initialValues = {
    picked: "",
  };

  const renderQuestionOptions = ({ form }) => {
    const mapArr = (question, index) => {
      if (question.id === test.currentQuestionId) {
        return (
          <PreviewQuestion
            question={question}
            index={index}
            values={form.values}
            key={`${question.id} + ${question.question}`}
            onClickValue={testClick}
          />
        );
      }
    };
    return test.testQuestionList.map(mapArr);
  };

  const handleStartTest = (e) => {
    e.preventDefault();

    if (test.testQuestionList.index !== 0) {
      _logger("test.testQuestionList", test.testQuestionList);
      let startQ = test.testQuestionList[0].id;

      let paginatedQuestions = test.testQuestionList.slice(0, 10);

      setTest(function (prevState) {
        let returnObj = { ...prevState };
        returnObj.currentQuestionId = startQ;
        returnObj.testStart = true;
        returnObj.paginatedList = paginatedQuestions;
        returnObj.total = test.testQuestionList.length;
        return returnObj;
      });
    } else {
      toastr.error("No Questions Found");
    }
  };

  const handleSubmit = (values) => {
    _logger("Submit Clicked", values);
  };

  const handleClick = (e) => {
    _logger("handle Click", e.target.name);

    let change = 0;

    if (e.target.name === "Next") {
      change = test.currentIndex + 1;
    } else {
      change = test.currentIndex - 1;
    }

    if (change >= 0 && change < test.testQuestionList.length) {
      setTest(function (prevState) {
        let returnObj = { ...prevState };
        returnObj.currentQuestionId = test.testQuestionList[change].id;
        returnObj.currentIndex = change;
        returnObj.testEnd = false;
        return returnObj;
      });
    } else if (change >= 0 && change === test.testQuestionList.length) {
      setTest(function (prevState) {
        let returnObj = { ...prevState };
        returnObj.currentIndex = change;
        returnObj.testEnd = true;
        return returnObj;
      });
    }
  };

  const onChangePagination = (page) => {
    let paginatedMath = page * 10;

    let paginatedQuestions = test.testQuestionList.slice(
      paginatedMath - 10,
      paginatedMath
    );

    setTest(function (prevState) {
      let returnObj = { ...prevState };
      returnObj.paginatedList = paginatedQuestions;
      returnObj.current = page;
      return returnObj;
    });
  };

  const onClick = (e) => {
    e.preventDefault();
    _logger("Click Fired", e.target.id);

    let indexFinder = test.testQuestionList.findIndex(
      (q) => parseInt(q.id) === parseInt(e.target.id)
    );

    setTest(function (prevState) {
      let returnObj = { ...prevState };
      returnObj.currentQuestionId = parseInt(e.target.id);
      returnObj.currentIndex = indexFinder;
      returnObj.testEnd = false;
      return returnObj;
    });
  };

  const onGetSuccess = (response) => {
    if (response.item.testQuestions !== null) {
      _logger("success", response);
      setTest((prevState) => {
        const tst = { ...prevState };
        tst.testQuestionList = response.item.testQuestions;
        tst.testName = response.item.name;
        return tst;
      });
    }
  };

  const onError = (e) => {
    _logger(e);
  };

  const renderCurrentQuestion = test.paginatedList.map((question) => (
    <ListGroup.Item
      key={question.id}
      className={
        question.id === test.currentQuestionId
          ? "active text-white training-list text-primary"
          : "training-list text-primary"
      }
      id={question.id}
      name="Test Question"
      variant="light"
      action
      onClick={onClick}
    >
      Q{question.sortOrder}: {question.question}
    </ListGroup.Item>
  ));

  const testClick = (e, index) => {
    let result = test.questionAnswered.filter((t) => t === index);

    if (result[0] === index) {
    } else {
      setTest(function (prevState) {
        let newIndex = [...prevState.questionAnswered, index];
        return { ...prevState, questionAnswered: newIndex };
      });
    }
  };

  function findMissing() {
    let missing = [];

    for (let i = 0; i <= test.testQuestionList.length - 1; i++) {
      if (test.questionAnswered.indexOf(i) === -1) {
        missing.push(i + 1);
      }
    }
    return missing;
  }

  const renderMissingQuestion = findMissing().map(
    (question) => `${question}, `
  );

  _logger("state", test);

  return (
    <div className="col-xl-12 col-md-12 col-12">
      <TitleHeader title={test.testName} />
      {test.testStart && (
        <div className="row">
          <Col xl={6} className=" d-flex justify-content-end boldText mb-2">
            {test.questionAnswered.length} out of {test.testQuestionList.length}
          </Col>
          <Col xl={6}>
            <ProgressBar
              variant="primary"
              now={
                (test.questionAnswered.length / test.testQuestionList.length) *
                100
              }
              className="d-flex mt-2 flex-auto"
              style={{ height: "10px" }}
            />
          </Col>
        </div>
      )}
      <Row>
        {test.testStart && (
          <Col xl={5}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Questions</Accordion.Header>
                <Accordion.Body>
                  <ListGroup key={test.testId}>
                    {" "}
                    {renderCurrentQuestion}
                  </ListGroup>

                  <div className="d-flex align-items-center justify-content-center mt-2">
                    <Pagination
                      className="justify-content-center"
                      current={test.current}
                      total={test.total}
                      pageSize={10}
                      onChange={onChangePagination}
                      locale={localeEng}
                    />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        )}
        <Col xl={7} className="mx-auto align-items-center">
          <div className="mb-4 col-12">
            <div className="card">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h4 className="mb-1 text-white"> {test.testName}</h4>
                </div>
              </div>

              <div className={!test.testStart && "card-body testCard"}>
                {test.testStart && (
                  <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                    <Form>
                      <div className="card-body" style={{ height: "200px" }}>
                        <FieldArray>
                          {test.testQuestionList.length > 0 &&
                            !test.testEnd &&
                            renderQuestionOptions}
                        </FieldArray>
                        {test.currentIndex === test.testQuestionList.length && (
                          <>
                            <Row className="d-flex justify-content-center mb-1 h2 fw-bold">
                              {test.testName}
                            </Row>

                            {test.questionAnswered.length !==
                            test.testQuestionList.length ? (
                              <Row className="d-flex justify-content-center">
                                Missing Question: {renderMissingQuestion}
                              </Row>
                            ) : (
                              <Row className="d-flex justify-content-center">
                                All Questions Answered
                              </Row>
                            )}
                            <Button
                              type="submit"
                              className="colorGrey mx-auto mt-2 d-flex align-items-center"
                            >
                              Submit
                            </Button>
                          </>
                        )}
                      </div>
                      {test.testStart && (
                        <div className="d-flex align-items-end ps-3 pb-3">
                          <Button
                            variant="outline-primary"
                            type="button"
                            className="me-1"
                            name="Prev"
                            onClick={handleClick}
                          >
                            Prev
                          </Button>
                          {!test.testEnd && (
                            <Button
                              variant="outline-primary"
                              type="button"
                              className="me-1"
                              name="Next"
                              onClick={handleClick}
                            >
                              Next
                            </Button>
                          )}
                        </div>
                      )}
                    </Form>
                  </Formik>
                )}
                {!test.testStart && (
                  <div>
                    <Row className="d-flex justify-content-center mb-1 h2 fw-bold">
                      {test.testName}
                    </Row>
                    <Row className="d-flex justify-content-center">
                      {test.testQuestionList.length} Total Questions
                    </Row>
                    <Button
                      variant="primary"
                      type="button"
                      className="mx-auto mt-2 d-flex align-items-center"
                      name="Prev"
                      onClick={handleStartTest}
                    >
                      Start The Test
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

TestPreview.propTypes = {
  testId: PropTypes.number,
};

export default TestPreview;

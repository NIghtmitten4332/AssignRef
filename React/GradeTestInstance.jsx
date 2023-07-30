import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AiOutlineCheckSquare } from "react-icons/ai";
import { MdOutlineCancel, MdOutlineClose } from "react-icons/md";
import TitleHeader from "components/general/TitleHeader";
import debug from "sabio-debug";
const _logger = debug.extend("GradeTestInstance");
function GradeTestInstance(user) {
  const { state } = useLocation();
  const userInfo = user.currentUser;

  const [testInstance, setTestInstance] = useState({
    grade: [],
    newData: {},
  });

  useEffect(() => {
    setTestInstance((prevState) => {
      let testResults = { ...prevState };
      testResults.newData = state.payload;
      testResults.grade.push(state.payload.grade);
      return testResults;
    });
  }, []);
  const testGrade = testInstance.grade.slice(0, 4);
  const gradePercent = parseInt(testGrade);

  _logger("can you see me =>", gradePercent);
  const mapIncorrectQuestion = (question, index) => {
    return (
      <div key={question.id} className="row">
        <div className="col px-5 py-2">
          <div className="align-middle me-2 text-primary">
            <h4>
              <MdOutlineClose size={15} color="red" /> Q{index + 1 + ". "}
              {/* Q{index + 1 + ". "} */}
              {question.question}
            </h4>
          </div>
        </div>
        <hr />
      </div>
    );
  };
  return (
    <>
      {testInstance && (
        <div className="">
          <TitleHeader title="Test Results" />
          <div className="card-body d-flex justify-content-around border bg-white">
            <div className="justify-content-around mt-4 ">
              <div className="">
                <div className="card-body my-5 py-5">
                  <div className="flex-grow-1 card-text ">
                    <h4>
                      <span className="fw-bold">Name: </span>
                      {`${userInfo?.name}`}
                    </h4>
                    <h4 className="d-flex align-items-center pt-2">
                      <span className="fw-bold">Total Questions: </span>
                    </h4>
                    <h3 style={{ textAlign: "center" }}>
                      {testInstance.newData.totalQuestions}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <hr className="vr border border-primary mx-2" />
            <div className="my-auto">
              <div className="flex-grow-1 ">
                {testInstance.newData.correct &&
                  testInstance.newData.totalQuestions && (
                    <>
                      <div className="mt-4 ">
                        {" "}
                        <h4 className="mx-3 my-2">Score:</h4>
                        <h1 className="display-2 my-2 mx-3">
                          {gradePercent}%
                        </h1>{" "}
                      </div>
                    </>
                  )}
                <div className="card-body m-3 ">
                  <div className="d-flex align-items-center">
                    <div className="align-middle me-2 text-primary">
                      <AiOutlineCheckSquare size={30} color="green" />
                    </div>
                    <h4 className="d-flex align-items-center pt-2">
                      <span>
                        {testInstance.newData.correct} Correct Questions{" "}
                      </span>
                    </h4>
                  </div>
                  <div className="d-flex align-items-center ">
                    <div className="align-middle me-2 text-primary">
                      <MdOutlineCancel size={30} color="red" />
                    </div>
                    <h4 className="d-flex align-items-center pt-2">
                      <span>
                        {testInstance.newData.totalQuestions -
                          testInstance.newData.correct}{" "}
                        Questions Missed
                      </span>{" "}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <hr className="vr border border-primary mx-2" />
            <div className="my-auto">
              <div className="flex-grow-1 ">
                <div className="card-body">
                  <h4 className="d-flex align-items-center pt-2">
                    <span>Question(s) Incorrect: </span>
                  </h4>
                  {testInstance.newData.incorrect &&
                  testInstance.newData.totalQuestions >= 0 ? (
                    testInstance.newData.incorrect.map(mapIncorrectQuestion)
                  ) : (
                    <h2 style={{ textAlign: "right" }}> 0 </h2>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default GradeTestInstance;

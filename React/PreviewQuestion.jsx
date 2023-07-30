import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import debug from "sabio-debug";
const _logger = debug.extend("TestTaking");

const PreviewQuestion = ({ question, index, onClickValue }) => {
  const onClickLocal = (e) => {
    _logger("child e", e.target.value, index);

    onClickValue(e.target.value, index);
  };

  const mapOptions = (option) => {
    return (
      <>
        <div
          className="form-check pb-1 mx-auto"
          key={`Option${index}${option.id}`}
        >
          <label className="mx-auto">
            <Field
              onClick={onClickLocal}
              type="radio"
              name={`picked.${index}`}
              key={`Option${index}${option.id}${option.text}`}
              value={option.text}
            />{" "}
            {option.text}
          </label>
        </div>
      </>
    );
  };

  _logger("Question Option", question.answerOption.map(mapOptions));

  return (
    <div className="my-2 pb-2">
      <h4>{`${question.sortOrder}. ${question.question}`}</h4>
      <div className="mb-3">
        {question.answerOption !== null ? (
          question.answerOption.map(mapOptions)
        ) : (
          <div>No Question Option Found</div>
        )}
      </div>
    </div>
  );
};

PreviewQuestion.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string,
    sortOrder: PropTypes.number,
    answerOption: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string,
      })
    ),
  }),
  index: PropTypes.number.isRequired,
  onClickValue: PropTypes.func,
};

export default PreviewQuestion;

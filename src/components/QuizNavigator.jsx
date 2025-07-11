import React, { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

function QuizNavigator() {
  const {
    questions,
    currentIndex,
    answers,
    handleNext,
    handlePrevious,
    previewMode,
    handleSubmit,
    setSubmitted ,
    setPreviewMode   
  } = useContext(QuizContext);

  const currentQuestion = questions[currentIndex];

  return (
    <div>
      {currentIndex > 0 && <button onClick={handlePrevious}>Previous</button>}
      {currentIndex < questions.length - 1 ? (
        <button onClick={handleNext} disabled={!answers[currentQuestion.id]}>Next</button>
      ) : (
        <button onClick={handleSubmit} disabled={!answers[currentQuestion.id]}>Submit</button>
      )}
       {previewMode && (
        <button
          onClick={() => {
            setSubmitted(true);
            setPreviewMode(false);
          }}
        >Back to Result</button>
      )}
    </div>
  );
}

export default QuizNavigator;

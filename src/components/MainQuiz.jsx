import React, { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import Header from "./Header";
import QuizNavigator from "./QuizNavigator";
import QuestionCard from "./QuestionCard";
import Result from "./Result";

function MainQuiz() {
  const {
    questions,
    setCurrentIndex,
    submitted,
    currentIndex
  } = useContext(QuizContext);
  return (
    <>
      <Header />

      {!submitted ? (
        <>
          <p>Question {currentIndex + 1} of {questions.length}</p>
          <div className="question-nav">
  {questions.map((_, index) => (
    <button
      key={index}
      className={index === currentIndex ? "active" : ""}
      onClick={() => setCurrentIndex(index)}
    >
      {index + 1}
    </button>
  ))}
</div>

          <QuestionCard />
          <QuizNavigator />
        </>
      ) : (
        <Result />
      )}
    </>
  );
}

export default MainQuiz;

import React, { useContext, useState,useEffect } from "react";
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
    currentIndex,
  } = useContext(QuizContext);

  const [page, setPage] = useState(0);
  const pageSize = 10;

  const totalPages = Math.ceil(questions.length / pageSize);
  const startIndex = page * pageSize;
  const endIndex = Math.min(startIndex + pageSize, questions.length);
  useEffect(() => {
    const newPage = Math.floor(currentIndex / pageSize);
    if (newPage !== page) {
      setPage(newPage);
    }
  }, [currentIndex]);

  const handlePageChange = (direction) => {
    if (direction === "prev" && page > 0) setPage(page - 1);
    if (direction === "next" && page < totalPages - 1) setPage(page + 1);
  };

  return (
    <>
      <Header />

      {!submitted ? (
        <>
          <p>Question {currentIndex + 1} of {questions.length}</p>

          <div className="question-nav">
           
            {page > 0 && (
              <button className="nav-arrow" onClick={() => handlePageChange("prev")}>
                &laquo;
              </button>
            )}

            
            {questions.slice(startIndex, endIndex).map((_, index) => {
              const actualIndex = startIndex + index;
              return (
                <button
                  key={actualIndex}
                  className={actualIndex === currentIndex ? "active" : ""}
                  onClick={() => setCurrentIndex(actualIndex)}
                >
                  {actualIndex + 1}
                </button>
              );
            })}

           
            {page < totalPages - 1 && (
              <button className="nav-arrow" onClick={() => handlePageChange("next")}>
                &raquo;
              </button>
            )}
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

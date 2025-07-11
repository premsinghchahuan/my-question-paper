import React, { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

function Result() {
  const { questions, answers, score, total, handlePreview } = useContext(QuizContext);

  return (
    <div className="result">
      {/* Centered Question Number + Progress */}
      <div className="question-progress">
        <div className="question-number">Question {questions.length} of {questions.length}</div>
        <div className="progress-bar-wrapper">
          <div
            className="progress-bar"
            style={{ width: "100%" }} // Always full since quiz is completed
          ></div>
        </div>
      </div>

      <h2>Exam Completed</h2>
      <p>You scored {score} out of {total}</p>

      <div className="table-wrapper">
        <table className="answer-table">
          <thead>
            <tr>
              <th>Q.No</th>
              <th>Your Answer</th>
              <th>Correct Answer</th>
              <th>Marks Awarded</th>
              <th>Question Marks</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((q) => {
              const isCorrect = answers[q.id] === q.correctAnswer;
              return (
                <tr key={q.id} className={isCorrect ? "correct" : "wrong"}>
                  <td>{q.id}</td>
                  <td>{answers[q.id] || "Not Answered"}</td>
                  <td>{q.correctAnswer}</td>
                  <td>{isCorrect ? q.marks : 0}</td>
                  <td>{q.marks}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <button onClick={handlePreview}>Preview Answers</button>
    </div>
  );
}

export default Result;

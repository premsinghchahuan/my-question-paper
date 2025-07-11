import React, { useContext, useState } from "react";
import { QuizContext } from "../context/QuizContext";

function Result() {
  const { questions, answers, score, total, handlePreview } = useContext(QuizContext);
  const [showTable, setShowTable] = useState(false);

  const toggleTable = () => setShowTable((prev) => !prev);

  const hasData =
    Array.isArray(questions) &&
    questions.length > 0 &&
    typeof answers === "object";

  return (
    <div className="result">
      <h2>Exam Completed</h2>
      <p>You scored {score} out of {total}</p>

      {hasData && (
        <div className="table-wrapper">
          <table className="answer-table">
            <thead
              className="table-toggle-header"
              onClick={toggleTable}
              title="Click to toggle answers"
              style={{ cursor: "pointer" }}
            >
              <tr>
                <th colSpan="5" style={{ textAlign: "center", backgroundColor: "#e0ecfa" }}>
                  {showTable ? "Click to hide answers" : "Click to show answers"}
                </th>
              </tr>
              {showTable && (
                <tr>
                  <th>Q.No</th>
                  <th>Your Answer</th>
                  <th>Correct Answer</th>
                  <th>Marks Awarded</th>
                  <th>Question Marks</th>
                </tr>
              )}
            </thead>

            <tbody style={{ display: showTable ? "table-row-group" : "none" }}>
              {questions.map((q) => {
                const selected = answers[q.id];
                const isCorrect = selected === q.correctAnswer;
                return (
                  <tr key={q.id} className={isCorrect ? "correct" : "wrong"}>
                    <td>{q.id}</td>
                    <td>{selected || "Not Answered"}</td>
                    <td>{q.correctAnswer}</td>
                    <td>{isCorrect ? q.marks : 0}</td>
                    <td>{q.marks}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      <button onClick={handlePreview}>Preview Answers</button>
    </div>
  );
}

export default Result;

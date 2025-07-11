import React, { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
function QuestionCard() {
  const { questions, currentIndex, answers, handleOptionSelect } = useContext(QuizContext);
  const questionData = questions[currentIndex];
  const { id, question, options } = questionData;
  const currentQuestion = questions[currentIndex];

  return (
    <div className="question-card">
      <h3>{question}</h3>
      <ul>
      <div className="options">
        {options.map((option, index) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                name={`question-${id}`}
                value={option}
                checked={answers[currentQuestion.id] === option}
                onChange={() => handleOptionSelect(id, option)}
              />
              {option}
            </label>
          </li>
        ))}
        </div>
      </ul>
    </div>
  );
}

export default QuestionCard;
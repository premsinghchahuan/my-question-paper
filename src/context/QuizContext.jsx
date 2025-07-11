import React, { createContext, useState } from "react";
import questions from "../data/question";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [answers, setAnswers] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0); 

  const handleOptionSelect = (questionId, selectedOption) => {
    setAnswers((prev) => ({ ...prev, [questionId]: selectedOption }));
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const handlePrevious = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleSubmit = () => {
    let s = 0;
    let t = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) s += q.marks;
      t += q.marks;
    });
    setScore(s);
    setTotal(t);
    setSubmitted(true);
    setPreviewMode(false);
  };

  const handlePreview = () => {
    setSubmitted(false);
    setPreviewMode(true);
  };

  return (
    <QuizContext.Provider
      value={{
        questions,
        currentIndex,
        setCurrentIndex,
        answers,
        setAnswers,
        submitted,
        setSubmitted,
        previewMode,
        setPreviewMode,
        score,
        total,
        handleOptionSelect,
        handleNext,
        handlePrevious,
        handleSubmit,
        handlePreview,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
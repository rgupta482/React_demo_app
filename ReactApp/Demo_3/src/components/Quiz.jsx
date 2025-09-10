import { useState, useCallback } from "react";
import Question from "./Question.jsx";
import QUESTIONS from "../questions.js";
import Summary from "./Summary.jsx";

export default function Quiz(){
    const [userAnswer, setUserAnswer] = useState([]);

    const activeQuestionIndex = userAnswer.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer)
    {
        setUserAnswer((prevUserAnswer)=> {
            return [...prevUserAnswer, selectedAnswer];
         });
    }, []);

    const handleSkipAnswer = useCallback(()=> handleSelectAnswer(null,[]));

    if(quizIsComplete)
    {
        return (
            <Summary userAnswer={userAnswer}></Summary>
        );
    }

    return (
        <div id="quiz">
            <Question 
                key={activeQuestionIndex}
                index={activeQuestionIndex}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
             />
        </div>
    );
}
import QuizCompleted from "../assets/quiz-complete.png";
import QUESTION from '../questions.js';

export default function Summary({userAnswer}){

    const skippedAnswer = userAnswer.filter((answer) => answer == null);
    const correctAnswer = userAnswer.filter((answer, index) => answer == QUESTION[index].answers[0]);

    const skippedAnswerShare = Math.round((skippedAnswer.length / userAnswer.length) * 100);
    const correctAnswerShare = Math.round((correctAnswer.length / userAnswer.length) * 100);
    
    const wrongAnswerShare = 100 - skippedAnswerShare - correctAnswerShare;

    return (<div id="summary">
        <img src={QuizCompleted} alt="Trophy icon"></img>
        <h2>Quiz completed</h2>

        <div id="summary-stats">
            <p>
                <span className="number">{skippedAnswerShare}%</span>
                <span className="text">skipped</span>
            </p>
            <p>
                <span className="number">{correctAnswerShare}%</span>
                <span className="text">answered correctly</span>
            </p>
            <p>
                <span className="number">{wrongAnswerShare}%</span>
                <span className="text">answered incorrectly</span>
            </p>
        </div>
        <ol>
            {userAnswer.map((answer, index) => {
                let cssClass = "user-answer";
                if(cssClass === null)
                    cssClass += ' skipped';
                else if(answer === QUESTION[index].answers[0])
                    cssClass += ' correct';
                else
                    cssClass += ' wrong';

                return (
                <li key={index}>
                    <h3>{index + 1}</h3>
                    <p className="question">{QUESTION[index].text}</p>
                    <p className={cssClass}>{answer ?? 'Skipped'}</p>
                </li>       
                );
            })}
        </ol>
    </div>
    );
}
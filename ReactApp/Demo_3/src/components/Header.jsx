import QuizLogo from '../assets/quiz-logo.png';

export default function Header(){
    return (
        <header>
            <img src={QuizLogo} alt="Header image for quiz"></img>
            <h1>ReactQuiz</h1>
        </header>
    );
}
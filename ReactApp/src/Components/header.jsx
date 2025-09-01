import logo from '../assets/investment-calculator-logo.png';

export default function Header(){
    return (
        <header id="header">
            <img src={logo} alt="Investment calculator logo"></img>
            <h1>Invesment Calculator</h1>
        </header>
    );
}
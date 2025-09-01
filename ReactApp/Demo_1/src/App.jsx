import { useState } from 'react';
import Header from './Components/header.jsx';
import InputParams from './Components/InterestInput.jsx';
import Result from './Components/Result.jsx';

function App() {
      const[userInput, setUserInput] = useState({
        initialInvestment : 10000,
        annualInvestment : 3000,
        expectedReturn:6,
        duration: 10
    });

    const inputIsValid = userInput.duration > 0;

    function handleChange(inputIdentifier, newValue)
    {
        setUserInput((prevUserInput) => {
            return {
                ...prevUserInput,
                [inputIdentifier]: +newValue  // to convert string to number, added +
            };
        });
    }

  return (
    <>
      <Header></Header>
      <InputParams onChange={handleChange} userInput={userInput}></InputParams>
      {!inputIsValid && (<p className='Center'> Please enter a duration greater than zero. </p>)}
      {inputIsValid && <Result userInput = {userInput}></Result>}
    </>
  )
}

export default App

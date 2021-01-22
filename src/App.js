import './App.css';
import { useState } from 'react';
import MainArea from './MainArea.js';
import Results from './Results.js';
import Explanation from './Explanation.js';

const App = () => {
  // STATE MANAGEMENT
  const [incomeValue, setIncomeValue] = useState('');
  const [oldTaxValue, setOldTaxValue] = useState(0);
  const [newTaxValue, setNewTaxValue] =  useState(0);

  const oldTaxBrackets = {
    0: 0.04,
    8500: 0.0450,
    11700: 0.0525,
    13900: 0.0590,
    21400: 0.0621,
    80650: 0.0649,
    215400: 0.0685,
    1077550: 0.0882
  }
  const cumTaxOldBrackets = {
    0: 0,
    8500: 340,
    11700: 484,
    13900: 600,
    21400: 1042,
    80650: 4721,
    215400: 13467,
    1077550: 72524
  }

  const calculateOldTax = (incomeValue) => {
    let furthestBracket = 0
    for (const currTaxBracket in oldTaxBrackets) {
      if (incomeValue > currTaxBracket) {
        furthestBracket = currTaxBracket
      }
    }
    let oldTaxTotal = 0;
    if (incomeValue > 107650) {
      oldTaxTotal = incomeValue * oldTaxBrackets[furthestBracket]
    }
    else {
      oldTaxTotal = cumTaxOldBrackets[furthestBracket] + ((incomeValue - furthestBracket) * oldTaxBrackets[furthestBracket])
    }
    return oldTaxTotal;
  }
  
  const newTaxBrackets = {
    0: 0.04,
    8500: 0.045,
    11700: 0.0525,
    13900: 0.0590,
    21400: 0.0621,
    80650: 0.0649,
    107650: 0.0649,
    215400: 0.0685,
    300000: 0.0750,
    400000: 0.0800,
    500000: 0.0850,
    600000: 0.0900,
    700000: 0.0950,
    800000: 0.10,
    900000: 0.11,
    1000000: 0.12,
    5000000: 0.13,
    10000000: 0.14,
    100000000: 0.15
  }

  const cumTaxNewBrackets = {
    0: 0,
    8500: 340,
    11700: 484,
    13900: 600,
    21400: 1042,
    80650: 4721,
    107650: 6986,
    215400: 14755,
    300000: 20550,
    400000: 28050,
    500000: 36050,
    600000: 44550,
    700000: 53550,
    800000: 63050,
    900000: 73050,
    1000000: 84050,
    5000000: 565050,
    10000000: 1214050,
    100000000: 13814050
  }

  const calculateNewTax = (incomeValue) => {
    let furthestBracket = 0
    for (const currTaxBracket in newTaxBrackets) {
      if (incomeValue > currTaxBracket) {
        furthestBracket = currTaxBracket
      }
    }
    let newTaxTotal = 0;
    if (incomeValue > 107650 && incomeValue < 300000) {
      newTaxTotal = incomeValue * newTaxBrackets[furthestBracket]
    }
    else {
      newTaxTotal = cumTaxNewBrackets[furthestBracket] + ((incomeValue - furthestBracket) * newTaxBrackets[furthestBracket])
    }
    return newTaxTotal;
  }

  const setValue = (number) => {
    setIncomeValue(number);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isNaN(incomeValue)) {
      alert("Please enter your income as a number with no commas.");
      return;
    }
    if (incomeValue < 0) {
      alert("Please enter an income with a positive value.");
      return;
    }
    const incomeValue_num = Number(incomeValue)
    const updatedOldTaxValue = calculateOldTax(incomeValue_num);
    const updatedNewTaxValue = calculateNewTax(incomeValue_num);
    console.log("old: ", updatedOldTaxValue.toFixed(2))
    console.log("new: ", updatedNewTaxValue.toFixed(2))
    setOldTaxValue(updatedOldTaxValue.toFixed(2));
    setNewTaxValue(updatedNewTaxValue.toFixed(2));
  }

  return (
    <div>
      <MainArea incomeValue={incomeValue} handleSubmit={e => handleSubmit(e)} handleChange={e => setIncomeValue(e.target.value)} setValue={setValue} />
      <Results oldTaxValue={oldTaxValue} newTaxValue={newTaxValue}  />
      <Explanation />
    </div>
  );
}

export default App;

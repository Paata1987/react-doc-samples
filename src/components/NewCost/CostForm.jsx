import React, { useState } from 'react';
import './CostForm.css';

const CostForm = (props) => {
  const [inputName, setInputName] = useState('');
  const [inputAmount, setInputAmount] = useState('');
  const [inputDate, setInputDate] = useState('');

  /* const [userInput, setUsserInput] = useState({
    name: '',
    amount: '',
    date: '',
  }); */

  const nameCHangeHandler = (event) => {
    setInputName(event.target.value);
    /* setUsserInput({
      ...userInput,
      name: event.target.value,
    }); */
    /*  setUsserInput((previousState) => {
      return {
        ...previousState,
        name: event.target.value,
      };
    }); */
  };

  const amountCHangeHandler = (event) => {
    setInputAmount(event.target.value);
    /* setUsserInput({
      ...userInput,
      amount: event.target.value,
    }); */
  };
  const dateChangeHandler = (event) => {
    setInputDate(event.target.value);
    /* setUsserInput({
      ...userInput,
      date: event.target.value,
    }); */
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const costData = {
      name: inputName,
      amount: inputAmount,
      date: new Date(inputDate),
    };
    props.onSaveCostData(costData);

    setInputAmount('');
    setInputDate('');
    setInputName('');
  };

  return (
    <form onSubmit={submitHandler} action="">
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label> Name </label>
          <input value={inputName} type="text" onChange={nameCHangeHandler} />
        </div>
        <div className="new-cost__control">
          <label> Sum </label>
          <input
            value={inputAmount}
            type="number"
            onChange={amountCHangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-cost__control">
          <label> Date </label>
          <input
            value={inputDate}
            type="date"
            onChange={dateChangeHandler}
            min="2000-01-01"
            step="2023-12-31"
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit"> add consumption</button>
          <button type="submit">cancel</button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;

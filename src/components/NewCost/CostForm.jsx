import React, { useState } from 'react';
import './CostForm.css';

const CostForm = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  /* const [userInput, setUsserInput] = useState({
    name: '',
    amount: '',
    date: '',
  }); */

  const nameCHangeHandler = (event) => {
    setName(event.target.value);
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
    setAmount(event.target.value);
    /* setUsserInput({
      ...userInput,
      amount: event.target.value,
    }); */
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
    /* setUsserInput({
      ...userInput,
      date: event.target.value,
    }); */
  };

  return (
    <form action="">
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label> Name </label>
          <input type="text" onChange={nameCHangeHandler} />
        </div>
        <div className="new-cost__control">
          <label> Sum </label>
          <input
            type="number"
            onChange={amountCHangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-cost__control">
          <label> Date </label>
          <input
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

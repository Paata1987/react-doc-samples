import React from 'react';
import CostForm from './CostForm';
import './NewCost.css';

const NewCost = (props) => {
  const saveCostDataHandler = (inputCostdata) => {
    const costData = {
      ...inputCostdata,
      id: Math.random().toString(),
    };

    props.onAddCost(costData);
  };

  return (
    <div className="new-cost">
      <CostForm onSaveCostData={saveCostDataHandler} />
    </div>
  );
};

export default NewCost;

import React from 'react';
import DiagramBar from './DiagramBar';
import './Diagram.css';
const Diagram = (props) => {
  const dataSetsValue = props.dataSets.map((dataSet) => dataSet.value);
  const maxMonthCosts = Math.max(...dataSetsValue);

  return (
    <div className="diagram">
      {props.dataSets.map((dataSet) => (
        <DiagramBar
          key={dataSet.label}
          label={dataSet.label}
          value={dataSet.value}
          maxValue={maxMonthCosts}
        />
      ))}
    </div>
  );
};

export default Diagram;

import React from 'react';
import DIAGRAM_API from '../../api/diagramApi';
import Diagram from '../Diagram/Diagram';

const CostsDiagram = (props) => {
  const diagramDataSets = DIAGRAM_API;

  for (const cost of props.costs) {
    const costMonth = cost.date.getMonth();
    diagramDataSets[costMonth].value += cost.amount;
  }

  return <Diagram dataSets={diagramDataSets} />;
};

export default CostsDiagram;

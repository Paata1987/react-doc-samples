import { useState } from 'react';

import Card from '../UI/Card';

import CostList from './CostList';
import './Costs.css';
import CostsDiagram from './CostsDiagram';
import CostsFilter from './CostsFilter';

const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState('2023');

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
    console.log('costComponent');
  };

  const filteredCosts = props.costs.filter((cost) => {
    return cost.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        <CostsDiagram costs={filteredCosts} />
        <CostList costs={filteredCosts} />
      </Card>
    </div>
  );
};

export default Costs;

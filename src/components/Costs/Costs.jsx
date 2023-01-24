import Card from '../UI/Card';
import CostItem from './CostItem';
import './Costs.css';
const Costs = (props) => {
  return (
    <Card className="costs">
      <CostItem
        date={props.costs[0].date}
        description={props.costs[0].description}
        Price={props.costs[0].Price}
      />
      <CostItem
        date={props.costs[1].date}
        description={props.costs[1].description}
        Price={props.costs[1].Price}
      />
      <CostItem
        date={props.costs[2].date}
        description={props.costs[2].description}
        Price={props.costs[2].Price}
      />
      <CostItem
        date={props.costs[3].date}
        description={props.costs[3].description}
        Price={props.costs[3].Price}
      />
      <CostItem
        date={props.costs[4].date}
        description={props.costs[4].description}
        Price={props.costs[4].Price}
      />
    </Card>
  );
};

export default Costs;

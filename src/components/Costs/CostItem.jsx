import CostDate from './CostDate';
import Card from '../UI/Card';
import './CostItem.css';
import { useState } from 'react';
function CostItem(props) {
  const [description, setDescription] = useState(props.description);
  const changeDescriptiptionHandler = () => {
    setDescription('new value');
  };
  return (
    <Card className="cost-item">
      <CostDate date={props.date} />
      <div className="cost-item__description">
        <h2>{description} </h2>
        <div className="cost-item__price">$ {props.Price} </div>
        <button onClick={changeDescriptiptionHandler}>
          {' '}
          chancge description
        </button>
      </div>
    </Card>
  );
}

export default CostItem;

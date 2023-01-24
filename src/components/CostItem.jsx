import CostDate from './CostDate';
import './CostItem.css';
function CostItem(props) {
  return (
    <div className="cost-item">
      <CostDate date={props.date} />
      <div className="cost-item__description">
        <h2>{props.description} </h2>
        <div className="cost-item__price">$ {props.Price} </div>
      </div>
    </div>
  );
}

export default CostItem;
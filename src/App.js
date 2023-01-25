import Costs from './components/Costs/Costs';
import NewCost from './components/NewCost/NewCost';
import INITIAL_COSTS from './api/api';
import { useState } from 'react';

const api = INITIAL_COSTS;

function App() {
  const [costs, setCosts] = useState(api);

  const adsCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  };

  return (
    <div>
      <NewCost onAddCost={adsCostHandler} />

      <Costs costs={costs} />
    </div>
  );
}

export default App;

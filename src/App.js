import Costs from './components/Costs/Costs';
import NewCost from './components/NewCost/NewCost';

function App() {
  const costs = [
    {
      id: 'c1',
      date: new Date(2023, 1, 12),
      description: 'Refregirator',
      Price: 999.99,
    },
    {
      id: 'c2',
      date: new Date(2023, 2, 11),
      description: 'Refregirator',
      Price: 120,
    },
    {
      id: 'c23',
      date: new Date(2022, 12, 25),
      description: 'Refregirator',
      Price: 323,
    },
    {
      id: 'c4',
      date: new Date(2023, 1, 28),
      description: 'Refregirator',
      Price: 1002,
    },
    {
      id: 'c6',
      date: new Date(2023, 1, 30),
      description: 'Refregirator',
      Price: 49.99,
    },
  ];

  const adsCostHandler = (cost) => {
    console.log(cost);
    console.log('appjs');
  };

  return (
    <div>
      <NewCost onAddCost={adsCostHandler} />

      <Costs costs={costs} />
    </div>
  );
}

export default App;

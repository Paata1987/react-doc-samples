import Costs from './components/Costs';

function App() {
  const costs = [
    { date: new Date(2023, 1, 12), description: 'Refregirator', Price: 999.99 },
    { date: new Date(2023, 2, 11), description: 'Refregirator', Price: 120 },
    { date: new Date(2022, 12, 25), description: 'Refregirator', Price: 323 },
    { date: new Date(2023, 1, 28), description: 'Refregirator', Price: 1002 },
    { date: new Date(2023, 1, 30), description: 'Refregirator', Price: 49.99 },
  ];
  return (
    <div>
      <h1>Lets work with React!</h1>
      <Costs costs={costs} />
    </div>
  );
}

export default App;
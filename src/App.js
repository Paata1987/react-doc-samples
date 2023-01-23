import CostItem from './components/CostItem';

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

      <CostItem
        date={costs[0].date}
        description={costs[0].description}
        Price={costs[0].Price}
      />
      <CostItem
        date={costs[1].date}
        description={costs[1].description}
        Price={costs[1].Price}
      />
      <CostItem
        date={costs[2].date}
        description={costs[2].description}
        Price={costs[2].Price}
      />
      <CostItem
        date={costs[3].date}
        description={costs[3].description}
        Price={costs[3].Price}
      />
      <CostItem
        date={costs[4].date}
        description={costs[4].description}
        Price={costs[4].Price}
      />
    </div>
  );
}

export default App;

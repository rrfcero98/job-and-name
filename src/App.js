import "./App.css";
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>Name and Job App</h1>
          <p>Add a character with a name and a job to the table</p>
        </div>
        <Table />
      </div>
    </div>
  );
}

export default App;

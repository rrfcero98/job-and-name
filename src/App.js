import "./App.css";
import Table from './components/Table';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>Name and Job App</h1>
          <h3>Add a character with a name and a job to the table</h3>
        </div>
        <div className="table">
          <Table />
        </div>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import { Container } from 'react-bulma-components';
import Input from './input.js'
import Table from './table.js';

function App() {
  return (
    <Container className="App">
        <Input />
        <Table />
    </Container>
  );
}

export default App;

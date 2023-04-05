import './App.css';
import Header from './components/layout/Header';
import AddTodo from './components/todo/AddTodo';
import Todo from './components/todo/Todo';
import { Row, Col } from 'react-bootstrap';

function App() {
  return (
    <>
        <Header />
        <Row>
            <Col lg={4} md={12}>
                <AddTodo />
            </Col>
            <Col lg={8} md={12}>
                <Todo />
            </Col>
        </Row>
    </>
  );
}

export default App;

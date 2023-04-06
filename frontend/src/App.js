import React, {useState} from 'react';
import Header from './components/layout/Header';
import Todo from './components/todo/Todo';
import { Row, Col, Form } from 'react-bootstrap';
import { addTodo, updateTodo } from './app/features/todoSlice';
import { useDispatch } from 'react-redux';
import ContainerBox from './components/ui/ContainerBox';
import ButtonBox from './components/ui/ButtonBox';
import classes from './App.module.css'

function App() {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredCategory, setEnteredCategory] = useState('Option 1')
    const [enteredDate, setEnteredDate] = useState('')
    const [editId, setEditId] = useState(false)

    const dispatch = useDispatch()

    const enteredTitleHandler = (e) => {
        setEnteredTitle(e.target.value)
    }
    const enteredCategoryHandler = (e) => {
        setEnteredCategory(e.target.value)
    }
    const enteredDateHandler = (e) => {
        setEnteredDate(e.target.value)
    }
    // Add new Todo/ update old Todo 
    const addTodoHandler = async(e) => {
        e.preventDefault()

        const enteredData = {
            title: enteredTitle,
            category: enteredCategory,
            date: enteredDate
        }
        if (!editId){
            try{
                const res = await dispatch(addTodo({enteredData})).unwrap()
                // console.log(res)
                
            }catch(error){
                console.log(error.message)
            }
        }else{
            try{
                const res = await dispatch(updateTodo({editId, enteredData})).unwrap()
                console.log(res)
                
            }catch(error){
                console.log(error.message)
            }
        }
    }

    const populateDataIntoForm = (data) => {
        const d = new Date(data.date)

        setEnteredTitle(data.title)
        setEnteredCategory(data.category)
        setEnteredDate(d.toISOString().substring(0, 16))
        setEditId(data.id)
    }
    return (
    <>
        <Header />
        <Row>
            <Col lg={4} md={12}>
                <ContainerBox className={classes['add-todo']}>
                    <Form onSubmit={addTodoHandler} className='mx-md-5'>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={enteredTitle} onChange={enteredTitleHandler} placeholder="Enter todo name" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Category</Form.Label>
                            <Form.Select value={enteredCategory} onChange={enteredCategoryHandler}>
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                                <option>Option 4</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formDateTime">
                            <Form.Label>Date & Time</Form.Label>
                            <Form.Control type="datetime-local" value={enteredDate} onChange={enteredDateHandler} />
                        </Form.Group>
                        <ButtonBox className="mt-2" variant="secondary" type="submit">{editId ? "Update Todo" : "Add Todo"}</ButtonBox>
                    </Form>
                </ContainerBox>
            </Col>
            <Col lg={8} md={12}>
                <Todo onPopulateDataIntoForm={populateDataIntoForm} />
            </Col>
        </Row>
    </>
  );
}

export default App;

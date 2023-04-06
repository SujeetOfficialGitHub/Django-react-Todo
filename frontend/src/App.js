import React, {useState} from 'react';
import Header from './components/layout/Header';
import Todo from './components/todo/Todo';
import { Row, Col, Form, FloatingLabel } from 'react-bootstrap';
import { addTodo, updateTodo } from './app/features/todoSlice';
import { useDispatch } from 'react-redux';
import ContainerBox from './components/ui/ContainerBox';
import ButtonBox from './components/ui/ButtonBox';
import classes from './App.module.css'

function App() {
    const [error, setError] = useState('')
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredCategory, setEnteredCategory] = useState('Option 1')
    const [enteredDescription, setEnteredDescription] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    const [editId, setEditId] = useState(false)

    const dispatch = useDispatch()

    const enteredTitleHandler = (e) => {
        setEnteredTitle(e.target.value)
    }
    const enteredCategoryHandler = (e) => {
        setEnteredCategory(e.target.value)
    }
    const enteredDescriptionHandler = (e) => {
        setEnteredDescription(e.target.value)
    }
    const enteredDateHandler = (e) => {
        setEnteredDate(e.target.value)
    }
    // Add new Todo/ update old Todo 
    const addTodoHandler = async(e) => {
        e.preventDefault()

        if (enteredTitle.trim().length === 0 || enteredTitle === undefined || enteredCategory.trim().length === '' || enteredCategory === undefined || enteredDescription.trim().length === 0 || enteredDescription === undefined || enteredDate === ''){
            setError('All fields are required')
            return
        }else{
            const enteredData = {
                title: enteredTitle,
                category: enteredCategory,
                description: enteredDescription,
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
                    setEditId('')
                    
                }catch(error){
                    console.log(error.message)
                }
            }
            setEnteredTitle('')
            setEnteredDate('')
            setEnteredDescription('')
            setEnteredDate('')

        }

    }

    const populateDataIntoForm = (data) => {
        const d = new Date(data.date)

        setEnteredTitle(data.title)
        setEnteredCategory(data.category)
        setEnteredDescription(data.description)
        setEnteredDate(d.toISOString().substring(0, 16))
        setEditId(data.id)
    }

    // Hide error after 10s
    if (error){
        setTimeout(() => {
            setError('')
        }, 10000)
    }
    return (
    <>
        <Header />
        <Row>
            <Col lg={4} md={12}>
                <ContainerBox className={`${classes['add-todo']} mt-4`}>
                    <h3 className='text-center bg-secondary p-2 text-light'>Add Your Todo Here</h3>
                    {error && <p className='bg-danger text-center text-light p-1'>{error}</p>}
                    <Form onSubmit={addTodoHandler} className='mx-md-5'>
                        <Form.Group className="mb-3" controlId="formTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" value={enteredTitle} onChange={enteredTitleHandler} placeholder="Write your todo title" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Category</Form.Label>
                            <Form.Select value={enteredCategory} onChange={enteredCategoryHandler}>
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                                <option>Option 4</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                value={enteredDescription}
                                onChange={enteredDescriptionHandler}
                                placeholder="Write your todo description"
                                style={{ height: '100px' }}
                            />
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

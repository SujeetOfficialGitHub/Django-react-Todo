import React from 'react'
import { Form } from 'react-bootstrap'
import ButtonBox from '../ui/ButtonBox'
import classes from './AddTodo.module.css'
import ContainerBox from '../ui/ContainerBox'

const AddTodo = () => {
    const addTodoHandler = (e) => {
        e.preventDefault()
    }
  return (
    <ContainerBox className={classes['add-todo']}>
        <Form onSubmit={addTodoHandler} className='mx-md-5'>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter todo name" />
            </Form.Group>

            <Form.Group>
                <Form.Label>Category</Form.Label>
                <Form.Select>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                    <option>Option 4</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDateTime">
                <Form.Label>Date & Time</Form.Label>
                <Form.Control type="datetime-local" />
            </Form.Group>
            <ButtonBox className="mt-2" variant="secondary" type="submit">Add Todo</ButtonBox>
        </Form>
    </ContainerBox>
  )
}

export default AddTodo
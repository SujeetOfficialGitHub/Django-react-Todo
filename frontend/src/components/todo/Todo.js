import React from 'react'
import TodoItem from './TodoItem'
import {Table } from 'react-bootstrap'
import ContainerBox from '../ui/ContainerBox'
const Todo = () => {
  return (
    <ContainerBox className="mt-lg-4">
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Date & Time</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </tbody>
        </Table>
    </ContainerBox>
  )
}

export default Todo
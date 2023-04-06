import React, { useEffect } from 'react'
import TodoItem from './TodoItem'
import {Table } from 'react-bootstrap'
import ContainerBox from '../ui/ContainerBox'
import { fetchTodo } from '../../app/features/todoSlice'
import {useDispatch, useSelector} from 'react-redux'

const Todo = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTodo())
        // .unwrap()
        // .then(res => console.log(res))
        // .then(error => console.log(error))

    }, [dispatch])

    const todoList = useSelector(state => state.todo.todoList)
    // console.log(todoList)

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
                {todoList.map((item) => (
                    <TodoItem 
                        key={item.id} 
                        id={item.id}
                        title={item.title}
                        category={item.category}
                        date={item.date}
                        onPopulateDataIntoForm={props.onPopulateDataIntoForm}
                    />
                ))}
            </tbody>
        </Table>
    </ContainerBox>
  )
}

export default Todo
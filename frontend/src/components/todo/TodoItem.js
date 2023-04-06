import React from 'react'
import TodoDate from '../todo_date/TodoDate'
import ButtonBox from '../ui/ButtonBox'
import {FaTrash} from 'react-icons/fa'
import {AiFillEdit} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../../app/features/todoSlice'


const TodoItem = (props) => {
  const dispatch = useDispatch()
    const editHandler = (item) => {
      props.onPopulateDataIntoForm(item)
    }
    const deleteHandler = (id) => {
      dispatch(deleteTodo({id}))
    }


  return (
    <tr>
        <td></td>
        <td>{props.title}</td>
        <td>{props.category}</td>
        <td className='m-0 p-0'>
            <TodoDate date={props.date} />
        </td>
        <td>
            <ButtonBox onClick={() => editHandler({
              id: props.id,
              title: props.title,
              category: props.category,
              date: props.date
            })} variant="warning btn-sm"><AiFillEdit/></ButtonBox>
            <ButtonBox onClick={() => deleteHandler(props.id)} variant="danger btn-sm" style={{marginLeft: '8px'}}><FaTrash/></ButtonBox>
        </td>
    </tr>
  )
}

export default TodoItem
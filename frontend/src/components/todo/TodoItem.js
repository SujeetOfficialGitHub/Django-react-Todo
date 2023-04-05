import React from 'react'
import TodoDate from '../todo_date/TodoDate'
import ButtonBox from '../ui/ButtonBox'
import {FaTrash} from 'react-icons/fa'
import {AiFillEdit} from 'react-icons/ai'


const TodoItem = () => {
    const editHandler = () => {}
    const deleteHandler = () => {}


  return (
    <tr>
        <td></td>
        <td>Mark</td>
        <td>Otto</td>
        <td className='m-0 p-0'>
            <TodoDate />
        </td>
        <td>
            <ButtonBox onClick={editHandler} variant="warning btn-sm"><AiFillEdit/></ButtonBox>
            <ButtonBox onClick={deleteHandler} variant="danger btn-sm" style={{marginLeft: '8px'}}><FaTrash/></ButtonBox>
        </td>
    </tr>

  )
}

export default TodoItem
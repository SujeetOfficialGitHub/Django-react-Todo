import React from 'react'

const TodoDate = (props) => {
    const d = new Date(props.date)
    const date = d.getDate()
    const month = d.getMonth()+1
    const year = d.getFullYear()
    const time = d.toLocaleTimeString()
  return (
    <div>
        <p className='p-0 m-0'>{time}</p>
        <p >{date}/{month}/{year}</p>
    </div>
  )
}

export default TodoDate
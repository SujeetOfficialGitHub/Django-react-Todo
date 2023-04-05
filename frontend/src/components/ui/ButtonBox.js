import React from 'react'
import { Button } from 'react-bootstrap'
const ButtonBox = (props) => {
  return (
    <Button 
        type={props.type || 'button'}
        className={`${props.className}`} 
        style={props.style}
        variant={props.variant}
        onClick={props.onClick}
        >
            {props.children}
    </Button>
  )
}

export default ButtonBox
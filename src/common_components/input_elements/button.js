import React from 'react'
import Button from 'react-bootstrap/Button';
export default function ButtonCompnent(props) {
  return (
    <Button
     style={props?.buttonStyles}
     onClick={props.clickEvent}>{props.labelValue}</Button>
  )
}

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ListGroup from 'react-bootstrap/ListGroup';
import { setSelectedType } from '../store/deviceSlice';

const TypeBar = () => {
  const device =  useSelector(({device})=>device);
  const dispatch = useDispatch();


  return (
    <ListGroup>
        {device.types.map((type)=>(
            <ListGroup.Item
                style={{cursor:'pointer'}}
                active={type.id === device.selectedType.id ? true : false}
                key={type.id} 
                onClick={()=>dispatch(setSelectedType(type))}>
                {type.name}
            </ListGroup.Item>
        ))}
    </ListGroup>
  )
}

export default TypeBar
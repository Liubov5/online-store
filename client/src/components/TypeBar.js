import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ListGroup from 'react-bootstrap/ListGroup';
import { setSelectedType } from '../store/deviceSlice';

const TypeBar = () => {
  const device =  useSelector(({device})=>device);
  const dispatch = useDispatch();


  return (
    <ListGroup>
        {device.types.map(({id,name})=>(
            <ListGroup.Item
                style={{cursor:'pointer'}}
                active={id === device.selectedType}
                key={id} 
                onClick={()=>dispatch(setSelectedType(id))}>
                {name}
            </ListGroup.Item>
        ))}
    </ListGroup>
  )
}

export default TypeBar
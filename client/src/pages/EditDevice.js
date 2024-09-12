import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchOneDevice, selectDeviceById } from '../store/deviceSlice';

// import { selectDeviceById } from '../store/deviceSlice';

const EditDevice = () => {
    const {id} = useParams();
  
    const device = useSelector(state=>selectDeviceById(state, id));
  
    
    console.log(device)

  return (
    <div>
      <h3>Редактирование товара:  {device.name} </h3>
    </div>
  )
}

export default EditDevice
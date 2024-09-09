import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import DeviceItem from './DeviceItem';
import Button from 'react-bootstrap/esm/Button';
import { deleteDevice } from '../store/deviceSlice';

const DeviceList = ({from}) => {
    const device =  useSelector(({device})=>device);
    const dispatch = useDispatch()
    const handleClick = (id) => {
        const result = window.confirm("Хотите удалить?");
        if(result){
            dispatch(deleteDevice(id));
        }
    }
    return (
        <div className='d-flex flex-wrap justify-content-around'>
            {device.devices.map((device)=>(
                <div key={device.id}>
                    <DeviceItem  {...device}/>
                    {from ? <Button onClick={()=>handleClick(device.id)} className='mt-3'>Удалить</Button> : '' }
                </div>
            ))}
        </div>
    )
}

export default DeviceList
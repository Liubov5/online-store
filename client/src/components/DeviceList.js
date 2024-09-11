import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import DeviceItem from './DeviceItem';
import Button from 'react-bootstrap/esm/Button';
import { deleteDevice } from '../store/deviceSlice';
import { Link } from 'react-router-dom';

const DeviceList = ({from}) => {
    const device =  useSelector(({device})=>device);
    const dispatch = useDispatch()
    const handleDeleteClick = (id) => {
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
                    {from ? <>
                        <Button onClick={()=>handleDeleteClick(device.id)} className='mt-3 bg-danger border-0'>Удалить</Button> 
                        <br/>
                        <Link to={`/editDevice/${device.id}`} className='btn btn-warning mt-3 border-0'>Редактировать</Link>
                        </>: '' }
                </div>
            ))}
        </div>
    )
}

export default DeviceList
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import DeviceItem from './DeviceItem';

const DeviceList = () => {
    const device =  useSelector(({device})=>device);
    const dispatch = useDispatch();

    return (
        <div className='d-flex flex-wrap'>
            {device.devices.map((device)=>(
                <DeviceItem key={device.id} {...device}/>
            ))}
        </div>
    )
}

export default DeviceList
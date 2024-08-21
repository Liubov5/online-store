import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { setSelectedBrand } from '../store/deviceSlice';

const BrandBar = () => {
    const device =  useSelector(({device})=>device);
    const dispatch = useDispatch();

    return (
        <div className="d-flex">
            {device.brands.map(({name, id})=>(
                <Card style={{cursor:'pointer'}} border={id === device.selectedBrand ? 'success' : 'light'} onClick={()=>dispatch(setSelectedBrand(id))} key={id} className='p-3 mx-1'>
                    {name}
                </Card>
            ))}
        </div>
    )
}

export default BrandBar
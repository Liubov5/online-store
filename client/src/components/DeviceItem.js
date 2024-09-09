import React from 'react'
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import star from "../images/star.png";
import { Link, useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from '../utils/consts';
import { useSelector } from 'react-redux';

const DeviceItem = ({id,name,price, img, rating, brandId}) => {
    const navigate = useNavigate();
    const devices = useSelector(({device})=>device);
    
    return (
        <Col md='3' className='mt-3'>
            <Link style={{textDecoration:'none'}} to={`${DEVICE_ROUTE}/${id}`}>
                <Card style={{width:150, cursor:'pointer'}} border={"dark"}>
                    <Image width={150} height={150} src={process.env.REACT_APP_API_URL + "/"+img}/>
                    <div className='text-black-50 mt-2 d-flex justify-content-between align-items-center'>
                        <div>{ devices.brands.map( (brand) => brand.id === brandId ? brand.name : '') }</div>
                        <div className='d-flex align-items-center'>
                            <div>{rating}</div>
                            <Image width={18} height={18} src={star}/>
                        </div>
                    </div>
                    <div className='mt-2 d-flex justify-content-between align-items-center'>
                        <div>{name}</div>
                        <div>{price}</div>
                    </div>
                    
                </Card>
            </Link>
        </Col>
    )
}

export default DeviceItem
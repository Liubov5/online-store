import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import BigStar from "../images/BigStar.png";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import { fetchOneDevice } from '../store/deviceSlice';
import { useDispatch, useSelector } from 'react-redux';

const DevicePage = () => {
  const [device, setDevice] = useState({info:[]});
  const {id} = useParams();
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchOneDevice(id)).then(({payload})=>{
      setDevice(payload)
    })
    
  }, [])

  return (
    <Container className='mt-5'>
      <div className='d-flex'>
        <Col md={4}>
          <Image width={300} height={300} src={process.env.REACT_APP_API_URL + "/"+device.img}/>
        </Col>
        <Col md={4}>
          <div className='d-flex flex-column align-items-center'>
              <h2>{device.name}</h2>
              <div style={{background:`url(${BigStar}) no-repeat center center`, width:240, height:240, backgroundSize:'cover', fontSize:64}} className='d-flex align-items-center justify-content-center'>
                {device.rating}
              </div>
          </div>
        </Col>
        <Col md={4}>
          <Card style={{width:300, height:300, fontSize:32, border:'2px solid lightgray'}} className='d-flex flex-column align-items-center justify-content-around'>
              <h3>От: {device.price} $</h3>
              <Button variant='outline-dark'>Добавить в корзину</Button>
          </Card>
        </Col>
      </div>
      <div className='d-flex flex-column m-4'>
        <h1>Характеристики</h1>
        {
          device.info.map((info, index)=>(
            <div style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding:10,}} className='d-flex' key={info.id}>
              {info.title} : {info.description}
            </div>
          ))
        }
      </div>
    </Container>
  )
}

export default DevicePage
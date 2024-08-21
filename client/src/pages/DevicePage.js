import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import BigStar from "../images/BigStar.png";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const DevicePage = () => {
  const device =  {
      id:6,
      name:"Iphone 11",
      price: "600",
      img:"https://economictimes.indiatimes.com/thumb/msid-95136602,width-1200,height-900,resizemode-4,imgsize-18404/iphone-15-pro.jpg?from=mdr",
      rating:5
    }

    const description = {
      //вот тут остановилась
    }
  return (
    <Container className='mt-5 d-flex'>
        <Col md={4}>
          <Image width={300} height={300} src={device.img}/>
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
    </Container>
  )
}

export default DevicePage
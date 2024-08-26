import React, { useEffect } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDevices, fetchTypes, setTotalCount } from '../store/deviceSlice';
import Pages from '../components/Pages';

const Shop = () => {
  const dispatch = useDispatch();
  const device = useSelector(({device})=>device);

  useEffect(()=>{
    dispatch(fetchDevices({typeId:device.selectedType.id, brandId:device.selectedBrand.id, page:device.page, limit:2})).then(({payload})=>{
      dispatch(setTotalCount(payload.count))
    })
  },[device.page, device.selectedType, device.selectedBrand]);



  return (
    <Container>
      <Row className='mt-2'>
        <Col md={3}>
          <TypeBar/>
        </Col>
        <Col md={9}>
          <BrandBar/>
          <DeviceList/>
          <Pages/>
        </Col>
      </Row>
    </Container>
  )
}

export default Shop
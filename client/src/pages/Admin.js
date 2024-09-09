import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import CreateType from '../components/modals/CreateType';
import CreateBrand from '../components/modals/CreateBrand';
import CreateDevice from '../components/modals/CreateDevice';
import DeviceList from "../components/DeviceList";
import Pages from "../components/Pages"
import { useDispatch, useSelector } from 'react-redux';
import { fetchDevices, setTotalCount } from '../store/deviceSlice';

const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);
  const dispatch = useDispatch();
  const device = useSelector(({device})=>device);
  
  useEffect(()=>{
    dispatch(fetchDevices({typeId:null, brandId:null, page:device.page, limit:5})).then(({payload})=>{
      dispatch(setTotalCount(payload.count))
    })
  },[device.page, device.selectedType, device.selectedBrand]);

  return (
    <Container className='d-flex flex-column'>
      <Button variant={"outline-dark"} className='mt-2' onClick={()=>setTypeVisible(true)}>Добавить тип</Button>
      <Button variant={"outline-dark"} className='mt-2' onClick={()=>setBrandVisible(true)}>Добавить бренд</Button>
      <Button variant={"outline-dark"} className='mt-2' onClick={()=>setDeviceVisible(true)}>Добавить устройство</Button>
      <CreateType show={typeVisible} onHide={()=>setTypeVisible(false)}/>
      <CreateBrand  show={brandVisible} onHide={()=>setBrandVisible(false)}/>
      <CreateDevice show={deviceVisible} onHide={()=>setDeviceVisible(false)}/>
      <DeviceList from="admin"/>
      <Pages/>
    </Container>
  )
}

export default Admin
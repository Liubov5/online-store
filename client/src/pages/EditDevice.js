import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchOneDevice, selectDeviceById } from '../store/deviceSlice';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/esm/Container';
import Image from 'react-bootstrap/esm/Image';


const EditDevice = () => {
    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(fetchOneDevice(id));
    }, [dispatch]);

    const device = useSelector(({device})=>device.selectedDevice);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [info, setInfo] = useState([]);
    const [img, setImg] = useState("");
    const [file, setFile] = useState(null)

    useEffect(()=>{
      setName(device.name);
      setPrice(device.price);
      setInfo(device.info);
      setImg(device.img)
    }, [device])

    const addNewInfo = () => {
      setInfo([...info, {title:'', description:'', number:Date.now()}])
    }

    const removeInfo = (number) => {
      setInfo(info.filter((i)=>i.number !== number))
    }

    const selectFile = (e) => {
      setFile(e.target.files[0]);
      
    }
    const changeInfo = (key, value,number) => {
      setInfo(info.map(i=>i.number === number ? {...i, [key]:value} : i))
    }
    const changeDevice = () => {
        
    }
   
  return (
    <Container>
      <div className='mt-5'>
        <h3>Редактирование товара: {name} </h3>
        <Form>
          <Form.Group className='mt-3'>
            <Form.Label>Название товара</Form.Label>
            <Form.Control  value={name} onChange={(e)=>setName(e.target.value)}></Form.Control>
          </Form.Group>

          <Form.Group className='mt-3'>
            <Form.Label>Цена товара</Form.Label>
            <Form.Control value={price} onChange={(e)=>setPrice(e.target.value)}></Form.Control>
          </Form.Group>

          <Image className='w-50 mt-3' src={process.env.REACT_APP_API_URL+"/" + img}/>
          <Form.Group className='mt-3'>
            <Form.Label>Изменить картинку</Form.Label>
            <Form.Control onChange={(e)=>selectFile(e)}  type='file'></Form.Control>
          </Form.Group>
          
          <h5 className='mt-3'>Свойства товара: </h5>
          <Button className='mt-3' onClick={()=>addNewInfo()}>Добавить свойство</Button>
          {
            info.map((i)=>(
              <div className='mt-3'>
                
                <Form.Group className='mt-3'>
                    <Form.Label>Название свойства</Form.Label>
                    <Form.Control onChange={(e)=>changeInfo('title', e.target.value, i.number)}  value={i.title}></Form.Control>

                    <Form.Label>Описание свойства</Form.Label>
                    <Form.Control onChange={(e)=>changeInfo('description', e.target.value, i.number)}  value={i.description}></Form.Control>

                    <Button onClick={()=>removeInfo(i.number)} className='btn-danger mt-3'>Удалить свойство</Button>
                </Form.Group>
                <hr/>
              </div>
            ))
          }
         
        
          <Button onClick={changeDevice} className='mt-3 btn-success'>Сохранить изменения</Button>
        </Form>
      </div>
    </Container>
  )
}

export default EditDevice
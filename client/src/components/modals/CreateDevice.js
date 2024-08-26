import React, {useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';
import { createDevice, setSelectedBrand, setSelectedType } from '../../store/deviceSlice';

const CreateDevice = ({show, onHide}) => {
  const device = useSelector(({device})=>device);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [info, setInfo] = useState([]);

  const addInfo = () => {
    setInfo([...info, {title:'', description:'',number:Date.now()}])
  }
  const removeInfo = (number) => {
    setInfo(info.filter((i)=>i.number !== number))
  }
  
  const selectFile = (e)=>{
    setFile(e.target.files[0])
  }

  const changeInfo = (key, value, number) => {
    setInfo(info.map(i=>i.number === number ? {...i, [key]:value} : i));
  }

  const addDevice = () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', `${price}`);
    formData.append('img', file);
    formData.append('brandId', device.selectedBrand.id);
    formData.append('typeId', device.selectedType.id);
    formData.append('info', JSON.stringify(info));
    dispatch(createDevice(formData)).then(data=>onHide());
  }
  return (
    <Modal
    show={show}
    onHide={onHide}
    size="lg"
    centered
>
    <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Добавить устройство
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Form>
            <Dropdown>
              <Dropdown.Toggle>
                {device.selectedType ? device.selectedType.name : 'Выберите тип'}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {device.types.map((type)=>(
                  <Dropdown.Item onClick={()=>dispatch(setSelectedType(type))} key={type.id}>{type.name}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className='mt-4'>
              <Dropdown.Toggle>
              {device.selectedBrand ? device.selectedBrand.name : 'Выберите бренд'}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {device.brands.map((brand)=>(
                  <Dropdown.Item onClick={()=>dispatch(setSelectedBrand(brand))} key={brand.id}>{brand.name}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Form.Control value={name} onChange={(e)=>setName(e.target.value)} placeholder='Введите название устройства' className='mt-4'></Form.Control>
            <Form.Control value={price} onChange={(e)=>setPrice(Number(e.target.value))} type="number" placeholder='Введите стоимость устройства' className='mt-4'></Form.Control>
            <Form.Control onChange={(e)=>selectFile(e)} type='file' className='mt-4'></Form.Control>
            <hr/>
            <Button variant='outline-dark' onClick={addInfo}>Добавить новое свойство</Button>
            {
              info.map((i)=>(
                <div className='d-flex mt-2' key={i.number}>
                  <Col md={4} >
                    <Form.Control onChange={(e)=>changeInfo('title', e.target.value, i.number)} value={i.title} placeholder='Введите название свойства'></Form.Control>
                  </Col>
                  <Col md={4} className='ms-4'>
                    <Form.Control onChange={(e)=>changeInfo('description', e.target.value, i.number)} value={i.description} placeholder='Введите описание свойства'></Form.Control>
                  </Col>
                  <Col md={4} className='ms-4'>
                  <Button onClick={()=>removeInfo(i.number)} variant='outline-danger' >Удалить</Button>
                  </Col>
                </div>
              ))
            }
        </Form>
    </Modal.Body>
    <Modal.Footer>
        <Button variant='outline-danger'  onClick={onHide}>Закрыть</Button>
        <Button variant='outline-success'  onClick={addDevice}>Добавить</Button>
    </Modal.Footer>
</Modal>
  )
}

export default CreateDevice
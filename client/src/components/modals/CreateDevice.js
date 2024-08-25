import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';

const CreateDevice = ({show, onHide}) => {
  const device = useSelector(({device})=>device);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [type, setType] = useState(null);
  const [brand, setBrand] = useState(null);
  const [info, setInfo] = useState([]);
  const addInfo = () => {
    setInfo([...info, {title:'', description:'',number:Date.now()}])
  }
  const removeInfo = (number) => {
    setInfo(info.filter((i)=>i.number !== number))
  }
  
  console.log(device)
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
                Выберите тип
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {device.types.map((type)=>(
                  <Dropdown.Item key={type.id}>{type.title}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className='mt-4'>
              <Dropdown.Toggle>
                Выберите бренд
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {device.brands.map((brand)=>(
                  <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Form.Control placeholder='Введите название устройства' className='mt-4'></Form.Control>
            <Form.Control type="number" placeholder='Введите стоимость устройства' className='mt-4'></Form.Control>
            <Form.Control type='file' className='mt-4'></Form.Control>
            <hr/>
            <Button variant='outline-dark' onClick={addInfo}>Добавить новое свойство</Button>
            {
              info.map((i)=>(
                <div className='d-flex mt-2' key={i.number}>
                  <Col md={4} >
                    <Form.Control placeholder='Введите название свойства'></Form.Control>
                  </Col>
                  <Col md={4} className='ms-4'>
                    <Form.Control placeholder='Введите описание свойства'></Form.Control>
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
        <Button variant='outline-success'  onClick={onHide}>Добавить</Button>
    </Modal.Footer>
</Modal>
  )
}

export default CreateDevice
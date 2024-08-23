import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { createBrand } from '../../store/deviceSlice';

const CreateBrand = ({show, onHide}) => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const addBrand = () => {
        dispatch(createBrand({name:value})).then(()=>setValue(''));
        onHide();
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
            Добавить тип
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Form>
            <Form.Control onChange={(e)=>setValue(e.target.value)} value={value}  placeholder='Введите название бренда'></Form.Control>
        </Form>
    </Modal.Body>
    <Modal.Footer>
        <Button variant='outline-danger'  onClick={onHide}>Закрыть</Button>
        <Button variant='outline-success'  onClick={addBrand}>Добавить</Button>
    </Modal.Footer>
</Modal>
  )
}

export default CreateBrand
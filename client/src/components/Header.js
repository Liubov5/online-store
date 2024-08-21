import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
import Button from 'react-bootstrap/Button';
import { setIsAuth } from '../store/userSlice';

const Header = () => {
  const {currentUser, isAuth} =   useSelector(({user})=>user);
  const dispatch = useDispatch();
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <NavLink to={SHOP_ROUTE} style={{color:'white', textDecoration:'none'}}>Купи Девайс</NavLink>
        {isAuth ? 
            <Nav className="ml-auto" style={{color:'white'}}>
                <Button variant="outline-light">Админ-панель</Button>
                <Button variant="outline-light" className='mx-2'>Войти</Button>
            </Nav>
            :
            <Nav className="ml-auto" style={{color:'white'}}>
                <Button variant="outline-light" onClick={()=>dispatch(setIsAuth(true))}>Авторизация</Button>
            </Nav>
        }
        </Container>
    </Navbar>
    
  )
}

export default Header
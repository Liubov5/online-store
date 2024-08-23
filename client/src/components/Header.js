import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import Button from 'react-bootstrap/Button';
import { setIsAuth, setLogout } from '../store/userSlice';

const Header = () => {
  const {currentUser, isAuth} =   useSelector(({user})=>user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(setLogout());
    localStorage.removeItem('token')
  }

  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <NavLink to={SHOP_ROUTE} style={{color:'white', textDecoration:'none'}}>Купи Девайс</NavLink>
        {isAuth ? 
            <Nav className="ml-auto" style={{color:'white'}}>
                <Button variant="outline-light" onClick={()=>navigate(ADMIN_ROUTE)}>Админ-панель</Button>
                <Button variant="outline-light" className='mx-2' onClick={()=>logout()}>Выйти</Button>
            </Nav>
            :
            <Nav className="ml-auto" style={{color:'white'}}>
                <Button variant="outline-light" onClick={()=>navigate(LOGIN_ROUTE)}>Авторизация</Button>
            </Nav>
        }
        </Container>
    </Navbar>
    
  )
}

export default Header
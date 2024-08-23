import React, { useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { useDispatch, useSelector } from 'react-redux';
import { login, registration, setIsAuth } from '../store/userSlice';

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {user} = useSelector(({user})=>user);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const click = async () => {
    try{
      let data;
      if(isLogin) {
        data = dispatch(login({email, password}));
      }else {
        data = dispatch(registration({email, password}));
      }
      dispatch(setIsAuth(true));
      navigate(SHOP_ROUTE);
    }catch(err){
      alert(err.response.data.message)
    }
    
  }

  return (
    <Container className='d-flex justify-content-center align-items-center' style={{height: window.innerHeight - 54}}>
      <Card style={{width:600}} className='p-5'>
        <h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация' }</h2>
        <Form className='d-flex flex-column'>
          <Form.Control value={email} onChange={(e)=>setEmail(e.target.value)} className='mt-3' placeholder='Email'/>
          <Form.Control type='password' value={password} onChange={(e)=>setPassword(e.target.value)} className='mt-3' placeholder='Password'/>
          <Row className='mt-3 pl-3 pr-3'>
            {isLogin ?  <div>
              Нет аккаунта? 
              <NavLink to={REGISTRATION_ROUTE}>Зарегайтесь</NavLink>
            </div> :  <div>
              Есть аккаунт? 
              <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
            </div>}
           
            <Button onClick={click} className='mt-3' variant="outline-success">{isLogin ? 'Войти' : 'Регистрация' }</Button>
          </Row>
        </Form>
      </Card>
    </Container>
  )
}

export default Auth

//rafce
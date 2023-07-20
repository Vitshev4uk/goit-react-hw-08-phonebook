import { useState } from 'react';
import { useAuth } from 'hooks';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operationsAuth';
import { AppBar, Container, Typography } from '@mui/material';
import css from './LoginPage.module.css'

function LoginPage() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  console.log({ email, password });

  const { isAuthError } = useAuth();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegisterNavigete = () => {
    navigate('/signup');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <div>
      

      <AppBar position='static'>
        <Typography
            variant='h4'
            sx={{mb: 4, ml: 17, mt: 4}}
        >Login</Typography>
      </AppBar>
      <Container sx={{mt: 5}}>
        <form onSubmit={handleLogin}>
            <input
        className={css.Input}
        type="email"
        label="enter Email"
        value={email}
        onChange={event => {
          setEmail(event.target.value);
        }}
        sx={{height: '20px'}}
          />
      <input
        type="password"
        label="enter Password"
        value={password}
        onChange={event => {
          setPassword(event.target.value);
        }}
      />
      <br />
      <p>Coconutqwer@gmail.com</p>
      <p>Coconut12345</p>
      {isAuthError && <div>Invalid email or password</div>}
      <button onClick={handleLogin} type='submit'>Login</button> <br /> <br />
        </form>
    
      <button onClick={handleRegisterNavigete}>go to Register</button>
      </Container>
    
    </div>
  );
}

export default LoginPage;

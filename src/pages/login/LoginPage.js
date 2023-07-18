import { useState } from 'react';
import { useAuth } from 'hooks';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operationsAuth';

function LoginPage() {
  const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    
    console.log({email, password})

  const { isAuthError } = useAuth();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegisterNavigete = () => {
    navigate('/signup')
  }

  const handleLogin = () => {
    dispatch(login({email, password}));
  };

  return (
    <div>
      <div>Login</div>
      <input
        type="email"
        placeholder="enter Email"
        value={email}
        onChange={event => {
          setEmail(event.target.value);
        }}
      />
      <input
        type="password"
        placeholder="enter Password"
        value={password}
        onChange={event => {
          setPassword(event.target.value);
        }}
          />
      <br />
      <p>Coconutqwer@gmail.com</p>
      <p>Coconut12345</p>
      {isAuthError && <div>Invalid email or password</div>}
      <button onClick={handleLogin}>Login</button> <br /> <br />
      <button onClick={handleRegisterNavigete}>
        go to Register
      </button>
    </div>
  );
}

export default LoginPage;

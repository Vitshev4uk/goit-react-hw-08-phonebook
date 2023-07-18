import { useState } from 'react';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operationsAuth';

function LoginPage() {
  const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    
    console.log({email, password})

  const { isAuthError } = useAuth();

  const dispatch = useDispatch();

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
      {isAuthError && <div>Invalid email or password</div>}
      <button onClick={handleLogin}>Login</button> <br /> <br />
      <button>
        go to Register
      </button>
    </div>
  );
}

export default LoginPage;

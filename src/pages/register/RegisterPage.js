import { useState } from 'react';
import { useAuth } from 'hooks';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operationsAuth';

function RegisterPage() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const { isAuthError } = useAuth();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLoginNavigete = () => {
        navigate('/login');
    }

  const handleRegister = () => {
    dispatch(register({ name, email, password }));
  };

  return (
    <div>
      <div>Login</div>
      <input
        type="text"
        placeholder="enter Name"
        value={name}
        onChange={event => {
          setName(event.target.value);
        }}
      />
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
      <button onClick={handleRegister}>Register</button> <br /> <br />
      <button onClick={handleLoginNavigete}>go to Login</button>
    </div>
  );
}

export default RegisterPage;

// import { useState, useRef } from 'react';
// import { useDispatch } from 'react-redux';
// import { login } from 'redux/auth/operationsAuth';
// import { register } from 'redux/auth/operationsAuth';
// import { useAuth } from 'hooks';

// function AuthPage2() {
//     const [pageType, setPageType] = useState('login');
    
//     const loginEmailRef = useRef();
//     const loginPasswordRef = useRef();
//     const registerEmailRef = useRef();
//     const registerPasswordRef = useRef();
//   const registerNameRef = useRef();
  
//   const { isAuthError } = useAuth()

//     const dispatch = useDispatch();

//   const handleLogin = () => {
//       const email = loginEmailRef.current.value;
//       const password = loginPasswordRef.current.value;
//       dispatch(login({email, password}))

//   };

//     const handleSignup = () => {
//         const email = registerEmailRef.current.value;
//         const password = registerPasswordRef.current.value;
//         const name = registerNameRef.current.value;
//         dispatch(register({name, email, password}))
//   };

//   if (pageType === 'login') {
//     return (
//       <div>
//         <div>Login</div>
//         <input ref={loginEmailRef} type="email" placeholder="enter Email" />
//         <input ref={loginPasswordRef} type="password" placeholder="enter Password" />
//         {isAuthError && <div>Invalid email or password</div>}
//         <button onClick={handleLogin}>Login</button> <br /> <br />
//         <button
//           onClick={() => {
//             setPageType('register');
//           }}
//         >
//           go to Register
//         </button>
//       </div>
//     );
//   }
//   if (pageType === 'register') {
//     return (
//       <div>
//         <div>Register</div>
//         <input ref={registerNameRef} type="text" placeholder="enter Name" />
//         <input ref={registerEmailRef} type="email" placeholder="enter Email" />
//         <input ref={registerPasswordRef} type="password" placeholder="enter Password" />
//           {isAuthError && <div>try another characters</div>}
//         <button onClick={handleSignup}>Sign Up</button> <br /> <br />
//         <button
//           onClick={() => {
//             setPageType('login');
//           }}
//         >
//           go to Login
//         </button>
//       </div>
//     );
//   }
// }

// export default AuthPage2;

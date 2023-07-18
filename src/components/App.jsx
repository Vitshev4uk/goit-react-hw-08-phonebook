import React from 'react';
import { useEffect } from 'react';
import { useAuth } from '../hooks';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Content from './Content/Content';
// import AuthPage2 from 'pages/AuthPage2';
import LoginPage from 'pages/login/LoginPage';
import RegisterPage from 'pages/register/RegisterPage';
import NotFoundPage from 'pages/notFound/NotFound';
import ProtectedRoute from 'routes/ProtectedRoute';
// import { LoginPage2 } from 'pages/login/LoginPage2'
// import ContactForm from './ContactForm/ContactForm';
// import Filter from './Filter/Filter';
// import ContactList from './ContactList/ContactList';
// import ErrorPage from './ErrorPage/ErrorPage';
// import { useDispatch } from 'react-redux';
// import { fetchContacts } from 'redux/operations';
// import { useSelector } from 'react-redux';

function App() {
  const { isLoggedIn, user } = useAuth();
  console.log({ isLoggedIn, user });

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn]);

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<RegisterPage />} />
      <Route
        path="/"
        element={
          <ProtectedRoute isLoggedin={isLoggedIn}>
            {/* <ContactForm /> */}
            {/* <Filter />
            <ContactList /> */}
            <Content/>
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );

  // return <LoginPage />
  // return <RegisterPage/>

  // if (isLoggedIn) {
  //   return <Content/>
  // } else {
  //   return <AuthPage2/>
  // }

  // const dispatch = useDispatch();
  // React.useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  // const isLoading = useSelector(state => state.isLoading);
  // const errorState = useSelector(state => state.error);

  // return (
  //   <div>
  //     <h1
  //       style={{
  //         textAlign: 'center',
  //         margin: 15,
  //       }}
  //     >
  //       Phonebook
  //     </h1>
  //     {/* <ContactForm />
  //     <h2
  //       style={{
  //         textAlign: 'center',
  //         margin: 15,
  //       }}
  //     >
  //       Contacts
  //     </h2>
  //     <Filter />
  //     {isLoading && <b>Request in progress...</b>}
  //     {errorState === true ? <ErrorPage/> : <ContactList />} */}
  //     {/* <ContactList /> */}
  //   </div>
  // );
}

export default App;

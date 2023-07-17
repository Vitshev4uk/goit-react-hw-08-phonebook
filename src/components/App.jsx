import React from 'react';
import { useAuth } from '../hooks';
import Content from './Content/Content';
import AuthPage2 from 'pages/AuthPage2';
// import ContactForm from './ContactForm/ContactForm';
// import Filter from './Filter/Filter';
// import ContactList from './ContactList/ContactList';
// import ErrorPage from './ErrorPage/ErrorPage';
// import { useDispatch } from 'react-redux';
// import { fetchContacts } from 'redux/operations';
// import { useSelector } from 'react-redux';



function App() {

  const {
    isLoggedIn,
    user
  } = useAuth();
  console.log({ isLoggedIn, user });


  if (isLoggedIn) {
    return <Content/>
  } else {
    return <AuthPage2/>
  }

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

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation'; 
import RegisterPage from '../components/RegisterPage/RegisterPage'; 
import LoginPage from '../components/LoginPage/LoginPage'; 
import ContactsPage from '../components/ContactsPage/ContactsPage'; 
import { getContactsThunk } from '../redux/contactsThunk';
import { Container, GeneralTitle } from './App.styled';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navigation />
      <Container>
        <GeneralTitle>Phonebook</GeneralTitle>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App;
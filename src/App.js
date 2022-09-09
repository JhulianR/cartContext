
import React from 'react';
import Navbar from './components/NavBar';
import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

const App = () => {
  return (
  

   <BrowserRouter>
   <Navbar/>
   <Routes>
      <Route path='/' element= {<ItemListContainer />} />
      <Route path='/category/:id' element= {<ItemListContainer />} />
      <Route path='/prouctos/:id' element= {<ItemDetailContainer />} />
    </Routes>
   </BrowserRouter>
   
  );
};

export default App;

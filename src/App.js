
import React from 'react';
import Navbar from './components/NavBar';
import './App.css';
//import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';

function App() {
  return (
   <>
   <Navbar/>
   
   {/*<ItemListContainer/>*/}
   <ItemDetailContainer />
   </>
  );
}

export default App;

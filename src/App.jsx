import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Description from './components/Description';
import Form from './components/Form';
import "./App.css"
import { useState,useEffect} from 'react';
import axios from 'axios';
import Home from './components/Home';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import React from 'react';
import Favorites from './components/Favorites';

export const AppContext = React.createContext({})

function App() {
//хранения данных туров
const [tyrs, setTyrs] = useState([])
//для хранения избранных
const [favorites, setFavorites] = useState([])
//для хранения объектов корзины
const [cartItems, setCartItems] = useState([])

useEffect (()=>{
  async function axiosData(){
    const tyrsData = await axios.get('https://641c3c071a68dc9e46040f97.mockapi.io/tyrs')   
    setTyrs(tyrsData.data)   
  }
  axiosData();
},[])

  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path='/'
              element={
                <Home
                  item={tyrs}
                />
              }>
          </Route>
          <Route path='/favorites'
            element={
              <Favorites
              favorites = {favorites}
              setFavorites={setFavorites}
              cartItems={cartItems}
              />
            }>
          </Route>
          <Route path='/cart'
              element={
                <Cart/>
              }>
          </Route>
          <Route path='/description'
              element={
                <Description/>
              }>
          </Route>
          <Route path='/form'
              element={
                <Form/>
              }>
          </Route>          
        </Routes>
      </Router> 
      <Footer/>
    </div>
  );
}

export default App;



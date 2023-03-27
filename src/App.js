import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Context from './Context';

import { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import DetallesPizzas from './Components/DetallesPizzas';
import Carro from './Components/Carro';

function App() {

  const endpoint = "/pizzas.json";
  const [pizzas, setPizzas] = useState([])
  const [carrito, setCarrito] = useState([])
  const [montoTotal, setMontoTotal] = useState(0)

  useEffect(() => {
    datosApi()
  }, [])

  const datosApi = () =>{
    fetch(endpoint).then(resp => resp.json())
    .then(data =>{
      setPizzas(data)
    })
  }

  const calcularMontoTotal = () => {
    const recorreCarrito = carrito;
    let nuevoMonto = 0
    recorreCarrito.map((dato) => (nuevoMonto += dato.cantidad * dato.price))
    setMontoTotal(nuevoMonto)
  }

  useEffect(() => {
    calcularMontoTotal()
  }, [carrito])

  const Agregar = (id) => {
    const nuevoCarrito = [...carrito]
    const indexCarrito = nuevoCarrito.findIndex(dato => dato.id === id)

    if (indexCarrito >= 0) {
      nuevoCarrito[indexCarrito].cantidad += 1
      setCarrito(nuevoCarrito)
    } else {
      const recorrePizzas = [...pizzas]
      const indexPizza = recorrePizzas.findIndex(dato => dato.id === id)
      const nuevoItem = {
        id: id,
        img: recorrePizzas[indexPizza].img,
        name: recorrePizzas[indexPizza].name,
        price: recorrePizzas[indexPizza].price,
        cantidad: 1
      }
      setCarrito([...carrito, nuevoItem])
    }
  }

  const Quitar = (id) => {
    const nuevoCarrito = [...carrito]
    const indexCarrito = nuevoCarrito.findIndex(dato => dato.id === id)

    if (indexCarrito >= 0) {
      if (nuevoCarrito[indexCarrito].cantidad > 1) {
        nuevoCarrito[indexCarrito].cantidad -= 1
        setCarrito(nuevoCarrito)
      }
      else {
        const quitarDelcarrito = nuevoCarrito.filter((dato) => dato.id !== id)
        setCarrito(quitarDelcarrito)
      }
    }
  }

  const globalState = { pizzas, carrito, montoTotal, Agregar, Quitar };
  return (
    <div className="App">
      <Context.Provider value={globalState} >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pizzas/:id' element={<DetallesPizzas />} />
            <Route path='/carrito' element={<Carro />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;

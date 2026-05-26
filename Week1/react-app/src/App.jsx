import './App.css'
import { useState } from "react";

import Header from './components/Header.jsx'
import ProfileCard from './components/ProfileCard.jsx'
import ProductCard from './components/ProductCard.jsx'
import Footer from './components/Footer.jsx'

function App() {

  const [count, setCount] = useState(0);

  function Increment() {
    setCount(count + 1);
  }

  function Decrement() {
    setCount(count - 1);
  }

  function Reset() {
    setCount(0);
  }

  return (
    <>
      <Header />

      <ProfileCard />

      <h2>Count: {count}</h2>

      <button onClick={Increment}>Increment</button>

      <button onClick={Decrement}>Decrement</button>

      <button onClick={Reset}>Reset</button>

      <ProductCard name="Laptop" price="15000" />

      <ProductCard name="Computer" price="100000" />

      <Footer />
    </>
  )
}

export default App
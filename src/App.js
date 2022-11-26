
import { useState } from 'react';
import './App.css';
import Header from './components/Layouts/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/Context/CartProvider';

function App() {

  const [showCart, setShowCart] = useState(false)

  return (
    <CartProvider>
      {showCart && <Cart showCart={setShowCart} />}
      <Header showCart={setShowCart} /> 
      <main>
        <Meals />    
      </main>
    </CartProvider>
  );
}

export default App;


import { Fragment, useState } from 'react';
import './App.css';
import Header from './components/Layouts/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {

  const [showCart, setShowCart] = useState(false)

  return (
    <Fragment>
      {showCart && <Cart showCart={setShowCart} />}
      <Header showCart={setShowCart} /> 
      <main>
        <Meals />    
      </main>
    </Fragment>
  );
}

export default App;

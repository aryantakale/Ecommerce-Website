import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';

import Header from './Comonents/Header';
import Home from './Comonents/Home';
import Cart from './Comonents/Cart';

function App() {
  return (
    <BrowserRouter>
    <Header/>

    <div className="App">
    <Routes>
    <Route path='/' exact  element={ <Home/> }/>
    
    <Route path='/cart' exact  element={<Cart/>}/>
    </Routes>
    </div>
    </BrowserRouter>

  );
}

export default App;

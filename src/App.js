import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import Products from './components/pages/Products'
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' exact element={<Home />}/>
    <Route path='/services' element={<Services />} />
    <Route path='/sign-up' element={<SignUp />} />
    <Route path='/products' element={<Products />}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;

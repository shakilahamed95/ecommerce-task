import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import AllProducts from './Pages/AllProducts';
import CustomerReview from './Components/CustomerReview';
import Footer from './Components/Footer';
import Order from './Pages/Order';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/allproducts' element={<AllProducts></AllProducts>}></Route>
        <Route path='/allreview' element={<CustomerReview></CustomerReview>}></Route>
        <Route path='/all-order' element={<Order></Order>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
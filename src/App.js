
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './Component/AddProduct';
import EditProduct from './Component/EditProduct';
import Home from './Component/Home';
import Navbar from './Component/Navbar';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/addProduct' element={<AddProduct/>}></Route>
      <Route path='/editProduct/:id' element={<EditProduct/>}></Route>
    </Routes>
    </>
  );
}

export default App;

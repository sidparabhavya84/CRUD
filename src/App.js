import './App.css';
import { Route, Routes } from 'react-router-dom'; 
import Product from './component/Cardview/Product';
import ProductView from './component/Cardview/ProductView';


function App() {
  return (
    <>
      
      <Routes>
        <Route path="/Product" element={<Product/>}/>
        <Route path="/ProductView" element={<ProductView/>}/>

      </Routes>
      
    </>
  );
}

export default App;

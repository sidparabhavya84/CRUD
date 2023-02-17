import './App.css';
import { Route, Routes } from 'react-router-dom'; 
import AddEmployee from './component/AddEmployee/AddEmployee';
import EmpView from './component/AddEmployee/EmpView';

function App() {
  return (
    <>
      
      <Routes>
        <Route path='/AddEmployee' element={<AddEmployee/>}/>
        <Route path='/EmpView' element={<EmpView/>}/>

      </Routes>
    </>
  );
}

export default App;

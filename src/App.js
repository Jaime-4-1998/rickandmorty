import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/index'
import InicioPer from './components/InicioPer'
import Personaje from './components/Personaje'
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/InicioPer' element={<InicioPer/>}></Route>
        <Route path='/personaje/:id' element={<Personaje />}></Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

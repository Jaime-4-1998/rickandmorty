import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/index'
import Character from './components/Character'
import Personaje from './components/Personaje/Personaje'
import Locations from "./components/Locations";
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Character' element={<Character/>} />
        <Route path='/Locations' element={< Locations/>} /> 
        <Route path='/personaje/:id' element={<Personaje />} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

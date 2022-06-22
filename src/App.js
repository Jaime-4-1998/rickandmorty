import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/index'
import Character from './components/Character'
import Personaje from './components/Personaje'
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Character' element={<Character/>}></Route>
        <Route path='/personaje/:id' element={<Personaje />}></Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

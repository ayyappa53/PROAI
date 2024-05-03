import "./App.css";
import {useState,createContext} from 'react'
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './Components/pages/About';
import Login from './Components/pages/Login';
import Register from './Components/pages/Register';
import Profile from "./Components/Profile/Profile";
import proai from "./Components/Profile/proai";

export const store = createContext();
const App = () => {
  const [token,setToken]=useState(null);
  return (
    <store.Provider value={[token,setToken]}>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<About/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
    </BrowserRouter>
    </store.Provider>
  )
}
export default App;
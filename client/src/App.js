import './App.css';
import CheckoutPhaase2 from './CheckoutPhase2';
import Home from './Home'
import Navbar from './Navbar';
import SearchPage from './SearchPage';
import {createContext, useState, useMemo} from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export const MovieContext = createContext();

function App() {
  const [globalMovie, setGlobalMovie] = useState()
  const value = useMemo(() => ({ globalMovie, setGlobalMovie }), [globalMovie, setGlobalMovie]);
return (
  <div>
    <MovieContext.Provider value={value}>
    <Router>
    <Navbar/>
    <Routes>
      <Route exact key={1} path='/' element={<Home />}/>
      <Route exact key={2} path='/search' element={<SearchPage/>}/>
      <Route exact key={3} path='/checkout/2' element={<CheckoutPhaase2/>}/>
    </Routes>
    </Router>
    </MovieContext.Provider>
  </div>
)
 
}

export default App;

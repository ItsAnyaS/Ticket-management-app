import './App.css';
import CheckoutPhaase2 from './CheckoutPhase2';
import CheckOutStage3 from './CheckOutStage3'
import Home from './Home'
import Navbar from './Navbar';
import SearchPage from './SearchPage';
import {createContext, useState, useMemo} from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MoviePage from './MoviePage';
import CheckoutStage1 from './CheckoutStage1'
import AuthPage from './AuthPage'
import MyTickets from './MyTickets';

export const MovieContext = createContext();
export const TheaterContext = createContext();

function App() {
  const [globalMovie, setGlobalMovie] = useState({movie: {}, theater: '', showtime_id: ''})
  const value = useMemo(() => ({ globalMovie, setGlobalMovie }), [globalMovie, setGlobalMovie]);
  const [loggedIn, setLoggedIn] = useState((document.cookie == 'hash=' || document.cookie == '') ? false : true)

return (
  <div>
    <MovieContext.Provider value={value}>
    <Router>
    <Navbar setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
    <Routes>
      <Route exact key={1} path='/' element={<Home />}/>
      <Route exact key={2} path='/search' element={<SearchPage/>}/>
      <Route exact key={3} path='/movie' element={<MoviePage/>}/>
      <Route exact key={4} path='/checkout/1' element={<CheckoutStage1/>}/>
      <Route exact key={5} path='/checkout/2' element={<CheckoutPhaase2/>}/>
      <Route exact key={6} path='/checkout/3' element={<CheckOutStage3/>}/>
      <Route exact key={7} path='/authenticate' element={<AuthPage setLoggedIn={setLoggedIn} />}/>
      <Route exact key={8} path='/my_tickets' element={<MyTickets />}/>
    </Routes>
    </Router>
    </MovieContext.Provider>
  </div>
)
 
}

export default App;

import './App.css';
import CheckoutPhaase2 from './CheckoutPhase2';
import Home from './Home'
import Navbar from './Navbar';
import SearchPage from './SearchPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MoviePage from './MoviePage';
import CheckoutStage1 from './CheckoutStage1'

function App() {
return (
  <div>
    <Router>
    <Navbar/>
    <Routes>
      <Route exact key={1} path='/' element={<Home />}/>
      <Route exact key={2} path='/search' element={<SearchPage/>}/>
      <Route exact key={5} path='/movie' element={<MoviePage/>}/>
      <Route exact key={3} path='/checkout/1' element={<CheckoutStage1/>}/>
      <Route exact key={4} path='/checkout/2' element={<CheckoutPhaase2/>}/>
    </Routes>
</Router>
  </div>
)
 
}

export default App;

import './App.css';
import CheckoutPhaase2 from './CheckoutPhase2';
import Home from './Home'
import Navbar from './Navbar';
import SearchPage from './SearchPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
return (
  <div>
    <Router>
    <Navbar/>
    <Routes>
      <Route exact key={1} path='/' element={<Home />}/>
      <Route exact key={2} path='/search' element={<SearchPage/>}/>
      <Route exact key={3} path='/checkout/2' element={<CheckoutPhaase2/>}/>
    </Routes>
</Router>
  </div>
)
 
}

export default App;

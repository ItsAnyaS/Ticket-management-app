
import './App.css';

import Home from './Home'
import Navbar from './Navbar';
import SearchPage from './SearchPage';
import MoviePage from './MoviePage';
import CheckoutStage1 from './CheckoutStage1'

function App() {
return (
  <div>
    <Navbar/>
    <Home/>
    <SearchPage/>
    <MoviePage/>
    <CheckoutStage1 />
  </div>
)
 
}

export default App;

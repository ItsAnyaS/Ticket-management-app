import { NavLink } from "react-router-dom"
import './App.css'
const Navbar = ({ setLoggedIn, loggedIn }) => {
  const handleSignOut = () => {
    document.cookie = 'hash='
    setLoggedIn(false)
  }
  return (
    <nav>
{/* <<<<<<< HEAD
    <div>Logo</div>
    <NavLink to='/search'> <button className="nav-cta btn-hover">Get Tickets</button></NavLink>
    <NavLink to='/authenticate'> <button className="login btn-hover">Log In</button></NavLink>
  </nav>
)
======= */}
      <div>Logo</div>
      <NavLink to='/search'> <button className="nav-cta">Get Tickets</button></NavLink>
      <NavLink to={loggedIn ? '/my_tickets' : '/authenticate'}> <button className="login">My Tickets</button></NavLink>
      { loggedIn
        ?
        <button className="login" onClick={handleSignOut}>Sign Out</button>
        :
        <NavLink to='/authenticate'> <button className="login">Log In</button></NavLink>
      }
        
    </nav>
  )
}

export default Navbar
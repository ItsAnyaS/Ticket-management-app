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
      <div><img className="logo" src="https://www.logomaker.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6kh...aFpRFKnBbOwXs1M3EMoAJtliYvhvdr9f89"/></div>
      <NavLink to='/search'> <button className="nav-cta">Get Tickets</button></NavLink>
      <NavLink to='/my_tickets'> <button className="login">My Tickets</button></NavLink>
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
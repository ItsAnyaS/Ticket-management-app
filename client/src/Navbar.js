import { NavLink } from "react-router-dom"
import './App.css'
const Navbar = () => {
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
      <NavLink to='/my_tickets'> <button className="login">My Tickets</button></NavLink>
      <NavLink to='/authenticate'> <button className="login">Log In</button></NavLink>
    </nav>
  )
}

export default Navbar
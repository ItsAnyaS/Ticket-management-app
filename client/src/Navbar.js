import { NavLink } from "react-router-dom"
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
      <NavLink to='/search'> <button>Get Tickets</button></NavLink>
      <input type='text' placeholder='search'/>
      <NavLink to='/my_tickets'> <button>My Tickets</button></NavLink>
      <NavLink to='/authenticate'> <button>Log In</button></NavLink>
    </nav>
  )
}

export default Navbar
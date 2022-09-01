import { NavLink } from "react-router-dom"
const Navbar = () => {
  return (
    <nav>
      <div>Logo</div>
      <NavLink to='/search'> <button>Get Tickets</button></NavLink>
      <input type='text' placeholder='search'/>
      <NavLink to='/my_tickets'> <button>My Tickets</button></NavLink>
      <NavLink to='/authenticate'> <button>Log In</button></NavLink>
    </nav>
  )
}

export default Navbar
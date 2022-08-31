import { NavLink } from "react-router-dom"
const Navbar = () => {
return (
    <nav>
    <div>Logo</div>
    <NavLink to='/search'> <button>Get Tickets</button></NavLink>
    <input type='text' placeholder='search'/>
  </nav>
)
}

export default Navbar
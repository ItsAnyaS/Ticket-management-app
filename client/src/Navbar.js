import { NavLink } from "react-router-dom"
const Navbar = () => {
return (
    <nav>
    <div>Logo</div>
    <NavLink to='/search'> <button className="nav-cta btn-hover">Get Tickets</button></NavLink>
    <NavLink to='/authenticate'> <button className="login btn-hover">Log In</button></NavLink>
  </nav>
)
}

export default Navbar
import { Link } from "react-router-dom"
import "./Navbar.css"
const Navbar = () => {
  return (
    <nav>
      <ul className="navbar">
        <li className="link">
          <Link to="/">Home</Link>
        </li>
        <li className="link">
          <Link to="/about">About</Link>
        </li>
        <li className="link">
          <Link to="/services">Services</Link>
        </li>
        <li className="link">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar

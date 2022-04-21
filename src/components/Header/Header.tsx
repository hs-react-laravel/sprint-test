import { Link } from "react-router-dom"

const Header = () => {
  return (
    <nav className="header-navbar">
      <div className="navbar-container">
        <Link to='/teams'>Teams</Link>
        <Link to='/members'>Members</Link>
        <Link to='/todos'>To-do</Link>
      </div>
    </nav>
  )
}

export default Header
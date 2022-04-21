import { Link } from "react-router-dom"

interface Props {
  currentMenu: string
  setCurrentMenu: (menu: string) => void
}

const Header = ({
  currentMenu,
  setCurrentMenu
}: Props) => {
  return (
    <header className="header-navbar">
      <ul className="navbar-container">
        <li
          className='nav-item'
          onClick={() => setCurrentMenu('teams')}>
          <Link className={currentMenu === 'teams' ? 'active' : ''} to='/teams'>Teams</Link>
        </li>
        <li
          className='nav-item'
          onClick={() => setCurrentMenu('members')}>
          <Link className={currentMenu === 'members' ? 'active' : ''} to='/members'>Members</Link>
        </li>
        <li
          className='nav-item'
          onClick={() => setCurrentMenu('todos')}>
          <Link className={currentMenu === 'todos' ? 'active' : ''} to='/todos'>To-do</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
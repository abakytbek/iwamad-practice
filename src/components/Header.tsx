import { NavLink } from 'react-router'
import './Header.css'

type HeaderProps = {
  name: string
}

function Header({ name }: HeaderProps) {
  return (
    <header>
      <h1>{name}</h1>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  )
}

export default Header
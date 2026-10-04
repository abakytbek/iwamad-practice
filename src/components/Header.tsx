import { NavLink } from 'react-router'
import { useLikes } from '../context/LikesContext'
import './Header.css'

type HeaderProps = {
  name: string
}

function Header({ name }: HeaderProps) {
  const { likes } = useLikes()

  return (
    <header>
      <h1>{name}</h1>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <p>Likes: {likes}</p>
    </header>
  )
}

export default Header
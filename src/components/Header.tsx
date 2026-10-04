import { NavLink } from 'react-router'
import { useLikes } from '../context/LikesContext'
import './Header.css'
import logo from '../assets/logo.svg'

type HeaderProps = {
  name: string
}

function Header({ name }: HeaderProps) {
  const { likes } = useLikes()

  return (
    <header>
      <div className="header-brand">
        <img src={logo} alt="" width={32} height={32} />
        <h1>{name}</h1>
      </div>

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
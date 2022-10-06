import { Link, NavLink } from 'react-router-dom';

function Navigation({openMenu}) {
  return (
    <>
      <nav className="navigation">
        <NavLink to="/movies" activeClassName='navigation__link_active' className="navigation__link">Фильмы</NavLink>
        <NavLink to="/saved-movies" activeClassName='navigation__link_active' className="navigation__link">Сохраненные фильмы</NavLink>
      </nav>
      <button onClick={openMenu} className='navigation__burger' type='button' title='Открыть меню'/>
      <Link to="/profile" className="navigation__profile">Аккаунт<span className="navigation__logo"/></Link>
    </>
  )
}

export default Navigation;
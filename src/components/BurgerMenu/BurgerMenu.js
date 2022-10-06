import { Link, NavLink } from "react-router-dom";

function BurgerMenu({ isOpen, closeMenu }) {
  return (
    <div className={isOpen ? 'burger burger_visible' : 'burger'}>
    <button title="Закрыть" type="button" className="burger__button" onClick={closeMenu}/>
      <div className="burger__menu">
        <nav className="burger__nav">
          <NavLink exact to="/" activeClassName='burger__link_active' className="burger__link" onClick={closeMenu}>Главная</NavLink>
          <NavLink to="/movies" activeClassName='burger__link_active' className="burger__link" onClick={closeMenu}>Фильмы</NavLink>
          <NavLink to="/saved-movies" activeClassName='burger__link_active' className="burger__link" onClick={closeMenu}>Сохраненные фильмы</NavLink>
        </nav>
        <Link to="/profile" className="burger__profile" onClick={closeMenu}>Аккаунт<span className="navigation__logo"/></Link>
      </div>
    </div>
  )
}

export default BurgerMenu;
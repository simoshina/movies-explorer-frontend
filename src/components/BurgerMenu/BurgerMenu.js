import { Link, NavLink } from "react-router-dom";

function BurgerMenu() {
  return (
    <div className="burger">
    <button title="Закрыть" type="button" className="burger__button"/>
      <div className="burger__menu">
        <nav className="burger__nav">
          <NavLink exact to="/" activeClassName='burger__link_active' className="burger__link">Главная</NavLink>
          <NavLink to="/movies" activeClassName='burger__link_active' className="burger__link">Фильмы</NavLink>
          <NavLink to="/saved-movies" activeClassName='burger__link_active' className="burger__link">Сохраненные фильмы</NavLink>
        </nav>
        <Link to="/profile" className="burger__profile">Аккаунт<span className="navigation__logo"/></Link>
      </div>
    </div>
  )
}

export default BurgerMenu;
import logo from '../../images/logo.svg';
import { Link } from "react-router-dom";

function Register() {
  
  return (
    <div className="auth">
      <Link to="/" className='header__link'><img className="header__logo" alt="Лого" src={logo} /></Link>
      <form className='auth__form'>
        <h2 className="auth__heading">Добро пожаловать!</h2>
        <label for="name-input" className="auth__label">Имя</label>
        <input id="name-input" type="text" name="name" className="auth__input" autoComplete="off" required />
        <span className='auth__error'>Что-то пошло не так...</span>
        <label for="email-input" className="auth__label">E-mail</label>
        <input id="email-input" type="email" name="email" className="auth__input" autoComplete="off" required />
        <span className='auth__error'>Что-то пошло не так...</span>
        <label for="password-input" className="auth__label">Пароль</label>
        <input id="password-input" type="password" name="password" className="auth__input" autoComplete="off" required />
        <span className='auth__error'>Что-то пошло не так...</span>
        <button aria-label="Зарегистрироваться" type="submit" className="auth__button">Зарегистрироваться</button>
        <p className="auth__caption">Уже зарегистрированы? <Link className="auth__link" to="/signin">Войти</Link></p>
      </form>
    </div>
  )
}

export default Register;
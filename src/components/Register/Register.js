import logo from '../../images/logo.svg';
import { Link } from "react-router-dom";
import { useState } from "react";

function Register({ handleRegister, isSuccess }) {
  const [authData, setAuthData] = useState({ name: '', email: '', password: '' });

  function handleChange(e) {
    const {name, value} = e.target;
    setAuthData((prev) => ({
      ...prev,
      [name]: value 
    }));
  }

  function handleSubmit(e){
    e.preventDefault();
    handleRegister(authData)
    console.log(authData)
  }
  
  return (
    <div className="auth">
      <Link to="/" className='header__link'><img className="header__logo" alt="Лого" src={logo} /></Link>
      <form className='auth__form' onSubmit={handleSubmit}>
        <h2 className="auth__heading">Добро пожаловать!</h2>
        <label htmlFor="name-input" className="auth__label">Имя</label>
        <input id="name-input" type="text" name="name" className="auth__input" minLength={2} maxLength={30} autoComplete="off" required onChange={handleChange}/>
        <label htmlFor="email-input" className="auth__label">E-mail</label>
        <input id="email-input" type="email" name="email" className="auth__input" autoComplete="off" required onChange={handleChange}/>
        <label htmlFor="password-input" className="auth__label">Пароль</label>
        <input id="password-input" type="password" name="password" className="auth__input" autoComplete="off" required onChange={handleChange}/>
        <span className={isSuccess ? 'auth__error' : 'auth__error auth__error_visible'}>Что-то пошло не так...</span>
        <button aria-label="Зарегистрироваться" type="submit" className="auth__button">Зарегистрироваться</button>
        <p className="auth__caption">Уже зарегистрированы? <Link className="auth__link" to="/signin">Войти</Link></p>
      </form>
    </div>
  )
}

export default Register;
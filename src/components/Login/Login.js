import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Login({ handleLogin, isSuccess }) {
  const [authData, setAuthData] = useState({ email: '', password: '' });

  function handleChange(e) {
    const {name, value} = e.target;
    setAuthData((prev) => ({
      ...prev,
      [name]: value 
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin(authData);
  } 
  
  return (
    <div className='auth'>
      <Link to='/' className='header__link'><img className='header__logo' alt='Лого' src={logo} /></Link>
      <form className='auth__form' required onSubmit={handleSubmit}>
        <h2 className='auth__heading'>Рады видеть!</h2>
        <label htmlFor="email-input" className='auth__label'>E-mail</label>
        <input id='email-input' type='email' name='email' className='auth__input' autoComplete='off' onChange={handleChange}/>
        <label htmlFor="password-input" className='auth__label'>Пароль</label>
        <input id='password-input' type='password' name='password' className='auth__input' autoComplete='off' onChange={handleChange}/>
        <span className={isSuccess ? 'auth__error' : 'auth__error auth__error_visible'}>Что-то пошло не так...</span>
        <button aria-label='Войти' type='submit' className='auth__button'>Войти</button>
        <p className='auth__caption'>Ещё не зарегистрированы? <Link className='auth__link' to='/signup'>Регистрация</Link></p>
      </form>
    </div>
  )
}

export default Login;
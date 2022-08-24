import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Login() {
  
  return (
    <div className='auth'>
      <Link to='/' className='header__link'><img className='header__logo' alt='Лого' src={logo} /></Link>
      <form className='auth__form'>
        <h2 className='auth__heading'>Рады видеть!</h2>
        <label for="email-input" className='auth__label'>E-mail</label>
        <input id='email-input' type='email' name='email' className='auth__input' autoComplete='off' required />
        <span className='auth__error'>Что-то пошло не так...</span>
        <label for="password-input" className='auth__label'>Пароль</label>
        <input id='password-input' type='password' name='password' className='auth__input' autoComplete='off' required/>
        <span className='auth__error'>Что-то пошло не так...</span>
        <button aria-label='Войти' type='submit' className='auth__button'>Войти</button>
        <p className='auth__caption'>Ещё не зарегистрированы? <Link className='auth__link' to='/signup'>Регистрация</Link></p>
      </form>
    </div>
  )
}

export default Login;
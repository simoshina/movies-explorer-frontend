import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { emailInputValidation, passwordInputValidation } from '../../constants/validation';

function Login({ handleLogin, isSuccess }) {
  const [authData, setAuthData] = useState({ email: '', password: '' });
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'all' });

  function handleChange(e) {
    const {name, value} = e.target;
    setAuthData((prev) => ({
      ...prev,
      [name]: value 
    }));
  }

  function onSubmit() {
    handleLogin(authData);
  } 
  
  return (
    <div className='auth'>
      <Link to='/' className='header__link'><img className='header__logo' alt='Лого' src={logo} /></Link>
      <form className='auth__form' noValidate onSubmit={handleSubmit(onSubmit)}>
        <h2 className='auth__heading'>Рады видеть!</h2>
        <label htmlFor="email-input" className='auth__label'>E-mail</label>
        <input {...register('email', emailInputValidation)} id="email-input" type="email" name="email" className='auth__input' onChange={handleChange}/>
        {errors?.email && <span className='auth__error auth__error_visible'>{errors?.email?.message}</span>}
        <label htmlFor="password-input" className='auth__label'>Пароль</label>
        <input {...register('password', passwordInputValidation)} id="password-input" type="password" name="password" className='auth__input' onChange={handleChange}/>
        {errors?.password && <span className='auth__error auth__error_visible'>{errors?.password?.message}</span>}
        <span className={isSuccess ? 'auth__error' : 'auth__error auth__error_visible'}>Что-то пошло не так...</span>
        <button aria-label='Войти' type='submit' className='auth__button'>Войти</button>
        <p className='auth__caption'>Ещё не зарегистрированы? <Link className='auth__link' to='/signup'>Регистрация</Link></p>
      </form>
    </div>
  )
}

export default Login;
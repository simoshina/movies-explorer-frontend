import { Link } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';

function Profile() {
  
  return (
    <>
      <Header>
        <Navigation/>
      </Header>
      <BurgerMenu/>
      <div className='profile'>
        <h2 className='profile__heading'>Привет, Виталий!</h2>
        <form className='profile__form'>
          <label className='profile__label'>Имя
          <input name='name' className='profile__input' required disabled value='Виталий'/></label>
          <label className='profile__label'>E-mail
          <input name='email' className='profile__input' required disabled value='pochta@yandex.ru'/></label>
        </form>
        <span className='profile__error'>При обновлении профиля произошла ошибка.</span>
        <div className='profile__edit'>
          <p className='profile__link'>Редактировать</p>
          <Link to='/' className='profile__link'>Выйти из аккаунта</Link>
        </div>
        <button className='profile__save-button' type='submit'>Сохранить</button>
      </div>
    </>
  )
}

export default Profile;
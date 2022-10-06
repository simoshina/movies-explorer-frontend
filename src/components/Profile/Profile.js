import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';

function Profile({ isSuccess, handleLogout, handleUpdate, openMenu }) {
  const currentUser = useContext(CurrentUserContext);
  const [isEdit, setIsEdit] = useState(false);
  const [userData, setUserData] = useState({ name: '', email: '' });
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    setUserData(currentUser);
    if (isSuccess) {
      setIsEdit(false);
    } else {
      setIsEdit(true);
      setUserData(currentUser)
    }
  }, [currentUser]);

  function handleChange(e) {
    const {name, value} = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value 
    }));

    if (userData.name !== currentUser.name && userData.email !== currentUser.email) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    handleUpdate(userData);
  }

  function showButton() {
    setIsEdit(true);
  }
  
  return (
    <>
      <Header>
        <Navigation openMenu={openMenu}/>
      </Header>
      <div className='profile'>
        <h2 className='profile__heading'>Привет, {currentUser.name}!</h2>
        <form className='profile__form' onSubmit={handleSubmit}>
          <label className='profile__label'>Имя
          <input name='name' type='text' className='profile__input' required readOnly={isEdit ? false : true} onChange={handleChange} 
          value={userData.name || ''} minLength={2} maxLength={30}/></label>
          <label className='profile__label'>E-mail
          <input name='email' type='email' className='profile__input' required readOnly={isEdit ? false : true} onChange={handleChange} 
          value={userData.email || ''}/></label>
           <span className={isSuccess ? 'profile__error' : 'profile__error profile__error_visible'}>При обновлении профиля произошла ошибка.</span>
        {isEdit ? (
          <button title='Сохранить' className='profile__save-button' disabled={isDisabled ? true : false} type='submit'>Сохранить</button>
        ) : (
          <div className='profile__edit'>
            <p className='profile__link' onClick={showButton}>Редактировать</p>
            <p className='profile__link' onClick={handleLogout}>Выйти из аккаунта</p>
          </div>
        )}
        </form>
       
      </div>
    </>
  )
}

export default Profile;
import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import { emailInputValidation, nameInputValidation } from '../../constants/validation';
import { useForm } from 'react-hook-form';

function Profile({ isSuccess, handleLogout, setIsSuccess, handleUpdate, openMenu }) {
  const currentUser = useContext(CurrentUserContext);
  const [isEdit, setIsEdit] = useState(false);
  const [userData, setUserData] = useState({ name: '', email: '' });
  const [isDisabled, setIsDisabled] = useState(true);
  const { register, handleSubmit, formState: { errors }, setValue } = useForm({ mode: 'all' });

  useEffect(() => {
    setUserData(currentUser);
    setValue('name', currentUser.name);
    setValue('email', currentUser.email)
    if (isSuccess) {
      setIsEdit(false);
    } else {
      setIsEdit(false);
      setIsSuccess(true)
    }
  }, [currentUser]);

  useEffect(() => {
    if (userData.name !== currentUser.name || userData.email !== currentUser.email) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }, [userData])

  function handleChange(e) {
    const {name, value} = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value 
    }));
  }
  
  function onSubmit() {
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
        <form className='profile__form' noValidate onSubmit={handleSubmit(onSubmit)}>
          <label className={`profile__label ${isEdit && 'profile__label_active'}`}>Имя
          <input {...register('name', nameInputValidation)} name='name' type='text' className='profile__input' readOnly={!isEdit} onChange={handleChange}/></label>
          <label className='profile__label'>E-mail
          <input {...register('email', emailInputValidation)} name='email' type='email' className='profile__input' readOnly={!isEdit} onChange={handleChange}/></label>
          {errors?.name && <span className='auth__error auth__error_visible'>{errors?.name?.message}</span>}
          {errors?.email && (errors?.email !== 'undefined') && <span className='auth__error auth__error_visible'>{errors?.email?.message}</span>}
          <span className={`profile__error ${!isSuccess && 'profile__error_visible'}`}>При обновлении профиля произошла ошибка.</span>
          {isEdit ? (
            <button title='Сохранить' className='profile__save-button' disabled={isDisabled} type='submit'>Сохранить</button>
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
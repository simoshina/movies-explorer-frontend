import { useState, useEffect } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { auth } from '../../utils/Auth';
import { api } from '../../utils/MainApi';

import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import ProtectedRoute from '../ProtectedRoute';
import Movies from '../Movies/Movies';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Popup from '../Popup/Popup';

function App() {
  const [isSuccess, setIsSuccess] = useState(true);
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(null);
  const [userMovies, setUserMovies] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (loggedIn) {
      Promise.all([auth.getProfile(), api.getMovies()])
      .then(([data, movies]) => {
        setCurrentUser(data);
        setLoggedIn(true);
        setUserMovies(movies)})
      .catch(err => console.log(err))
    };
    tokenCheck();
  }, [loggedIn]);

  function handleUpdateUser(data) {
    auth.editProfile(data)
    .then((res) => {
      setCurrentUser(res);
      setIsSuccess(true);
      setIsPopupOpen(true)})
    .catch((err) => {
      setIsSuccess(false);
      console.log(err)
    })
  }

  function handleLogin(data) {
     return auth.login(data.email, data.password)
      .then(res => {
        if (res.token) {
          setCurrentUser(res);
          setIsSuccess(true);
          setLoggedIn(true);
          history.push("/movies");
        }
      })
      .catch((err) => {
        console.log(err)
        setLoggedIn(false)
        setIsSuccess(false)
      });
  }

  function handleRegister(data) {
    return auth.register(data.name, data.email, data.password)
      .then(() => {
        handleLogin(data);
        setIsSuccess(true);
      })
      .catch((err) => {
        console.log(err);
        setIsSuccess(false)
      });
  }

  function tokenCheck() {
    auth.getProfile().then(() => {
      setLoggedIn(true);
    })
    .catch((err) => {
      setLoggedIn(false);
      localStorage.clear();
      console.log(err);
    });
  }

  function deleteFilm(film) {
    api.deleteMovie(film._id)
    .then(() => {
      setUserMovies((state) => state.filter((c) => c._id !== film._id));
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function saveFilm(film) {
    const savedFilm = userMovies.find(i => i.movieId === film.id);
    const isSaved = userMovies.some(i => i.movieId === film.id);
    if (!isSaved) {
      api.createMovie(film)
      .then((res) => {
        setUserMovies([res, ...userMovies])
      })
      .catch((err) => {
        console.log(err);
      });
    } else {
      deleteFilm(savedFilm)
    }
  }

  function handleLogout() {
    auth.signout()
    .then()
    .catch((err) => console.log(err));
    setLoggedIn(false);
    setIsSuccess(true);
    history.push('/');
  }

  function openMenu() {
    setIsMenuOpen(true)
  }

  function close() {
    setIsMenuOpen(false);
    setIsPopupOpen(false)
  }

  return (
    <div className='page'>
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path='/'>
            <Main loggedIn={loggedIn} openMenu={openMenu}/>
          </Route>
          <Route path='/signin'>
            {loggedIn ? <Redirect exact to='/'/> : <Login handleLogin={handleLogin} isSuccess={isSuccess}/>}
          </Route>
          <Route path='/signup'>
            {loggedIn ? <Redirect exact to='/'/> : <Register handleRegister={handleRegister} isSuccess={isSuccess}/>}
          </Route>
          <ProtectedRoute path='/profile' isSuccess={isSuccess} openMenu={openMenu} setIsSuccess={setIsSuccess}
            loggedIn={loggedIn} component={Profile} handleUpdate={handleUpdateUser} handleLogout={handleLogout}/>
          <ProtectedRoute path='/movies' openMenu={openMenu}
            loggedIn={loggedIn} component={Movies} saveFilm={saveFilm} userMovies={userMovies}/>
          <ProtectedRoute path='/saved-movies' userMovies={userMovies} openMenu={openMenu}
            loggedIn={loggedIn} component={SavedMovies} deleteFilm={deleteFilm}/>
          <Route path='*' component={NotFound}/>
        </Switch>
        {loggedIn && <BurgerMenu isOpen={isMenuOpen} closeMenu={close}/>}
        <Popup isOpen={isPopupOpen} onClose={close}/>
      </CurrentUserContext.Provider>
    </div>
  )
}

export default App;
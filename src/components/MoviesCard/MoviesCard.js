import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

function MoviesCard ({ movie, saveFilm, deleteFilm, isSaved }) {
  const [isLiked, setIsLiked] = useState(false)

  function likeCard() {
    saveFilm(movie);
    !isSaved ? setIsLiked(true) : setIsLiked(false)
  }
  
  const likeButtonClassName = `card__button ${isLiked || isSaved ? 'card__like_active' : 'card__like'}`;

  function setDuration(duration) {
    const hours = Math.floor(duration/60);
    const minutes = duration % 60;
    return hours + 'ч ' + minutes + 'м';
  };

  return (
    <div className='card' onClick={() => window.open(movie.trailerLink)}>
      <Switch>
        <Route path='/movies'>
          <div className='card__info' onClick={e => e.stopPropagation()}>
            <h2 className='card__title'>{movie.nameRU}</h2>
            <p className='card__subtitle'>{setDuration(movie.duration)}</p>
            <button title='Нравится' onClick={likeCard} className={likeButtonClassName} type='button'/>
          </div>
          <img className='card__image' alt={movie.nameRU} src={'https://api.nomoreparties.co' + movie.image.url}/>
        </Route>
        <Route path='/saved-movies'>
          <div className='card__info' onClick={e => e.stopPropagation()}>
            <h2 className='card__title'>{movie.nameRU}</h2>
            <p className='card__subtitle'>{setDuration(movie.duration)}</p>
            <button title='Удалить' onClick={()=>deleteFilm(movie)} className='card__button card__delete' type='button'/>
          </div>
          <img className='card__image' alt={movie.nameRU} src={movie.image}/>
        </Route>
      </Switch>
    </div>
  )
}

export default MoviesCard;
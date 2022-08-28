import film from '../../images/film.png'
import { Route, Switch } from 'react-router-dom';

function MoviesCard () {
  return (
    <div className='card'>
      <div className='card__info'>
        <h2 className='card__title'>33 слова о дизайне</h2>
        <p className='card__subtitle'>1ч 42м</p>
        <Switch>
          <Route path='/movies'>
            <button title='Нравится' className='card__button card__like' type='button'/>
          </Route>
          <Route path='/saved-movies'>
            <button title='Удалить' className='card__button card__delete' type='button'/>
          </Route>
        </Switch>
      </div>
      <img alt='Постер' className='card__image' src={film}/>
    </div>
  )
}

export default MoviesCard;
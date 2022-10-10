import { useState } from "react";
import { useLocation } from "react-router-dom";
import { CARDSAMOUNT, CARDSAMOUNTMOBILE, MOBILEWIDTH } from "../../constants/config";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({filteredMovies, userMovies, saveFilm, deleteFilm}) {
  const location = useLocation();
  const [renderCards, setRenderCards] = useState(CARDSAMOUNT);
  const [renderCardsMobile, setRenderCardsMobile] = useState(CARDSAMOUNTMOBILE);
  const widthMobile = document.documentElement.clientWidth <= MOBILEWIDTH;

  function loadMore() {
    widthMobile ? setRenderCardsMobile(renderCardsMobile + CARDSAMOUNTMOBILE) : setRenderCards(renderCards + CARDSAMOUNT)
  }

  function checkLike(id) {
    return !!(userMovies.some(i => i.movieId === id))
  }

  return (
    <section className="cardlist">
      {location.pathname === '/movies' ? 
        filteredMovies.length > 0 ?
          widthMobile ?
            filteredMovies.slice(0, renderCardsMobile).map((movie) => (
              <MoviesCard
                key={movie.id}
                movie={movie}
                saveFilm={saveFilm}
                isSaved={checkLike(movie.id)}
              />)) : 
            filteredMovies.slice(0, renderCards).map((movie) => (
              <MoviesCard
                key={movie.id}
                movie={movie}
                saveFilm={saveFilm}
                isSaved={checkLike(movie.id)}
              />))
            :
          <p className="cardlist__notfound">Ничего не найдено</p>
        : 
          userMovies.length > 0 ? 
          userMovies.map((userMovie) => (
            <MoviesCard
              key={userMovie.movieId}
              movie={userMovie}
              deleteFilm={deleteFilm}
            />)) :
          <p className="cardlist__notfound">Вы ещё не добавили фильмы в коллекцию.</p>
        }
        
        {location.pathname === '/movies' && 
          ((!widthMobile && renderCards < filteredMovies.length) ||
          (widthMobile && renderCardsMobile < filteredMovies.length)) &&
          <button className="cardlist__button" onClick={loadMore}>Ещё</button>
        }
    </section>
  )
}

export default MoviesCardList;
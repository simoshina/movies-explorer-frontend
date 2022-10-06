import { useState } from "react";
import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";

function MoviesCardList({filteredMovies, userMovies, isLoading, saveFilm, deleteFilm}) {
  const location = useLocation();
  const [renderCards, setRenderCards] = useState(7);
  const [renderCardsMobile, setRenderCardsMobile] = useState(5);
  const widthMobile = document.documentElement.clientWidth <= 560;

  function loadMore() {
    widthMobile ? setRenderCardsMobile(renderCardsMobile + 5) : setRenderCards(renderCards + 7)
  }

  function checkLike(id) {
    return !!(userMovies.some(i => i.movieId === id))
  }

  return (
    <section className="cardlist">
      {isLoading && <Preloader/>}

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
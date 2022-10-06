import { useEffect, useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';

function Movies({ movies, openMenu, isLoading, saveFilm, userMovies }) {
  const [inputValue, setInputValue] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [shortFilm, setShortFilm] = useState(false);
  
  useEffect(() => {
    localStorage.movies ? setFilteredMovies(JSON.parse(localStorage.movies)) : setFilteredMovies([]);
    localStorage.keyword ? setInputValue(localStorage.getItem('keyword')) : setInputValue('');
  }, []);

  function findMovies(data, value) {
    const filteredData = data.filter((item) => item.nameRU.toLowerCase().includes(value.toLowerCase()));
    localStorage.setItem("keyword", value);
    if (localStorage.tumbler === 'true') {
      const shortMoviesData = filteredData.filter((item) => item.duration <= 40);
      localStorage.setItem("movies", JSON.stringify(shortMoviesData));
      setFilteredMovies(shortMoviesData);
    } else {
      localStorage.setItem("movies", JSON.stringify(filteredData));
      setFilteredMovies(filteredData);
    }
  };

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    findMovies(movies, inputValue)
  }

  function checkTumbler() {
    if (shortFilm === false) {
      setShortFilm(true);
      localStorage.setItem('tumbler', true)
    } else {
      setShortFilm(false);
      localStorage.setItem('tumbler', false)
    }
    findMovies(movies, inputValue)
  }

  return (
    <>
      <Header>
        <Navigation openMenu={openMenu}/>
      </Header>
      <main className='movies'>
        <SearchForm handleChange={handleChange} handleSubmit={handleSubmit} inputValue={inputValue}/>
        <FilterCheckbox checkTumbler={checkTumbler} shortFilm={shortFilm}/>
        <MoviesCardList saveFilm={saveFilm} isLoading={isLoading} filteredMovies={filteredMovies} userMovies={userMovies}/>
      </main>
      <Footer/>
    </>
  )
}

export default Movies;
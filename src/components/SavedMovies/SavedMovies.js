import { useEffect, useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies({ userMovies, openMenu, deleteFilm }) {
  const [inputValue, setInputValue] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [shortFilm, setShortFilm] = useState(false);
  
  useEffect(() => {
    setFilteredMovies(userMovies);
    setShortFilm(false)
  }, [userMovies]);

  function findUserMovies(data, value) {
    const movies = data.filter((item) => item.nameRU.toLowerCase().includes(value.toLowerCase()));
    const shortMoviesData = movies.filter((item) => item.duration <= 40);
    shortFilm ? setFilteredMovies(shortMoviesData) : setFilteredMovies(movies);
  }

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    shortFilm ? findUserMovies(filteredMovies, inputValue) : findUserMovies(userMovies, inputValue)
  }

  function checkTumbler() {
    setShortFilm(!shortFilm);
  }

  return (
    <>
      <Header>
        <Navigation openMenu={openMenu}/>
      </Header>
      <main className='movies'>
        <SearchForm handleChange={handleChange} handleSubmit={handleSubmit} inputValue={inputValue}/>
        <FilterCheckbox checkTumbler={checkTumbler} shortFilm={shortFilm}/>
        <MoviesCardList userMovies={filteredMovies} deleteFilm={deleteFilm}/>
      </main>
      <Footer/>
    </>
  )
}

export default SavedMovies;
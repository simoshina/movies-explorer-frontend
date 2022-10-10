import { useEffect, useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from "../Preloader/Preloader";
import { SHORTFILMDURATION } from '../../constants/config';

function SavedMovies({ userMovies, openMenu, deleteFilm, isLoading }) {
  const [inputValue, setInputValue] = useState('');
  const [filteredMovies, setFilteredMovies] = useState(userMovies);
  const [shortFilm, setShortFilm] = useState(false);
  
  useEffect(() => {
    findUserMovies(userMovies, inputValue);
  }, [shortFilm]);

  useEffect(() => {
    setFilteredMovies(userMovies);
  }, [userMovies])

  function findUserMovies(data, value) {
    const movies = data.filter((item) => item.nameRU.toLowerCase().includes(value.toLowerCase()));
    if (shortFilm) {
      const shortMoviesData = movies.filter((item) => item.duration <= SHORTFILMDURATION);
      setFilteredMovies(shortMoviesData)
    } else {
      setFilteredMovies(movies);
    }
  }

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit() {
    findUserMovies(userMovies, inputValue);
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
        <SearchForm handleChange={handleChange} onSubmit={handleSubmit} inputValue={inputValue}/>
        <FilterCheckbox checkTumbler={checkTumbler} shortFilm={shortFilm}/>
        {isLoading ? <Preloader/> :
        <MoviesCardList userMovies={filteredMovies} deleteFilm={deleteFilm}/>}
      </main>
      <Footer/>
    </>
  )
}

export default SavedMovies;
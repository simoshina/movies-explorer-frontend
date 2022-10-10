import { useEffect, useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from "../Preloader/Preloader";
import { moviesApi } from '../../utils/MoviesApi';
import { SHORTFILMDURATION } from '../../constants/config';

function Movies({ openMenu, saveFilm, userMovies }) {
  const [moviesData, setMoviesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [shortFilm, setShortFilm] = useState(false);
  
  useEffect(() => {
    localStorage.filteredMovies ? setFilteredMovies(JSON.parse(localStorage.filteredMovies)) : setFilteredMovies([]);
    localStorage.movies ? setMoviesData(JSON.parse(localStorage.movies)) : setMoviesData([]);
    localStorage.keyword ? setInputValue(localStorage.getItem('keyword')) : setInputValue('');
    localStorage.tumbler && setShortFilm(localStorage.getItem('tumbler'))
  }, []);

  function getInitialMoviesData(value) {
    setIsLoading(true);
    moviesApi.getMovies()
    .then(movies => {
      setMoviesData(localStorage.setItem("movies", JSON.stringify(movies)));
      findMovies(movies, value)})
    .catch(err => console.log(err))
    .finally(() => setIsLoading(false))
  }

  function findMovies(data, value) {
    const filteredData = data.filter((item) => item.nameRU.toLowerCase().includes(value.toLowerCase()));
    localStorage.setItem("keyword", value);
    if (localStorage.tumbler === 'true') {
      const shortMoviesData = filteredData.filter((item) => item.duration <= SHORTFILMDURATION);
      localStorage.setItem("filteredMovies", JSON.stringify(shortMoviesData));
      setFilteredMovies(shortMoviesData);
    } else {
      localStorage.setItem("filteredMovies", JSON.stringify(filteredData));
      setFilteredMovies(filteredData);
    }
  };

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit() {
    moviesData.length === 0 ? getInitialMoviesData(inputValue) : findMovies(moviesData, inputValue);
  }

  function checkTumbler() {
    setShortFilm(!shortFilm);
    !shortFilm ? localStorage.setItem('tumbler', true) : localStorage.setItem('tumbler', false);
    !shortFilm ? findMovies(filteredMovies, localStorage.keyword) : findMovies(moviesData, localStorage.keyword);
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
          <MoviesCardList saveFilm={saveFilm} filteredMovies={filteredMovies} userMovies={userMovies}/>}
      </main>
      <Footer/>
    </>
  )
}

export default Movies;
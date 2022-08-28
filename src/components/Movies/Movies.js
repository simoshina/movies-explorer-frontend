import BurgerMenu from '../BurgerMenu/BurgerMenu';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';

function Movies() {
  return (
    <>
      <Header>
        <Navigation/>
      </Header>
      <BurgerMenu/>
      <main className='movies'>
        <SearchForm/>
        <FilterCheckbox/>
        <MoviesCardList/>
      </main>
      <Footer/>
    </>
  )
}

export default Movies;
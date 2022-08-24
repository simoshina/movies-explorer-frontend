import Promo from '../Main/Promo/Promo';
import AboutProject from '../Main/AboutProject/AboutProjest';
import AboutMe from './AboutMe/AboutMe';
import Techs from './Techs/Techs';
import Portfolio from './Portfolio/Portfolio';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function Main() {
  return (
    <>
      <Header>
        <nav className='header__nav'>
          <Link to='/signup' className='header__navlink'>Регистрация</Link>
          <Link to='/signin' className='header__navlink'>Войти</Link>
        </nav>
      </Header>
      <BurgerMenu/>
      <main>
        <Promo/>
        <AboutProject id='project'/>
        <Techs id='techs'/>
        <AboutMe id='student'/>
        <Portfolio/>
      </main>
      <Footer/>
    </>
  )
}

export default Main;
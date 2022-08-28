import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Header(props) {

  return (
    <header className='header'>
      <Link to='/' className='header__link'><img className='header__logo' alt='Лого' src={logo} /></Link>
      {props.children}
    </header>
  )
}

export default Header;
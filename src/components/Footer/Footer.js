function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__subtitle'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__bottom'>
        <p className='footer__copyright'>© 2022</p>
        <nav>
          <ul className='footer__links'>
            <li><a href='https://practicum.yandex.ru/' className='footer__link' target='_blank' rel='noopener noreferrer'>Яндекс.Практикум</a></li>
            <li><a href='https://github.com/simoshina' className='footer__link' target='_blank' rel='noopener noreferrer'>Github</a></li>
            <li><a href='https://t.me/simoshina' className='footer__link' target='_blank' rel='noopener noreferrer'>Telegram</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer;
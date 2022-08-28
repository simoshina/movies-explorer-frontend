function Portfolio() {
  return (
    <div className='portfolio'>
      <h2 className='portfolio__heading'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__border'>
          <a href='https://github.com/simoshina/how-to-learn' target='_blank' rel='noopener noreferrer' className='portfolio__link'>Статичный сайт
          <span className='portfolio__arrow'>↗</span></a>
        </li>
        <li className='portfolio__border'>
          <a href='https://simoshina.github.io/russian-travel/index.html' target='_blank' rel='noopener noreferrer' className='portfolio__link'>Адаптивный сайт
          <span className='portfolio__arrow'>↗</span></a>
        </li>
        <li className='portfolio__border'>
          <a href='https://github.com/simoshina/react-mesto-api-full' target='_blank' rel='noopener noreferrer' className='portfolio__link'>Одностраничное приложение
          <span className='portfolio__arrow'>↗</span></a>
        </li>
      </ul>
    </div>
  )
}

export default Portfolio;
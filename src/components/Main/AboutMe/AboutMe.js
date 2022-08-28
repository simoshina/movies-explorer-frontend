import photo from '../../../images/profile.png';

function AboutMe() {
  return (
    <section id='student' className='student'>
      <h2 className='main main__heading'>Студент</h2>
      <article className='student__article'>
        <h3 className='student__title'>Алёна</h3>
        <h4 className='student__subtitle'>Фронтенд-разработчица, 27 лет</h4>
        <p className='student__paragraph'>
          Я родилась и выросла в ЯНАО, но на данный момент проживаю в Москве. Получила финансовое образование в РЭУ им. Плеханова. Люблю читать, играть на фортепиано и собирать паззлы. На данный момент работаю менеджером в лизинговой компании, параллельно с работой изучаю веб-разработку в Яндекс.Практикуме. После прохождения курса планирую сменить сферу деятельности.</p>
        <ul className='student__links'>
          <li><a href='https://vk.com/alenasimoshina' target='_blank' rel='noopener noreferrer' className='student__link'>VK</a></li>
          <li><a href='https://github.com/simoshina' target='_blank' rel='noopener noreferrer' className='student__link'>Github</a></li>
        </ul>
        <img className='student__photo' alt='Алёна' src={photo}/>
      </article>
    </section>
  )
}

export default AboutMe;
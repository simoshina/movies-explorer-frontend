function Techs() {
  return (
    <section id='techs' className='techs'>
      <h2 className='main main__heading'>Технологии</h2>
      <article className='techs__article'>
        <h3 className='techs__title'>7 технологий</h3>
        <p className='techs__subtitle'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className='techs__elements'>
          <li className='techs__element'>HTML</li>
          <li className='techs__element'>CSS</li>
          <li className='techs__element'>JS</li>
          <li className='techs__element'>React</li>
          <li className='techs__element'>Git</li>
          <li className='techs__element'>Express.js</li>
          <li className='techs__element'>mongoDB</li>
        </ul>
      </article>
    </section>
  )
}

export default Techs;
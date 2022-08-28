function AboutProject() {
  return (
    <section id='project' className='project'>
      <h2 className='main main__heading'>О проекте</h2>
      <article className='project__columns'>
        <div className='project__column'>
          <h3 className='project__title'>Дипломный проект включал 5 этапов</h3>
          <p className='project__subtitle'>
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>        
        <div className='project__column'>
          <h3 className='project__title'>На выполнение диплома ушло 5 недель</h3>
          <p className='project__subtitle'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </article>
      <div className='project__bar'>
        <p className='project__bar-label'>1 неделя</p>
        <p className='project__bar-label'>4 недели</p>
        <p className='project__bar-caption'>Back-end</p>
        <p className='project__bar-caption'>Front-end</p>
      </div>
    </section>
  )
}

export default AboutProject;
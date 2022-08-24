import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
  return (
    <section className="cardlist">
      <MoviesCard/>
      <MoviesCard/>
      <MoviesCard/>
      <MoviesCard/>
      <MoviesCard/>
      <MoviesCard/>
      <button className="cardlist__button">Ещё</button>
    </section>
  )
}

export default MoviesCardList;
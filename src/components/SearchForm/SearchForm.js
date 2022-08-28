function SearchForm() {
  return (
    <form className="search">
      <input className="search__input" placeholder="Фильм" required></input>
      <button className="search__button" type="submit" title="Поиск"></button>
    </form>
  )
}

export default SearchForm;
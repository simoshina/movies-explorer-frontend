function SearchForm({ inputValue, handleSubmit, handleChange }) {

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input onChange={handleChange} className="search__input" placeholder="Фильм" value={inputValue || ''} required></input>
      <button className="search__button" type="submit" title="Поиск"></button>
    </form>
  )
}

export default SearchForm;
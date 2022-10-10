import { useLocation } from "react-router-dom";

function FilterCheckbox({checkTumbler, shortFilm}) {
  const location = useLocation();
  
  return (
    <div className='filter'>
      {location.pathname === '/movies' ?
      <input type='checkbox' className='filter__checkbox' checked={localStorage.tumbler === 'true'} onChange={() => checkTumbler()}/> :
      <input type='checkbox' className='filter__checkbox' checked={shortFilm} onChange={() => checkTumbler()}/>}
      <span className='filter__text'>Короткометражки</span>
    </div>
  )
}

export default FilterCheckbox;
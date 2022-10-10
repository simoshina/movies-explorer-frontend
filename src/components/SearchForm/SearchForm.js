import { useForm } from "react-hook-form";
import { searchInputValidation } from "../../constants/validation";

function SearchForm({ inputValue, onSubmit, handleChange }) {
  const { register, formState: { errors }, handleSubmit } = useForm({mode: 'all'});
  
  return (
    <>
      <form className="search" onSubmit={handleSubmit(onSubmit)}>
        <input {...register('search', searchInputValidation)} onChange={handleChange} name='search' type='text' className="search__input" placeholder="Фильм" value={inputValue || ''}></input>
        <button className="search__button" type="submit" title="Поиск"></button>
      </form>
      {errors?.search && <span className='auth__error auth__error_visible'>{errors?.search?.message}</span>}
    </>
  )
}

export default SearchForm;
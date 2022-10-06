import { useHistory } from "react-router-dom";

function NotFound() {
  const history = useHistory();

  return (
    <main className="not-found">
      <h1 className="not-found__error">404</h1>
      <p className="not-found__caption">Страница не найдена</p>
      <button title="Назад" type="button" onClick={() => history.goBack()} className="not-found__link">Назад</button>
    </main>
  )
}

export default NotFound;
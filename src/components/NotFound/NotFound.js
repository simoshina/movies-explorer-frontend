import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="not-found">
      <h1 className="not-found__error">404</h1>
      <p className="not-found__caption">Страница не найдена</p>
      <Link exact to='/' className="not-found__link">Назад</Link>
    </main>
  )
}

export default NotFound;
function Popup({ isOpen, onClose }) {
  const activePopup = isOpen ? 'popup_opened' : '';

  return (
    <div className={`popup ${activePopup}`} onClick={onClose}>
      <div className="popup__container" onClick={e => e.stopPropagation()}>
        <div className="popup__form">
          <button type="button" aria-label="Закрыть" className="popup__exit-button" onClick={onClose}/>
          <h2 className="popup__text">Данные успешно обновлены!&#127881;</h2>
        </div>
      </div>
    </div>
  )
}

export default Popup;
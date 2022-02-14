import exitIconPath from '../images/form_exit-button.svg';

function ImagePopup(props) {

    return(
        <div className={`popup popup_for_image ${props.card ? 'popup_open' : ''}`}>
          <div className="popup__container">
              <button type="button" className="popup__exit-button" onClick={props.onClose}>
                  <img className="popup__exit-button-image" src={exitIconPath}
                      alt='Изображение кнопки "выйти"'/>
              </button>
              <img className="popup__image" alt="Картинка с карточки" src={props.card.link}/>
              <p className="popup__subtitle"></p>
              
          </div>
      </div>
    )
}

export default ImagePopup;
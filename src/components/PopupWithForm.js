import exitIconPath from '../images/form_exit-button.svg';

function PopupWithForm (props){

    
    return (
        <div className = {`popup popup_for_${props.name} ${props.isOpen ? 'popup_open' : ''}`}>
            <div className="popup__container">
                <form className="popup__form" noValidate name={props.name}>
                    <button type="button" onClick={props.onClose} className="popup__exit-button">
                        <img className="popup__exit-button-image" src={exitIconPath}
                        alt='Изображение кнопки "выйти"'/>
                    </button>
                    <h2 className="popup__title">{props.title}</h2>
                    {props.children}
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;
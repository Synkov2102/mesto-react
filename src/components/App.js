import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';

import React from 'react';

function App() {
    const editComponent = 
    <fieldset className="popup__text-inputs">
        <input id = "name-input" required type="text" className="popup__input popup__input_type_name" value="" placeholder="Имя" minLength="2" maxLength="40"/>
        <span className="popup__input-error name-input-error"></span>
        <input id = "profession-input" required type="text" className="popup__input popup__input_type_profession" value="" placeholder="Род деятельности" minLength="2" maxLength="200"/>
        <span className="popup__input-error profession-input-error"></span>
        <input type="submit" value="Сохранить" className="popup__button popup__button-submit"/>
    </fieldset>

    const addComponent = 
    <fieldset className="popup__text-inputs">
        <input id ="title-input" required type="text" className="popup__input popup__input_type_title" placeholder="Название" minLength="2" maxLength="30"/>
        <span className="popup__input-error title-input-error"></span>
        <input id ="url-input" required type="url" className="popup__input popup__input_type_link" placeholder="Ссылка на картинку"/>
        <span className="popup__input-error url-input-error"></span>
        <input type="submit" value="Создать" className="popup__button popup__button-submit"/>
    </fieldset>

    const avatarComponent =
    <fieldset className="popup__text-inputs">
        <input id ="url-avatar-input" required type="url" className="popup__input popup__input_type_link" placeholder="Ссылка на картинку"/>
        <span className="popup__input-error url-avatar-input-error"></span>
        <input type="submit" value="Сохранить" className="popup__button popup__button-submit"/>
    </fieldset>

    const deleteComponent = 
    <button className="popup__button popup__button-submit">Да</button>

    
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(false);

    function handleEditAvatarClick () {
        setIsEditAvatarPopupOpen(true);
    }
    
    function handleEditProfileClick () {
        setIsEditProfilePopupOpen(true);
    }
    
    function handleAddPlaceClick () {
        setIsAddPlacePopupOpen(true);
    }

    function closeAllPopups () {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard(false);

    }

    function handleCardClick (card) {
        setSelectedCard(card);
        console.log('2');
    }

    return (
        <div className="body">
            <Header />
            <Main onCardClick = {handleCardClick} onAddPlace = {handleAddPlaceClick} onEditProfile = {handleEditProfileClick} onEditAvatar = {handleEditAvatarClick} />
            <Footer />
            <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
            <PopupWithForm name={'editFrom'} title={'Редактировать профиль'} children={editComponent} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}/>
            <PopupWithForm name={'addFrom'} title={'Новое место'} children={addComponent} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}/>
            <PopupWithForm name={'avatarFrom'} title={'Обновить аватар'} children={avatarComponent} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}/>
            <PopupWithForm name={'editFrom'} title={'Вы уверены?'} children={deleteComponent} isOpen={false} onClose={closeAllPopups}/>
        </div>
    );
}

export default App;

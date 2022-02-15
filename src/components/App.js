import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";

import React from "react";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className="body">
      <Header />
      <Main
        onCardClick={handleCardClick}
        onAddPlace={handleAddPlaceClick}
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
      />
      <Footer />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <PopupWithForm
        name={"editForm"}
        title={"Редактировать профиль"}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        buttonName={'Сохранить'}
      >
        <fieldset className="popup__text-inputs">
          <input
            id="name-input"
            required
            type="text"
            className="popup__input popup__input_type_name"
            value=""
            placeholder="Имя"
            minLength="2"
            maxLength="40"
          />
          <span className="popup__input-error name-input-error"></span>
          <input
            id="profession-input"
            required
            type="text"
            className="popup__input popup__input_type_profession"
            value=""
            placeholder="Род деятельности"
            minLength="2"
            maxLength="200"
          />
          <span className="popup__input-error profession-input-error"></span>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm
        name={"addForm"}
        title={"Новое место"}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonName={'Создать'}
      >
        <fieldset className="popup__text-inputs">
          <input
            id="title-input"
            required
            type="text"
            className="popup__input popup__input_type_title"
            placeholder="Название"
            minLength="2"
            maxLength="30"
          />
          <span className="popup__input-error title-input-error"></span>
          <input
            id="url-input"
            required
            type="url"
            className="popup__input popup__input_type_link"
            placeholder="Ссылка на картинку"
          />
          <span className="popup__input-error url-input-error"></span>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm
        name={"avatarForm"}
        title={"Обновить аватар"}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonName={'Сохранить'}
      >
        <fieldset className="popup__text-inputs">
          <input
            id="url-avatar-input"
            required
            type="url"
            className="popup__input popup__input_type_link"
            placeholder="Ссылка на картинку"
          />
          <span className="popup__input-error url-avatar-input-error"></span>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm
        name={"editForm"}
        title={"Вы уверены?"}
        isOpen={false}
        onClose={closeAllPopups}
        buttonName={'Да'}
      >
      </PopupWithForm>
    </div>
  );
}

export default App;

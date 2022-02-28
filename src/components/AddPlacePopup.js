import PopupWithForm from "./PopupWithForm";
import React from "react";

function AddPlacePopup(props) {
  const nameRef = React.useRef();
  const linkRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace(nameRef.current.value, linkRef.current.value);
    props.onClose();
  }

  return (
    <PopupWithForm
      name={"addForm"}
      title={"Новое место"}
      isOpen={props.isOpen}
      onClose={props.onClose}
      buttonName={"Создать"}
      onSubmit={handleSubmit}
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
          ref={nameRef}
        />
        <span className="popup__input-error title-input-error"></span>
        <input
          id="url-input"
          required
          type="url"
          className="popup__input popup__input_type_link"
          placeholder="Ссылка на картинку"
          ref={linkRef}
        />
        <span className="popup__input-error url-input-error"></span>
      </fieldset>
    </PopupWithForm>
  );
}

export default AddPlacePopup;

import React from "react";
import Card from "../components/Card";

import editIconPath from "../images/profile_edit-button.svg";
import addIconPath from "../images/profile_add-button.svg";
import penIconPath from "../images/profile_editlogo-icon.svg";

import api from "../utils/Api.js";

function Main(props) {
  const [userName, setUserName] = React.useState("Имя");
  const [userDescription, setUserDescription] = React.useState("Описание");
  const [userAvatar, setUserAvatar] = React.useState(
    "https://vgif.ru/gifs/135/pikuchu-po-morde.gif"
  );
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getProfileInfo()
      .then((data) => {
        setUserAvatar(data.avatar);
        setUserDescription(data.about);
        setUserName(data.name);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    api
      .getCardsData()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__container">
          <div
            className="profile__avatar"
            style={{ backgroundImage: `url(${userAvatar})` }}
            onClick={props.onEditAvatar}
          >
            <img
              className="profile__pen-icon"
              src={penIconPath}
              alt="Иконка редактирования аватарки"
            />
          </div>
          <div className="profile__info">
            <div className="profile__name-container">
              <h1 className="profile__name">{userName}</h1>
              <button
                type="button"
                onClick={props.onEditProfile}
                className="profile__edit-button"
              >
                <img
                  className="profile__image-edit-button"
                  src={editIconPath}
                  alt='Изображение кнопки "редактировать"'
                />
              </button>
            </div>
            <p className="profile__profession">{userDescription}</p>
          </div>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={props.onAddPlace}
        >
          <img
            className="profile__image-add-button"
            src={addIconPath}
            alt='Изображение кнопки "добавить"'
          />
        </button>
      </section>
      <section className="elements">
        {cards.map((card) => {
          return (
            <Card card={card} key={card._id} onCardClick={props.onCardClick} />
          );
        })}
      </section>
    </main>
  );
}

export default Main;

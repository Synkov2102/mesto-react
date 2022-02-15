function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <div className="element" key={props.key}>
      <button
        type="button"
        className="element__image-button"
        onClick={handleClick}
      >
        <img
          className="element__picture"
          alt="Картинка Элемента"
          src={props.card.link}
        />
      </button>
      <div className="element__container">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-group">
          <button type="button" className="element__like-button"></button>
          <p className="element__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
      <button type="button" className="element__delete-button"></button>
    </div>
  );
}

export default Card;

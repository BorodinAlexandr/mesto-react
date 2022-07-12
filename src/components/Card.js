function Card({ card, onCardClick }) {
  return (
    <div className="places__place">
      <button
        type="button"
        className="places__delete places__delete_hidden"
      ></button>
      <img
        className="places__img"
        src={card.link}
        alt={card.name}
        onClick={() => {
          onCardClick({ name: card.name, link: card.link });
        }}
      />
      <div className="places__text">
        <h3 className="places__name">{card.name}</h3>
        <div className="places__like-wrapper">
          <button type="button" className="places__like"></button>
          <p className="places__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;

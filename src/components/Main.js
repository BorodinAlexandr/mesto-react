import { useState, useEffect } from 'react';
import Card from './Card';
import api from '../utils/Api';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState('Жак Фреско');
  const [userDescription, setUserDescription] = useState('Ладно');
  const [userAvatar, setUserAvatar] = useState(
    'https://i.pinimg.com/originals/25/88/a5/2588a573f8801981e4c0a902a980284b.jpg'
  );
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getInitialCards().then((res) => {
        setCards(res);
      });
  }, [])

  api.getUserInfo().then((res) => {
    setUserName(`${res.name}`);
    setUserDescription(`${res.about}`);
    setUserAvatar(`${res.avatar}`);
  });

//   api.getInitialCards().then((res) => {
//     console.log(res)
//     setCards(res);

//   });

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__img-wrapper">
          <img
            className="profile__img"
            src={userAvatar}
            alt="Аватар пользователя"
          />
          <div className="profile__img-hover" onClick={onEditAvatar}></div>
        </div>
        <div className="profile__person">
          <div className="profile__wrapper">
            <h1 className="profile__name">{userName}</h1>
            <button
              type="button"
              className="profile__edit"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__descr">{userDescription}</p>
        </div>
        <button
          type="button"
          className="profile__button"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="places">
      {
      cards.map((card, i) => {
        return <Card card={card} onCardClick={onCardClick} key={i}/>
        })}
      </section>
    </main>
  );
}

export default Main;

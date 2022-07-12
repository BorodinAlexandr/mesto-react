import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImgPopupOpen, setIsImgPopupOpen] = useState(false);
  const [selectedCard, setselectedCard] = useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleCardClick({ name, link }) {
    setselectedCard({ name, link });
    setIsImgPopupOpen(!isImgPopupOpen);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);

    setIsAddPlacePopupOpen(false);

    setIsEditAvatarPopupOpen(false);

    setIsImgPopupOpen(false);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        name="edit_profile"
        title="Редактировать профиль"
        buttonText="Сохранить"
        onEditProfile={handleEditProfileClick}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          required
          minLength="2"
          maxLength="40"
          id="name-input"
          placeholder="Имя"
          type="text"
          name="name"
          className="popup__text popup__text_value_name"
        />
        <span className="popup__text-error name-input-error"></span>
        <input
          required
          minLength="2"
          maxLength="200"
          id="job-input"
          placeholder="Профессия"
          type="text"
          name="descr"
          className="popup__text popup__text_value_descr"
        />
        <span className="popup__text-error job-input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="edit_cards"
        title="Новое место"
        buttonText="Создать"
        onAddPlace={handleAddPlaceClick}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          required
          minLength="2"
          maxLength="30"
          id="place-input"
          placeholder="Название"
          type="text"
          name="name"
          className="popup__text popup__text_value_title"
        />
        <span className="popup__text-error place-input-error"></span>
        <input
          required
          id="link-input"
          placeholder="Ссылка на картинку"
          type="url"
          name="link"
          className="popup__text popup__text_value_link"
        />
        <span className="popup__text-error link-input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="edit_photo"
        title="Обновить аватар"
        buttonText="Сохранить"
        onEditAvatar={handleEditAvatarClick}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          required
          id="photo-input"
          placeholder="Ссылка на картинку"
          type="url"
          name="link"
          className="popup__text popup__text_value_link"
        />
        <span className="popup__text-error photo-input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="delete"
        title="Вы уверены?"
        buttonText="Да"
      ></PopupWithForm>

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
        isOpen={isImgPopupOpen}
        onCardClick={handleCardClick}
      />
    </div>
  );
}

export default App;

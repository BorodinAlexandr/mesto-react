const popups = document.querySelectorAll('.popup'),
  popupImage = document.querySelector('.popup_img'),
  popupCards = document.querySelector('.popup_edit_cards'),
  formAddCards = popupCards.querySelector('.popup__form_add_cards'),
  titleInput = formAddCards.querySelector('.popup__text_value_title'),
  linkInput = formAddCards.querySelector('.popup__text_value_link'),
  popupProfile = document.querySelector('.popup_edit_profile'),
  formElement = popupProfile.querySelector('.popup__form_edit_profile'),
  nameInput = formElement.querySelector('.popup__text_value_name'),
  descriptionInput = formElement.querySelector('.popup__text_value_descr');

export {
  popups,
  popupImage,
  popupCards,
  formAddCards,
  titleInput,
  linkInput,
  formElement,
  popupProfile,
  nameInput, 
  descriptionInput,
};

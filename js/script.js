// feedback modal

const feedbackLink = document.querySelector(".contacts-button");
const feedbackPopup = document.querySelector(".modal-feedback");
const feedbackClose = feedbackPopup.querySelector(".modal-close");
const feedbackForm = feedbackPopup.querySelector(".feedback-form");
const textareaField = feedbackPopup.querySelector("textarea.feedback-input-field");
const textField = feedbackPopup.querySelector('.feedback-input-field[name="name"]');
const emailField = feedbackPopup.querySelector('.feedback-input-field[name="email"]');


feedbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal-show");
  textareaField.focus();
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-show");
  feedbackPopup.classList.remove("modal-error");
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!textareaField.value || !textField.value || !emailField.value) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-error");
  feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
  feedbackPopup.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      feedbackPopup.classList.remove("modal-show");
      feedbackPopup.classList.remove("modal-error");
    }
  }
})


// map modal

const mapLink = document.querySelector(".contacts-map");
const mapPopup = document.querySelector(".modal-map");
const mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});
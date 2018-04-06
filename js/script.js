var link = document.querySelector(".write-letter-btn");
var popup = document.querySelector(".modal-write-us");
var close = popup.querySelector(".modal-close");
var username = popup.querySelector("[name=username]");
var form = popup.querySelector("form");
var email = popup.querySelector("[name=email]");
var letter = popup.querySelector("[name=letter]");

var storage_username = localStorage.getItem("username");
var storage_email = localStorage.getItem("email");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (storage_username) {
      username.value = storage_username;
      if (storage_email) {
        email.value = storage_email;
        letter.focus();
      } else {
        email.focus();
      }
    } else {
      username.focus();
    }
  });

  close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!username.value || !email.value || !letter.value)
  {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport)
    {
      localStorage.setItem("username", username.value);
      localStorage.setItem("email", email.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});


var mapLink = document.querySelector(".map");

var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  evt.preventDefault();
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
  }
});

let commentText = document.querySelector('.write-me__input--textarea');
let submitButton = document.querySelector('.submit-button');

commentText.oninput = function () {

  if (commentText.value.length > 200 || commentText.value.length < 10) {
    commentText.classList.add('warning');
    submitButton.disabled = true;
  } else {
    commentText.classList.remove('warning');
    submitButton.disabled = false;
  }
};
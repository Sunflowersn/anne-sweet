let commentForm = document.querySelector('.comment__form');
let commentList = document.querySelector('.comment__list');
let commentText = document.querySelector('.comment__textarea');
let commentName = document.querySelector('.commentator-name');
let commentEmail = document.querySelector('.commentator-email');
let submitButton = document.querySelector('.submit-button');

commentForm.onsubmit = function (evt) {
  evt.preventDefault();
  let newComment = document.createElement('li');
  newComment.classList.add('comment__item');
  let newAvatar = document.createElement('img');
  newAvatar.classList.add('comment__avatar');
  newComment.append(newAvatar);
  let newName = document.createElement('div');
  newName.classList.add('comment__name');
  newName.textContent = commentName.value;
  newComment.append(newName);
  let newText = document.createElement('p');
  newText.classList.add('comment__text');
  newText.textContent = commentText.value;
  newComment.append(newText);
  commentText.value = '';
  commentName.value = '';
  commentEmail.value = '';
  commentList.append(newComment);
};

commentText.oninput = function () {

  if (commentText.value.length > 200 || commentText.value.length < 10) {
    commentText.classList.add('warning');
    submitButton.disabled = true;
  } else {
    commentText.classList.remove('warning');
    submitButton.disabled = false;
  }
};

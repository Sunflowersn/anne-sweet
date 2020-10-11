let heart = document.querySelector('.like__button');
let likesNumber = document.querySelector('.like__meter');


heart.onclick = function () {
  if (heart.classList.contains('added')) {
    likesNumber.textContent--;
  } else {
    likesNumber.textContent++;
  }
  
  heart.classList.toggle('added');
};

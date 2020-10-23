let articles = document.querySelectorAll('.article__item');
let filter = document.querySelector('.button-choice');

filter.onchange = function () {
  for (let article of articles) {
    if (article.dataset.category !== filter.value && filter.value !== 'all') {
      article.classList.add('visually-hidden');
    } else {
      article.classList.remove('visually-hidden');
    }
  }
};

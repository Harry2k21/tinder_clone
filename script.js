var girls = [
  {picture: "https://assets.codepen.io/6060109/tinder-girl-1.png"},
  {picture: "https://assets.codepen.io/6060109/tinder-girl-2.png"},
  {picture: "https://assets.codepen.io/6060109/tinder-girl-3.png"},
];

var feed = document.querySelector('.feed');

for (let girl of girls) {
  feed.innerHTML += `
    <img src=${girl.picture}>
  `
}

var green = document.querySelector('.green-heart');

var matchDiv = document.querySelector('.got-match');

function match() {
    green.addEventListener("click", () => {
        matchDiv.style.display = 'flex';
    });
}

match();
  //var keepSwiping = document.querySelector('.keep-swiping')

// keepSwiping.addEventListener("click", matchDiv.style.display = 'block')                                     

// [1] querySelect green heart button

// [2] addEventListener to click

// [3] write a function for your listener, that will set display flex on the ".got-match" div

// [4] Do [1 - 3] again for the ".keep-swiping" button , to set display none on ".got-match"

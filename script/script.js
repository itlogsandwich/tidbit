const container = document.getElementById("container");

const tagList = [];

for (let i = 0; i < 5; i++) {
  tagList.push(document.createElement("h1"))
}

const arrayOfWords = [
  "Sever",
  "Pain",
  "Sorrow",
  "I want things to be beautiful",
  "Why?",
  "change.",
  "cruel",
  "death",
];

const randomInt = () => {
  return Math.floor(Math.random() * arrayOfWords.length);
}

const randomPositionGenerator = () => {
  return Math.floor(Math.random() * container.offsetWidth);
}

const randomizeWordPosition = () => {
  for (let word of tagList) {
    width = document.body.offsetWidth - parseInt(word.style.width);
    height = document.body.offsetHeight - parseInt(word.style.height);
    word.textContent = arrayOfWords[randomInt()];
    word.style.top = randomPositionGenerator() + "px";
    word.style.left = randomPositionGenerator() + "px";
    container.appendChild(word);
  }
}

randomizeWordPosition();

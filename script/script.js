const mainContainer = document.querySelector("main");

const tagList = [];
for (let i = 0; i < 3; i++) {
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
  "life",
];

const randomInt = (() => {
  return Math.round(Math.random() * arrayOfWords.length);
})
const randomPositionGenerator = (val) => {
  return [Math.round(Math.random() * Math.round(mainContainer.offsetWidth - val.offsetWidth)), Math.round(Math.random() * Math.round(mainContainer.offsetHeight - val.offsetHeight))];
}

const randomDupe = (wordTag) => {

  const dupe = wordTag.cloneNode(true);

  const topVal = (() => {
    for (let i = 0; i < wordTag.style.top.length; i++) {
      if (wordTag.style.top[i] == "p") {
        return wordTag.style.top.slice(0, i);
      }
    }
  });

  const leftVal = (() => {
    for (let i = 0; i < wordTag.style.left.length; i++) {
      if (wordTag.style.left[i] == "p") {
        return wordTag.style.left.slice(0, i);
      }
    }
  })

  dupe.style.top = topVal() - 32 + "px";
  dupe.style.left = leftVal() - 32 + "px";

  return dupe;
}

const randomizeWordPosition = () => {

  const arrH1 = mainContainer.querySelectorAll("h1");
  if (arrH1.length >= 200) {
    for (let h1Tag of arrH1) {
      h1Tag.remove();
    }
    clearInterval(interval);
    const statement = document.createElement("h1");
    statement.textContent = arrayOfWords[3];
    statement.style.top = 50 + "%";
    statement.style.left = 50 + "%";
    statement.style.transform = "translate(-50%, -50%)";
    mainContainer.appendChild(statement);
    return;
  }

  for (let word of tagList) {
    word.textContent = arrayOfWords[randomInt()];
    word.style.top = randomPositionGenerator(word)[1] + "px";
    word.style.left = randomPositionGenerator(word)[0] + "px";
    mainContainer.appendChild(word);
    if (Math.round(Math.random() * 2) == randomInt()) {
      mainContainer.appendChild(randomDupe(word))
    }
  }
}

const interval = setInterval(randomizeWordPosition, 2);

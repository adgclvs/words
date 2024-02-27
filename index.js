const words = [
  { word: "cut", def: "sdafae" },
  { word: "love", def: "sdafae" },
  { word: "house", def: "sdafae" },
  { word: "eat", def: "sdafae" },
  { word: "boys", def: "sdafae" },
];

function navigateTo(pageId) {
  document.querySelectorAll("section").forEach((section) => {
    section.classList.add("hidden");
  });

  document.getElementById(pageId).classList.remove("hidden");

  if (pageId === "home") {
    document.getElementById("goToHome").classList.add("hidden");
    document.getElementById("goToPage1").classList.remove("hidden");
    document.getElementById("goToPage2").classList.remove("hidden");
  } else {
    document.getElementById("goToHome").classList.remove("hidden");
    document.getElementById("goToPage1").classList.add("hidden");
    document.getElementById("goToPage2").classList.add("hidden");
  }
}

document.getElementById("goToHome").addEventListener("click", () => navigateTo("home"));
document.getElementById("goToPage1").addEventListener("click", () => {
  navigateTo("page1");
  start();
});
document.getElementById("goToPage2").addEventListener("click", () => navigateTo("page2"));

const start = () => {
  const _words = words.slice();

  const elt = document.querySelector(".word");
  const but = document.querySelector(".button");

  let isClicked = false;

  const displayNextWord = () => {
    if (_words.length > 0) {
      if (!isClicked) {
        let randomIndex = Math.floor(Math.random() * _words.length);
        elt.innerHTML = `<span class="word-style">${_words[randomIndex].word}</span>`;
        _words.splice(randomIndex, 1);
      } else {
        elt.innerHTML = `<span class="definition-style">${_words[0].def}</span>`;
        isClicked = false;
      }
    } else {
      elt.innerHTML = "Fin des mots";
    }
  };

  displayNextWord();

  elt.addEventListener("click", () => {
    isClicked = false;
    console.log(isClicked);
    displayNextWord();
  });

  but.addEventListener("click", () => {
    isClicked = true;
    console.log(isClicked);
    displayNextWord();
  });
};

// document.getElementById("goToPage1").addEventListener("click", () => {
//   document.getElementById("page1").classList.remove("hidden");
//   document.getElementById("page2").classList.add("hidden");
//   document.getElementById("goToPage1").classList.add("hidden");
//   document.getElementById("goToPage2").classList.add("hidden");
// });

// document.getElementById("goToPage2").addEventListener("click", () => {
//   document.getElementById("page2").classList.remove("hidden");
//   document.getElementById("page1").classList.add("hidden");
// });

navigateTo("home");

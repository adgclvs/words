const words = ["cut", "love", "house", "eat", "boys"];

const start = () => {
  const _words = words.slice();

  const elt = document.querySelector(".word");
  console.log(elt);
  while (_words.length > 0) {
    let random = Math.floor(Math.random() * _words.length);
    elt.innerHTML = _words[random];
    console.log(_words[random]);
  }
};

start();

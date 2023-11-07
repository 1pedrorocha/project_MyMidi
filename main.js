function playSound(idKey) {
  document.querySelector(idKey).load();
  document.querySelector(idKey).play();
}

let counter = 0;
const keyList = document.querySelectorAll(".key");

while (counter < keyList.length) {
  const key = keyList[counter];
  const keyName = key.classList[1];

  console.log(keyName);

  const idAudio = `#sound_${keyName}`;

  console.log(idAudio);

  key.onclick = function () {
    playSound(idAudio);
  };
  counter++;
}

function playSound(idKey) {
  document.querySelector(idKey).load();
  document.querySelector(idKey).play();
}

const keyList = document.querySelectorAll(".key");

for (let i = 0; i < keyList.length; i++) {
  const key = keyList[i];
  const keyName = key.classList[1];

  const idAudio = `#sound_${keyName}`;

  console.log(idAudio);

  key.onclick = function () {
    playSound(idAudio);
  };
}

function playSound(audioSelection) {
  const element = document.querySelector(audioSelection);

  if (element && element.localName === "audio") {
    element.load();
    element.play();
  } else {
    console.log(`${audioSelection} is not an audio file.`);
  }
}

const keyList = document.querySelectorAll(".key");

for (let i = 0; i < keyList.length; i++) {
  const key = keyList[i];
  const keyName = key.classList[1];
  const idAudio = `#sound_${keyName}`;

  key.onclick = function () {
    playSound(idAudio);
  };

  key.onkeydown = function (event) {
    console.log(event.code === "Enter" || event.code === "Space");

    if (event.code === "Enter" || event.code === "Space") {
      key.classList.add("active");
    }
  };

  key.onkeyup = function () {
    key.classList.remove("active");
  };
}

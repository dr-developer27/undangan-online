let countDate = new Date("Jan 28 2022 10:00:00").getTime();

function newYear() {
  let now = new Date().getTime();
  gap = countDate - now;

  let detik = 1000;
  let menit = detik * 60;
  let jam = menit * 60;
  let hari = jam * 24;

  let h = Math.floor(gap / hari);
  let j = Math.floor((gap % hari) / jam);
  let m = Math.floor((gap % jam) / menit);
  let d = Math.floor((gap % menit) / detik);

  document.getElementById("hari").innerText = h;
  document.getElementById("jam").innerText = j;
  document.getElementById("menit").innerText = m;
  document.getElementById("detik").innerText = d;
}

setInterval(function () {
  newYear();
}, 1000);

let myAudio = document.getElementById("audio");
let isPlaying = false;
function togglePlay() {
  myAudio.play();
  terakhir = document.querySelector("#cover");
  terakhir.classList.add("hide");
}

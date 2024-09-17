const pauseButton = document.querySelector('#pause')
const audio = new Audio()
const musicList = document.querySelectorAll('header nav ul li')
const nav = document.querySelector('header nav')
let isPlay = false
pauseButton.addEventListener('click', toggleBtn);
function playAudio(auSrc = 'assets/audio/forest.mp3'){
    audio.src = auSrc
    audio.currentTime = 0
    audio.play()
}
function pauseAudio(){
    audio.pause()
}
function toggleBtn() {
  musicList.forEach(song1 => song1.classList.remove('active'))
  if (pauseButton.classList.contains('pause')) {
    pauseAudio();
    isPlay = false;
    nav.classList.remove('playing')
  } else {
    playAudio();
    isPlay = true;
    nav.classList.add('playing')
  }
  pauseButton.classList.toggle('pause')
}
musicList.forEach(song => song.addEventListener('click', () => {
  musicList.forEach(song1 => song1.classList.remove('active'))
  song.classList.add('active')
  let classOfMusic = song.classList[0]
  isPlay = true;
  nav.classList.add('playing')
  playAudio(`assets/audio/${classOfMusic}.mp3`)
  document.body.style.background = `url(assets/img/${classOfMusic}.jpg)`
}))

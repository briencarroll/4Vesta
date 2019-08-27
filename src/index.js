import './style.css'
// import bg1 from './assets/1.png'
// import bg2 from './assets/2.png'
// import bg3 from './assets/3.png'

window.addEventListener('DOMContentLoaded', (event) => {
  const nodes = {
    body: document.querySelectorAll('body'),
    bgOne: document.querySelectorAll('.background-one'),
    bgTwo: document.querySelectorAll('.background-two'),
    title: document.querySelectorAll('.title'),
    links: document.querySelectorAll('.link'),
    spotify: document.querySelectorAll('.spotify'),
    bandcamp: document.querySelectorAll('.bandcamp'),
    apple: document.querySelectorAll('.apple'),
  }

  nodes.bandcamp[0].addEventListener('mouseenter', (e) => {
    nodes.bgOne[0].style.setProperty('--background-one-blend-mode', 'overlay')
    nodes.bgTwo[0].style.setProperty('--background-two-blend-mode', 'hue')
  })
  nodes.spotify[0].addEventListener('mouseenter', (e) => {
    nodes.bgOne[0].style.setProperty('--background-one-blend-mode', 'color-dodge')
    nodes.bgTwo[0].style.setProperty('--background-two-blend-mode', 'saturation')
  })
  nodes.apple[0].addEventListener('mouseenter', (e) => {
    nodes.bgOne[0].style.setProperty('--background-one-blend-mode', 'darken')
    nodes.bgTwo[0].style.setProperty('--background-two-blend-mode', 'difference')
  })
})

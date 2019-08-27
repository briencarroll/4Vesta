import './style.css'
// import bg1 from './assets/1.png'
// import bg2 from './assets/2.png'
// import bg3 from './assets/3.png'

// const creativeHarmony = [
//   '#61219b',
//   '#9226c7',
//   '#ac92eb',
//   '#5d9cec',
//   '#97ead8',
// ]

window.addEventListener('DOMContentLoaded', () => {
  const nodes = {
    body: document.querySelectorAll('body'),
    bgOne: document.querySelectorAll('.background-one'),
    bgTwo: document.querySelectorAll('.background-two'),
    title: document.querySelectorAll('.title'),
    links: document.querySelectorAll('.link'),
    spotify: document.querySelectorAll('.spotify'),
    bandcamp: document.querySelectorAll('.bandcamp'),
    contact: document.querySelectorAll('.contact'),
  }

  nodes.title[0].addEventListener('mouseenter', () => {
    nodes.bgOne[0].style.setProperty('--background-one-blend-mode', 'darken')
    nodes.bgTwo[0].style.setProperty('--background-two-blend-mode', 'difference')
  })
  nodes.bandcamp[0].addEventListener('mouseenter', () => {
    nodes.bgOne[0].style.setProperty('--background-one-blend-mode', 'overlay')
    nodes.bgTwo[0].style.setProperty('--background-two-blend-mode', 'hue')
  })
  nodes.spotify[0].addEventListener('mouseenter', () => {
    nodes.bgOne[0].style.setProperty('--background-one-blend-mode', 'color-burn')
    nodes.bgTwo[0].style.setProperty('--background-two-blend-mode', 'saturation')
  })
  nodes.contact[0].addEventListener('mouseenter', () => {
    nodes.bgOne[0].style.setProperty('--background-one-blend-mode', 'difference')
    nodes.bgTwo[0].style.setProperty('--background-two-blend-mode', 'hue')
  })
})

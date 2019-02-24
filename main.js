// Get number
const number = window.location.hash.substring(1)

// Get corresponding div
const div = document.querySelector(`#div${number}`)
div.style.display = 'block'

// Get app
const app = document.querySelector('#app')

// Show this div
app.appendChild(div)
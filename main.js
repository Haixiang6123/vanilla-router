// Get number
let number = window.location.hash.substring(1)

// Get corresponding div
let div = document.querySelector(`#div${number}`)
div.style.display = 'block'

// Get app
let app = document.querySelector('#app')

// Show this div
app.appendChild(div)

window.addEventListener('hashchange', (event) => {
    // Get number
    number = window.location.hash.substring(1)

    // Get corresponding div
    div = document.querySelector(`#div${number}`)
    div.style.display = 'block'

    // Get app
    app = document.querySelector('#app')

    app.children[0].style.display = 'none'
    document.body.appendChild(app.children[0])

    // Show this div
    app.appendChild(div)
})
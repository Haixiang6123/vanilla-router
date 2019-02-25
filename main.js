const div1 = document.createElement('div')
div1.innerHTML = '1'
const div2 = document.createElement('div')
div2.innerHTML = '2'
const div3 = document.createElement('div')
div3.innerHTML = '3'
const div4 = document.createElement('div')
div4.innerHTML = '4'

const routeTable = {
    '1': div1,
    '2': div2,
    '3': div3,
    '4': div4
}

function routing() {
    // Get number
    let number = window.location.hash.substring(1)
    // Get app
    let app = document.querySelector('#app')

    number = number || 1

    // Get corresponding div

    let div = routeTable[number]
    console.log(div)
    if (!div) {
        div = document.querySelector('#div404')
    }
    div.style.display = 'block'

    // Show this div
    app.innerHTML = ''
    // Show this div
    app.appendChild(div)
}

routing()

window.addEventListener('hashchange', (event) => {
    routing()
})
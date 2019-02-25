const div1 = document.createElement('div')
div1.innerHTML = '1'
const view1 = document.createElement('div')
view1.innerHTML = 'View'
view1.style.height = '100px'
view1.style.width = '100px'
view1.style.background = 'red'
div1.appendChild(view1)
const nested1 = document.createElement('div')
nested1.innerHTML = '1.1'
const nested2 = document.createElement('div')
nested1.innerHTML = '1.2'
const nested3 = document.createElement('div')
nested1.innerHTML = '1.3'

const div2 = document.createElement('div')
div2.innerHTML = '2'
const div3 = document.createElement('div')
div3.innerHTML = '3'
const div4 = document.createElement('div')
div4.innerHTML = '4'
const div404 = document.createElement('div')
div404.innerHTML = '404'

const app = document.querySelector('#app')

const routeTable = {
    '/1': div1,
    '/2': div2,
    '/3': div3,
    '/4': div4
}

function routing(root) {
    // Get number
    // let number = window.location.hash.substring(1)
    let number = window.location.pathname

    if (number === '/') {
        number = '/1'
    }

    // Get corresponding div
    let div = routeTable[number] || div404

    // Show this div
    root.innerHTML = ''
    // Show this div
    root.appendChild(div)
}

function onStateChange() {
    routing(app)
}

routing(app)

const allA = document.querySelectorAll('a.link')
for (let a of allA) {
    a.addEventListener('click', (event) => {
        event.preventDefault()

        window.history.pushState(null, '', a.getAttribute('href'))

        onStateChange()
    })
}

// window.addEventListener('hashchange', (event) => {
//     routing(app)
// })
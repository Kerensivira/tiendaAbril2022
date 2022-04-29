const btnCarrito = document.getElementById('btnCarrito')
const vaciar = document.getElementById('vaciar')
const geolocalizacion = document.getElementById('btnGeolocation')
const titulo = document.querySelector('.logo')
const pago = document.getElementById('pago')
const btnUsuario = document.getElementById('btnUsuario')


btnUsuario.addEventListener('click', () => {
    window.location.href = "user.html"
})

titulo.addEventListener('click', () => {
    window.location.href = "index.html"
})

btnCarrito.addEventListener('click', () => {
    window.location.href = "#modal-car"
    window.location.reload()
})

vaciar.addEventListener('click', () => {
    localStorage.removeItem('ProductosCarro')
    window.location.href = "index.html"
})

geolocalizacion.addEventListener('click', () => {
    window.location.href = "#modal-ubicacion"
})

pago.addEventListener('click', () => {
    window.location.href = "car.html"
})
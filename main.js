

let carrito = [];
let productos = [];

let gestor; /* variable vacia para despues aplicarla en el new ((clase)) */




document.addEventListener('DOMContentLoaded',() =>{

    carrito = JSON.parse(localStorage.getItem('carrito'))
    gestor = new GestionarProductos();
    gestor.iniciar();

    gestor.cargarProductos(productos);
})

function aniadirCarrito(id) {
    const prod = document.querySelector('#row_' + id); /* aplico al div row. llamo al obj id */
    let producto = new Stock(id,
        prod.querySelector('h3').textContent,
        prod.querySelector('p').textContent,
        prod.querySelector('.precio').textContent,
        /* llamo h3*/
        /* llamo precio */
    )

    gestor.addCart(producto); /* aplico la funcion addcart llamando al elemento producto */
}

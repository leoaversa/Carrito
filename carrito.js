

let carrito;

if (JSON.parse(localStorage.getItem('carrito'))){
    carrito = JSON.parse(localStorage.getItem('carrito'))
} else {
    localStorage.setItem('carrito', JSON.stringify([]))
    carrito = JSON.parse(localStorage.getItem('carrito'))
}

const totalCarrito = () => {
    return carrito.reduce((acc, pro) => acc + productos.precio * productos.cantidad, 0)
}

const body = document.getElementById('carrito')
if(carrito.length == 0){
    const texto = `
    <div class='cartContainer'>
        <h1 class='txtCarrito'>No hay productos en el carrito</h1>
        <a class='btnVolver' href='index.html'>
            <button>VOLVER</button>
        </a>
    </div>`;    
    body.innerHTML += texto;
} else {
    const titulo = `
        <div class='cartContainer'>
            <h1 class='txtCarrito'>Carrito de compras</h1>
        </div>`;
        body.innerHTML += titulo;
    const table = `
        <div class='tableContainer'>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th class='txtTabla'>PRODUCTOS</th>
                        <th class='txtTabla'>CANTIDAD</th>
                        <th class='txtTabla'>PRECIO</th>
                    </tr>
                </thead>
                <tbody id='tbody'>
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th></th>
                        <th class='txtTotal'>Total:</th>
                        <th id='total'>$${totalCarrito().toLocaleString()}</th>
                    </tr>
                </tfoot>
            </table>
            </div>
            <div class='btn-container'>
                <button class='btnTerminar'>TERMINAR COMPRA</button>
            </div>`;

            body.innerHTML += table
            const tbody = document.getElementById("tbody")
            for (let i = 0; i < carrito.length; i++) {
                const element = carrito[i];
                const {id, modelo, img, precio, cantidad} = element;
                const cart = `
                <tr id=${id}>
                    <th><img class='trash' src='./assets/icon/cart.png' alt='foto de borrar'></th>
                    <th class='detallesTabla'><img class='imgProdCart' src=${img} alt='foto del producto'><span class='nombreProd'>${nombre}</span></th>
                    <th>${cantidad}</th>
                    <th>$${(cantidad * precio).toLocaleString()}</th>
                </tr>`
                tbody.innerHTML += cart
            }
        }

        
                
   
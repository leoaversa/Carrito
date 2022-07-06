const contenedorProductos = document.getElementById('contenedor-productos')

const contenedorCarrito = document.getElementById('productoEnCarrito')

const contadorCarrito = document.getElementById('contador-carrito')

const botonVaciar = document.getElementById('vaciar-carrito')

const precioTotal = document.getElementById('precioTotal')

const showProducts = document.getElementById('showProducts')

const showAllProducts = document.getElementById('showAllProducts')




let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
}) 


//MOSTRAR PRODUCTOS
function mostrarproductos(){
stockProductos.forEach((producto) => {


    const div = document.createElement('div')
    div.classList.add('card')

    div.innerHTML += `
    <img src=${producto.img} alt="">
    <h3>${producto.modelo}</h3>
    <h4>${producto.categoría}</h4>
    <p>$${producto.precio.toLocaleString()}</p>
    <button class= 'btn btn-primary' id="agregar${producto.id}">Agregar</button>
    `

    contenedorProductos.appendChild(div)

    
    const boton = document.getElementById(`agregar${producto.id}`)
    boton.addEventListener('click', () => {
        agregarAlCarrito(producto.id)

        //SWEET ALERT
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Agregaste al carrito',
            text: ("Adidas:" + " " + producto.modelo),
            showConfirmButton: true,
            timer: 2000
          })

        
    })   

})
}

mostrarproductos()

//AGREGAR PRODUCTOS AL CARRITO
const agregarAlCarrito = (prodId) => {

    const item = stockProductos.find((prod) => prod.id === prodId)
    carrito.push(item)
    actualizarCarrito()
    console.log(carrito)
    
}

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice,1)


    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Producto eliminado',
        showConfirmButton: false,
        timer: 800
      })
    
    
    actualizarCarrito()

}




const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""

    carrito.forEach((prod) => {

        const div = document.createElement('div')
        div.classList.add("formulario-carrito", "mt-5", "container");
        div.innerHTML += `
        <img src=${prod.img} alt="">
        <p>${prod.modelo}</p>
        <p>Precio: $${prod.precio}</p>
        <p>Cantidad: <span id= "cantidad">${prod.cantidad}</span></p>
        
        <button onclick= "eliminarDelCarrito(${prod.id})" type="button" class="btn btn-danger">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"></path>
            </svg></button>
        `
        
        
        contenedorCarrito.appendChild(div)

         //VACIAR CARRITO
         botonVaciar.onclick = () => {
            carrito.length = 0
            div.innerHTML = ``
            console.log(carrito)
            botonVaciar.disp            
            actualizarCarrito()
        
        }
        localStorage.setItem ('carrito', JSON.stringify(carrito))


        //SUMAR PRECIOS EN CARRITO
        
        const total = carrito.map((prod)=> (prod.precio)).reduce((carritoPrecioTotal,
        carritoPrecioActual) => carritoPrecioTotal + carritoPrecioActual, 0);
        console.log(total)
        
        precioTotal.innerText = (total)

        
        


       

        

        //CONTADOR CARRITO DEL NAV
        contadorCarrito.innerText = (carrito.length)
        
    })
}
        //FILTRAR 
        const buscador = document.getElementById('buscador')
        const filtrar = document.getElementById('filtrar')

        function filtrarPorCat(){

            let vertodos = document.createElement ('button')
            vertodos.innerText = ("Ver todos")
            vertodos.classList.add ('btn', 'btn-secondary', 'mt-5','btn-vertodos')
            showBtnVerTodos.append(vertodos)

            const filtrarproductos = stockProductos.filter((prod) => prod.categoría === buscador.value)
            console.log(filtrarproductos)

            filtrarproductos.forEach((filter) => {

                const divfilter = document.createElement('div')
                divfilter.classList.add("container", "card");
                divfilter.innerHTML += `
                <img src=${filter.img} alt="">  
                <p>${filter.modelo}</p>
                <p>Precio: ${filter.precio}</p>
                <p>Cantidad: <span id= "cantidad">${filter.cantidad}</span></p>
                <button ${filter.id} class='btn boton-filtrar btn-primary'>Agregar</button>
                `
                
                showProducts.append(divfilter)

                
        
        })

        vertodos.onclick = () => {
            showProducts.innerHTML = `` 
            mostrarproductos() 

        }

}    
    
        buscador.onchange = () => {
            contenedorProductos.innerHTML += ``            
            filtrarPorCat()
        }

        

        filtrar.onclick = () => {
            mostrarproductos.innerHTML= ``
            filtrarPorCat()
        }    
    
        // TERMINAR COMPRA

         function terminarCompra () {
            class Usuario {
                constructor(nombre, direccion, mail){
                    this.nombre = nombre,
                    this.direccion = direccion,
                    this.mail = mail
                }
            }
         }

         let nombre = document.getElementById ('nombre')
         let direccion = document.getElementById ('direccion')
         let email = document.getElementById ('email')

         let usuarioCompra = new Usuario (nombre.value, direccion.value, email.value)
         console.log(usuarioCompra)
         console.log(carrito)

         let  = document.getElementById("terminarPedido")

         terminarPedido.onclick = (e) => {
            e.preventDefault()
            terminarCompra() 

            
         }
        



    







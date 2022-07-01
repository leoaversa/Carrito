const productos = [

    {   

    id: "1",
    categoría: "asfalto", 
    modelo: "Lite Racer Rebold", 
    cantidad: 5, 
    precio: 35000,
    img: "./assets/img/adi3.jpg",
    },

    {    
    id: "2",
    categoría: "asfalto", 
    modelo: "Adios Pro",  
    cantidad: 5, 
    precio: 38000,
    img: "./assets/img/adi2.jpg",
    },

    {    
    id: "3",
    categoría: "asfalto", 
    modelo: "Ultraboost Lego",  
    cantidad: 5, 
    precio: 42000,
    img: "./assets/img/LEGO.jpg",
    },
    
    { 
    
    id: "4",
    categoría: "trial", 
    modelo: "Trail Terrex Pro",  
    cantidad: 5, 
    precio: 45000,
    img: "./assets/img/azules.jpg",
    },

    { 
    
    id: "5",
    categoría: "asfalto", 
    modelo: "Racer TR 21",  
    cantidad: 5, 
    precio: 32000,
    img: "./assets/img/adi4.jpg",
    },

    {

    id: "6",
    categoría: "trial", 
    modelo: "Terrex Two BOA",  
    cantidad: 5, 
    precio: 39000,
    img: "./assets/img/adi5.jpg",
    },

    { 
    
    id: "7",
    categoría: "asfalto", 
    modelo: "Solarglide 5",  
    cantidad: 5, 
    precio: 41000,
    img: "./assets/img/adi6.jpg",

},
    { 
    
    id: "8",
    categoría: "asfalto", 
    modelo: "Adizero Boston 10",  
    cantidad: 5, 
    precio: 40000,
    img: "./assets/img/adi7.jpg",
}


]

let carrito;

if (JSON.parse(localStorage.getItem('carrito'))){
    carrito = JSON.parse(localStorage.getItem('carrito'))
} else {
    localStorage.setItem('carrito', JSON.stringify([]))
    carrito = JSON.parse(localStorage.getItem('carrito'))
}

function desplegarproductos(){
    for (let i = 0; i < productos.length; i++) {
        const element = productos[i];
        const{id, modelo, precio, img} = element
        const card = `
        <div class= 'card'>
        <p>${modelo}</p>
        <div>
            <img class= 'imgProducto' src=${img} alt= ''/>
        </div>
        <div>
            <p>$${precio.toLocaleString()}</p>
        </div>
        <div class="btn-container">
            <button id= ${id} class= 'btnAgregar btn btn-primary'>Agregar</button>

            </div>
        </div>
    `
    const container = document.getElementById("container")
    container.innerHTML += card
    }
}

desplegarproductos()

const btnAgregar = document.getElementsByClassName('btnAgregar')

for (let i = 0; i < btnAgregar.length; i++) {
    const element = btnAgregar[i];
    element.addEventListener('click', agregarAlCarrito)

    
    
}



function agregarAlCarrito(e) {
const btn = e.target;
const idBoton = btn.getAttribute('id')
const prodEncontrado = productos.find(prod => prod.id == idBoton)
const enCarrito = carrito.find(prod => prod.id == prodEncontrado.id)

/* alert("agregaste") */

console.log(enCarrito)

if(!enCarrito) {
    carrito.push({...prodEncontrado, cantidad: 1})
} else {
    let carritoFiltrado = carrito.filter(prod => prod.id != enCarrito.id)
    carrito = [...carritoFiltrado, {...enCarrito, cantidad: enCarrito.cantidad + 1}]
}

Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Agregaste al carrito',
    text: ("Zapatillas:" + " " + enCarrito.modelo),
    showConfirmButton: false,
    timer: 1500
  })

console.log(carrito)
localStorage.setItem('carrito', JSON.stringify(carrito))
}

const contador = document.getElementById("cartCounter")
contador.innerHTML = carrito.length


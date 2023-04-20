const productos = [
    {
        id: "buzo-1",
        titulo: "Buzo Change",
        imagen: "../img/buzochange.jpg",
        precio: 20000,
        categoria: {
            nombre: "BUZOS",
            id: "buzos"
        }
    },
    {
        id: "buzo-2",
        titulo: "Buzo Culture",
        imagen: "../img/buzoculture.jpg",
        precio: 20000,
        categoria: {
            nombre: "BUZOS",
            id: "buzos"
        }
    },
    {
        id: "buzo-3",
        titulo: "Buzo Hope",
        imagen: "../img/buzohope.jpg",
        precio: 15000,
        categoria: {
            nombre: "BUZOS",
            id: "buzos"
        }
    },
    {
        id: "buzo-4",
        titulo: "Buzo Mush",
        imagen: "../img/buzomush.jpg",
        precio: 20000,
        categoria: {
            nombre: "BUZOS",
            id: "buzos"
        }
    },
    {
        id: "remera-1",
        titulo: "Remera Cele",
        imagen: "../img/remecele.jpg",
        precio: 5000,
        categoria: {
            nombre: "REMERAS",
            id: "remeras"
        }
    },
    {
        id: "remera-2",
        titulo: "Remera Wave",
        imagen: "../img/remewave.jpg",
        precio: 5000,
        categoria: {
            nombre: "REMERAS",
            id: "remeras"
        }
    },
    {
        id: "gorra-1",
        titulo: "Gorra Green",
        imagen: "../img/gorragreen.jpg",
        precio: 2000,
        categoria: {
            nombre: "ACCESORIOS",
            id: "accesorios"
        }
    },
    {
        id: "gorra-2",
        titulo: "Gorra Wave",
        imagen: "../img/gorrawave.jpg",
        precio: 1900,
        categoria: {
            nombre: "ACCESORIOS",
            id: "accesorios"
        }
    },
    {
        id: "gorra-",
        titulo: "Gorra Chill",
        imagen: "../img/gorrachill.jpg",
        precio: 1900,
        categoria: {
            nombre: "ACCESORIOS",
            id: "accesorios"
        }
    }
];

/* const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

botonesCategorias.forEach(boton => boton.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
}))

//Primero un for each para que recorra todos los productos y los pueda cargar uno por uno.
function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML ="";

    productosElegidos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
    <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                    <div class="producto-detalles">
                        <h3 class="producto-titulo">${producto.titulo}</h3>
                        <p class="producto-precio">$${producto.precio}</p>
                        <button class="producto-agregar" id="${producto.id}">Comprar</button>
                    </div>
         `;
        
        contenedorProductos.append(div);
    })
    actualizarBotonesAgregar();
}

//Cuando se selecione un elemento del menu, se active, y se desactiven los otros, y ademas se muestren los elementos de esa categoria.

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;


            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "TODOS LOS PRODUCTOS";
            cargarProductos(productos)
        }
    })
})

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}
//Guardar este array en el local storage
const productosEnCarrito = [];

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;

    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
    actualizarNumerito ();

    localStorage.setItem ("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito (){
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
} */

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <p class="producto-precio">$${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}">Comprar</button>
        </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}
cargarProductos(productos);

//Que las categorias se seleccionen cuando hacemos click, y que carguen los productos de las categorias, y los nombres de las categorias.
botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));

        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "TODOS LOS PRODUCTOS";
            cargarProductos(productos);
        }
    })
})

//Botones agregar producto al carrito (comprar)
function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton=> {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

const productosEnCarrito = [];

function agregarAlCarrito (e){
 const idBoton = e.currentTarget.id;
 const productoAgregado = productos.find(producto => producto.id === idBoton);

 if (productosEnCarrito.some(producto => producto.id === idBoton)){
 const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
 productosEnCarrito[index].cantidad++;
 }else {
    productoAgregado.cantidad =1; 
 productosEnCarrito.push(productoAgregado);
 }
 actualizarNumerito();

 localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}
//Actualizar numerito

function actualizarNumerito(){
 let nuevoNumerito= productosEnCarrito.reduce((acc, producto) =>acc+ producto.cantidad, 0);
 numerito.innerText = nuevoNumerito;

}


// seccio de el efecto paralax
document.addEventListener("mousemove", parallax);
function parallax(e){
  this.querySelectorAll('.objeto').forEach(objeto => {
    const speed = objeto.getAttribute('data-value')
    const x = (window.innerWidth - e.pageX*speed)/100
    const y = (window.innerWidth - e.pageY*speed)/100

    objeto.style.transform = `translateX(${x}px) translateY(${y}px)`
  })

}
//---------------codigo de arom----------//

// hover para las secciones destacadas
const contenedor = document.querySelector('.cat');
const imagen = document.getElementById('imagenZoom');

contenedor.addEventListener('mouseenter', () => {});

contenedor.addEventListener('mouseleave', () => {});
//---------------codigo de arom----------//

//------------ecomerce------------//

// productos
const productosArray =[{
  id: "Duke-390",
  titulo: "Duke 390",
  imagen: "./img/duke 390.webp",
  categoria: {
    nombre: "KTM",
    id: "ktm"
  },
  precio: 9900,
},
{
  id: "fz-150",
  titulo: "fz 150",
  imagen: "./img/fz 150.webp",
  categoria: {
    nombre: "Yamaha",
    id: "yamaha"
  },
  precio: 2600,
},
{
  id: "ninja-400",
  titulo: "ninja 400",
  imagen: "./img/ninja 400.webp",
  categoria: {
    nombre: "Kawasaki",
    id: "kawasaki"
  },
  precio: 13350
}
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesMarca = document.querySelectorAll(".e-marcas");


function limpiarContenedorProductos() {
// Limpia el contenedor de productos
  contenedorProductos.innerHTML = "";
}

function cargarProductos(productos) {
  productos.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.classList.add("e-card");
    div.innerHTML = `
      <figure>
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.titulo}">
        <div class="capa">
          <h3>aqui va la ficha tecnica</h3>
          <p>aqui va otra cosa</p>
        </div>
      </figure>
      <div class="card-body">
        <h5 class="card-title">${producto.titulo}</h5>
        <p class="card-text año-km">2023 | 0km</p>
        <p class="card-text precio"> U$S${producto.precio}</p>
        <button id="${producto.id}" class="btn btn-primary">agregar al carrito</button>
      </div>
    </div> `;
    contenedorProductos.append(div);
  });
}

cargarProductos(productosArray);

botonesMarca.forEach(boton => {
  boton.addEventListener("click", (e) => {
    botonesMarca.forEach(b => b.classList.remove("active"));
    e.currentTarget.classList.add("active");

    const categoriaSeleccionada = e.currentTarget.id;

    const productosBoton = productosArray.filter(producto => {
      if (categoriaSeleccionada === "todas") {
        return true;
      } else {
        return producto.categoria.id === categoriaSeleccionada;
      }
    });
    limpiarContenedorProductos();
    cargarProductos(productosBoton);
  });
});

// ------ carrito 
const toggleCarritoButton = document.getElementById('toggleCarrito'); 
const carrito = document.getElementById('carrito');
const productosEnCarrito = []; 

// Evento para mostrar el carrito
toggleCarritoButton.addEventListener('click', () => {
    carrito.classList.toggle('active');
    actualizarCarrito();
});
// Evento para agregar productos al carrito 
contenedorProductos.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const productoId = event.target.id;
        agregarAlCarrito(productoId);
        actualizarCarrito();
    }
});
function agregarAlCarrito(productoId) {
  const producto = productosArray.find(p => p.id === productoId);
  productosEnCarrito.push(producto);

// localStorage
  localStorage.setItem('productosEnCarrito', JSON.stringify(productosEnCarrito));
}

// localStorage al cargar la página
function cargarProductosDesdeLocalStorage() {
  const productosGuardados = JSON.parse(localStorage.getItem('productosEnCarrito')) || [];
  productosEnCarrito.push(...productosGuardados);
}
carrito.addEventListener('click', (event) => {
  if (event.target.classList.contains('papelera')) {
      const productoIndex = event.target.closest('.cont-producto-carrito').dataset.index;
      eliminarDelCarrito(productoIndex);
      actualizarCarrito(); // Actualiza la visualización del carrito al eliminar un producto
  }
});

// borrar del carrito
function eliminarDelCarrito(productoIndex) {
  productosEnCarrito.splice(productoIndex, 1);
}

function actualizarCarrito() {
  const productosEnCarritoHTML = productosEnCarrito.map((producto, index) => `
      <div class="cont-carrito" data-index="${index}">  
          <div class="cont-producto-carrito">
              <img src="${producto.imagen}" class="foto-carrito" alt="${producto.titulo}"> 
              <p class="nombre-producto">${producto.titulo}</p>
              <p class="card-text precio">U$S${producto.precio}</p>
              <button class="papelera">borrar</i></button>
          </div>
      </div>`).join('');
  carrito.innerHTML = productosEnCarritoHTML;
  localStorage.setItem('productosEnCarrito', JSON.stringify(productosEnCarrito));
}
cargarProductosDesdeLocalStorage();
actualizarCarrito();
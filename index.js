// sección del efecto parallax
document.addEventListener("mousemove", parallax);
function parallax(e){
  this.querySelectorAll('.objeto').forEach(objeto => {
    const speed = objeto.getAttribute('data-value')
    const x = (window.innerWidth - e.pageX*speed)/100
    const y = (window.innerWidth - e.pageY*speed)/100
    objeto.style.transform = `translateX(${x}px) translateY(${y}px)`
  });
}

// código para las secciones destacadas
const contenedor = document.querySelector('.cat');
const imagen = document.getElementById('imagenZoom');

contenedor.addEventListener('mouseenter', () => {});

contenedor.addEventListener('mouseleave', () => {});

// sección de ecommerce

// productos
const productosArray = [
  {
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
  },
  {
    id: "gn-125",
    titulo: "gn 125",
    imagen: "./img/suzuki-gn-125.jpg",
    categoria: {
      nombre: "Suzuki",
      id: "suzuki"
    },
    precio: 13350
  },
  { 
    id: "NC750X",
    titulo: "NC750X",
    imagen: "./img/NC750X.webp",
    categoria: {
      nombre: "Honda",
      id: "honda"
    },
    precio: 13350
  }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesMarca = document.querySelectorAll(".e-marcas");
const toggleCarritoButton = document.getElementById('toggleCarrito'); 
const carrito = document.getElementById('carrito');
const productosEnCarrito = []; 

function limpiarContenedorProductos() {
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
          <h3>aqui va la ficha técnica</h3>
          <p>aqui va otra cosa</p>
        </div>
      </figure>
      <div class="card-body">
        <h5 class="card-title">${producto.titulo}</h5>
        <p class="card-text año-km">2023 | 0km</p>
        <p class="card-text precio" id="${producto.id}"> U$S${producto.precio}</p>
        <button id="${producto.id}" class="btn btn-primary">agregar al carrito</button>
      </div>
    </div> `;
    contenedorProductos.append(div);
  });
}

function agregarAlCarrito(productoId) {
  const producto = productosArray.find(p => p.id === productoId);
  productosEnCarrito.push(producto);
  localStorage.setItem('productosEnCarrito', JSON.stringify(productosEnCarrito));
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Tu producto está en el carrito",
    showConfirmButton: false,
    timer: 1500
  });
}

function cargarProductosDesdeLocalStorage() {
  const productosGuardados = JSON.parse(localStorage.getItem('productosEnCarrito')) || [];
  productosEnCarrito.push(...productosGuardados);
}

function eliminarDelCarrito(productoIndex) {
  productosEnCarrito.splice(productoIndex, 1);
}

function mostrarMensajeCarritoVacio() {
  if (productosEnCarrito.length === 0) {
    const mensajeCarritoVacio = document.createElement("p");
    mensajeCarritoVacio.textContent = "Tu carrito está vacío";
    mensajeCarritoVacio.classList.add("mensaje-carrito-vacio");
    const mensajesAnteriores = document.querySelectorAll(".mensaje-carrito-vacio");
    mensajesAnteriores.forEach(mensaje => mensaje.remove());
    carrito.appendChild(mensajeCarritoVacio);
  }
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
      const total = productosEnCarrito.length > 0 ? productosEnCarrito.reduce((acumulado, producto) => acumulado + producto.precio, 0) : 0;

      const barraInferiorHTML = productosEnCarrito.length > 0 ? `
        <div class="barra-inferior-carrito">
          <p>Total:</p>
          <p>U$S${total}</p>
          <button id="" class="btn btn-primary">Finalizar compra</button>
        </div>` : '';
    
      carrito.innerHTML = productosEnCarritoHTML + barraInferiorHTML;
    
      localStorage.setItem('productosEnCarrito', JSON.stringify(productosEnCarrito));
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

toggleCarritoButton.addEventListener('click', () => {
  carrito.classList.toggle('active');
  actualizarCarrito();
  mostrarMensajeCarritoVacio();
});

contenedorProductos.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const productoId = event.target.id;
        agregarAlCarrito(productoId);
        actualizarCarrito();
        
    }
});

carrito.addEventListener('click', (event) => {
  if (event.target.classList.contains('papelera')) {
      const productoIndex = event.target.closest('.cont-producto-carrito').dataset.index;
      eliminarDelCarrito(productoIndex);
      actualizarCarrito();
      mostrarMensajeCarritoVacio();
  }
});

let tipoDeCambio = 1.2;
fetch("https://api.exchangeratesapi.io/latest?base=USD&symbols=ARS")
  .then(response => response.json())
  .then(data => {
    tipoDeCambio = data.rates.ARS;
    console.log("Tipo de cambio: " + tipoDeCambio);
    actualizarPrecios();
  })
  .catch(error => {
    console.error("Error al consultar la API: " + error);
  });

function convertirPrecio(precio) {
  return precio * tipoDeCambio;
}

function mostrarPrecio(producto) {
  let precio = convertirPrecio(producto.precio);
  let elemento = document.getElementById(producto.id);
  elemento.textContent = precio.toLocaleString("es-AR", { style: "currency", currency: "ARS" });
}

function actualizarPrecios() {
  productosArray.forEach(producto => {
    mostrarPrecio(producto);
  });
}

setInterval(actualizarPrecios, 5000);
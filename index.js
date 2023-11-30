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
    nombre: "todas",
    id: "ktm"
  },
  precio: 9900,
},
{
  id: "fz-150",
  titulo: "fz 150",
  imagen: "./img/fz 150.webp",
  categoria: {
    nombre: "todas",
    id: "yamaha"
  },
  precio: 2600,
},
{
  id: "ninja-400",
  titulo: "ninja 400",
  imagen: "./img/ninja 400.webp",
  categoria: {
    nombre: "todas",
    id: "kawasaki"
  },
  precio: 13350
}
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesMarca = document.querySelectorAll(".e-marcas")


function cargarProductos() {
  productosArray.forEach(producto => {
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
    contenedorProductos.append(div)      


  })

}
cargarProductos(productosArray);

botonesMarca.forEach(boton => {
  boton.addEventListener("click", (e) => {

    botonesMarca.forEach(boton => boton.classList.remove("active")) 

    e.currentTarget.classList.add("active");

    const productosBoton = productosArray.filter(producto => producto.categoria.id === e.currentTarget.id)

    cargarProductos(productosBoton);
    
  })
})
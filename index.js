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
    ficha: `<div class="capa">
    <div class="detalles"><h6>Cilindrada:</h6><p>249 cc</p></div>
    <div class="detalles"><h6>Velocidad máxima:</h6><p>140 km/h</p></div>
    <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
    <div class="detalles"><h6>Transmisión:</h6><p>6 velocidades</p></div>
  </div>`,
    imagen: "./img/duke 390.webp",
    categoria: {
      nombre: "KTM",
      id: "ktm"
    },
    precio: 9900,
  },{
    id: "rc-390",
    titulo: "RC 390",
    ficha: `<div class="capa">
      <div class="detalles"><h6>Cilindrada:</h6><p>373 cc</p></div>
      <div class="detalles"><h6>Velocidad máxima:</h6><p>170 km/h</p></div>
      <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
      <div class="detalles"><h6>Transmisión:</h6><p>6 velocidades</p></div>
    </div>`,
    imagen: "./img/rc-390.jpg",
    categoria: {
      nombre: "KTM",
      id: "ktm"
    },
    precio: 10800,
  },
  {
    id: "duke-200",
    titulo: "Duke 200",
    ficha: `<div class="capa">
      <div class="detalles"><h6>Cilindrada:</h6><p>199.5 cc</p></div>
      <div class="detalles"><h6>Velocidad máxima:</h6><p>135 km/h</p></div>
      <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
      <div class="detalles"><h6>Transmisión:</h6><p>6 velocidades</p></div>
    </div>`,
    imagen: "./img/duke-200.webp",
    categoria: {
      nombre: "KTM",
      id: "ktm"
    },
    precio: 7800,
  },
  {
    id: "adventure-390",
    titulo: "Adventure 390",
    ficha: `<div class="capa">
      <div class="detalles"><h6>Cilindrada:</h6><p>373 cc</p></div>
      <div class="detalles"><h6>Velocidad máxima:</h6><p>160 km/h</p></div>
      <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
      <div class="detalles"><h6>Transmisión:</h6><p>6 velocidades</p></div>
    </div>`,
    imagen: "./img/adventure-390.webp",
    categoria: {
      nombre: "KTM",
      id: "ktm"
    },
    precio: 11500,
  },
  {
    id: "rc-200",
    titulo: "RC 200",
    ficha: `<div class="capa">
      <div class="detalles"><h6>Cilindrada:</h6><p>199.5 cc</p></div>
      <div class="detalles"><h6>Velocidad máxima:</h6><p>140 km/h</p></div>
      <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
      <div class="detalles"><h6>Transmisión:</h6><p>6 velocidades</p></div>
    </div>`,
    imagen: "./img/rc-200.jpg",
    categoria: {
      nombre: "KTM",
      id: "ktm"
    },
    precio: 9200,
  },
  {
    id: "duke-125",
    titulo: "Duke 125",
    ficha: `<div class="capa">
      <div class="detalles"><h6>Cilindrada:</h6><p>124.7 cc</p></div>
      <div class="detalles"><h6>Velocidad máxima:</h6><p>120 km/h</p></div>
      <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
      <div class="detalles"><h6>Transmisión:</h6><p>6 velocidades</p></div>
    </div>`,
    imagen: "./img/duke-125.jpg",
    categoria: {
      nombre: "KTM",
      id: "ktm"
    },
    precio: 5400,
  },
  {
    id: "fz-150",
    titulo: "FZ 150",
    ficha: `<div class="capa">
    <div class="detalles"><h6>Cilindrada:</h6><p>149 cc</p></div>
    <div class="detalles"><h6>Velocidad máxima:</h6><p>115 km/h</p></div>
    <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
    <div class="detalles"><h6>Transmisión:</h6><p>5 velocidades</p></div>
  </div>`,
    imagen: "./img/fz 150.webp",
    categoria: {
      nombre: "Yamaha",
      id: "yamaha"
    },
    precio: 2600,
  },
  {
    id: "yzf-r1",
    titulo: "YZF-R1",
    ficha: `<div class="capa">
      <div class="detalles"><h6>Cilindrada:</h6><p>998 cc</p></div>
      <div class="detalles"><h6>Velocidad máxima:</h6><p>299 km/h</p></div>
      <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
      <div class="detalles"><h6>Transmisión:</h6><p>6 velocidades</p></div>
    </div>`,
    imagen: "./img/yzf-r1.webp",
    categoria: {
      nombre: "Yamaha",
      id: "yamaha"
    },
    precio: 18000,
  },
  {
    id: "mt-07",
    titulo: "MT-07",
    ficha: `<div class="capa">
      <div class="detalles"><h6>Cilindrada:</h6><p>689 cc</p></div>
      <div class="detalles"><h6>Velocidad máxima:</h6><p>210 km/h</p></div>
      <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
      <div class="detalles"><h6>Transmisión:</h6><p>6 velocidades</p></div>
    </div>`,
    imagen: "./img/mt-07.jpg",
    categoria: {
      nombre: "Yamaha",
      id: "yamaha"
    },
    precio: 8700,
  },
  {
    id: "yzf-r6",
    titulo: "YZF-R6",
    ficha: `<div class="capa">
      <div class="detalles"><h6>Cilindrada:</h6><p>599 cc</p></div>
      <div class="detalles"><h6>Velocidad máxima:</h6><p>262 km/h</p></div>
      <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
      <div class="detalles"><h6>Transmisión:</h6><p>6 velocidades</p></div>
    </div>`,
    imagen: "./img/yzf-r6.jpg",
    categoria: {
      nombre: "Yamaha",
      id: "yamaha"
    },
    precio: 12500,
  },
  {
    id: "tracer-900",
    titulo: "Tracer 900",
    ficha: `<div class="capa">
      <div class="detalles"><h6>Cilindrada:</h6><p>847 cc</p></div>
      <div class="detalles"><h6>Velocidad máxima:</h6><p>215 km/h</p></div>
      <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
      <div class="detalles"><h6>Transmisión:</h6><p>6 velocidades</p></div>
    </div>`,
    imagen: "./img/tracer-900.jpg",
    categoria: {
      nombre: "Yamaha",
      id: "yamaha"
    },
    precio: 14200,
  },
  {
    id: "xt-660z-tenere",
    titulo: "XT 660Z Ténéré",
    ficha: `<div class="capa">
      <div class="detalles"><h6>Cilindrada:</h6><p>660 cc</p></div>
      <div class="detalles"><h6>Velocidad máxima:</h6><p>175 km/h</p></div>
      <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
      <div class="detalles"><h6>Transmisión:</h6><p>5 velocidades</p></div>
    </div>`,
    imagen: "./img/xt-660z-tenere.jpg",
    categoria: {
      nombre: "Yamaha",
      id: "yamaha"
    },
    precio: 12600,
  },
  {
    id: "ninja-400",
    ficha: `<div class="capa">
    <div class="detalles"><h6>Cilindrada:</h6><p>399 cc</p></div>
    <div class="detalles"><h6>Velocidad máxima:</h6><p>170 km/h</p></div>
    <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
    <div class="detalles"><h6>Transmisión:</h6><p>6 velocidades</p></div>
  </div>`,
    titulo: "Ninja 400",
    imagen: "./img/ninja 400.webp",
    categoria: {
      nombre: "Kawasaki",
      id: "kawasaki"
    },
    precio: 13350
  },{
    id: "ninja-h2",
    titulo: "Ninja H2",
    ficha: `<div class="capa">
      <div class="detalles"><h6>Cilindrada:</h6><p>998 cc</p></div>
      <div class="detalles"><h6>Velocidad máxima:</h6><p>400 km/h</p></div>
      <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
      <div class="detalles"><h6>Transmisión:</h6><p>6 velocidades</p></div>
    </div>`,
    imagen: "./img/ninja-h2.webp",
    categoria: {
      nombre: "Kawasaki",
      id: "kawasaki"
    },
    precio: 33000,
  },
  {
    id: "z650",
    titulo: "Z650",
    ficha: `<div class="capa">
      <div class="detalles"><h6>Cilindrada:</h6><p>649 cc</p></div>
      <div class="detalles"><h6>Velocidad máxima:</h6><p>210 km/h</p></div>
      <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
      <div class="detalles"><h6>Transmisión:</h6><p>6 velocidades</p></div>
    </div>`,
    imagen: "./img/z650.webp",
    categoria: {
      nombre: "Kawasaki",
      id: "kawasaki"
    },
    precio: 9200,
  },
  {
    id: "versys-1000",
    titulo: "Versys 1000",
    ficha: `<div class="capa">
      <div class="detalles"><h6>Cilindrada:</h6><p>1043 cc</p></div>
      <div class="detalles"><h6>Velocidad máxima:</h6><p>240 km/h</p></div>
      <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
      <div class="detalles"><h6>Transmisión:</h6><p>6 velocidades</p></div>
    </div>`,
    imagen: "./img/versys-1000.webp",
    categoria: {
      nombre: "Kawasaki",
      id: "kawasaki"
    },
    precio: 14500,
  },
  {
    id: "zx-6r",
    titulo: "ZX-6R",
    ficha: `<div class="capa">
      <div class="detalles"><h6>Cilindrada:</h6><p>636 cc</p></div>
      <div class="detalles"><h6>Velocidad máxima:</h6><p>260 km/h</p></div>
      <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
      <div class="detalles"><h6>Transmisión:</h6><p>6 velocidades</p></div>
    </div>`,
    imagen: "./img/zx-6r.webp",
    categoria: {
      nombre: "Kawasaki",
      id: "kawasaki"
    },
    precio: 12500,
  },
  {
    id: "vulcan-s",
    titulo: "Vulcan S",
    ficha: `<div class="capa">
      <div class="detalles"><h6>Cilindrada:</h6><p>649 cc</p></div>
      <div class="detalles"><h6>Velocidad máxima:</h6><p>180 km/h</p></div>
      <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
      <div class="detalles"><h6>Transmisión:</h6><p>6 velocidades</p></div>
    </div>`,
    imagen: "./img/vulcan-s.webp",
    categoria: {
      nombre: "Kawasaki",
      id: "kawasaki"
    },
    precio: 8700,
  },
  {
    id: "gn-125",
    titulo: "GN 125",
    ficha: `<div class="capa">
    <div class="detalles"><h6>Cilindrada:</h6><p>124 cc</p></div>
    <div class="detalles"><h6>Velocidad máxima:</h6><p>105 km/h</p></div>
    <div class="detalles"><h6>Alimentación:</h6><p>carburador</p></div>
    <div class="detalles"><h6>Transmisión:</h6><p>5 velocidades</p></div>
  </div>`,
    imagen: "./img/suzuki-gn-125.jpg",
    categoria: {
      nombre: "Suzuki",
      id: "suzuki"
    },
    precio: 1900
  },
  {
    id: "gsx-s750",
    titulo: "GSX-S750",
    ficha: `<div class="capa">
      <div class="detalles"><h6>Cilindrada:</h6><p>749 cc</p></div>
      <div class="detalles"><h6>Velocidad máxima:</h6><p>220 km/h</p></div>
      <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
      <div class="detalles"><h6>Transmisión:</h6><p>6 velocidades</p></div>
    </div>`,
    imagen: "./img/gsx-s750.webp",
    categoria: {
      nombre: "Suzuki",
      id: "suzuki"
    },
    precio: 10500,
  },
  {
    id: "sv650",
    titulo: "SV650",
    ficha: `<div class="capa">
      <div class="detalles"><h6>Cilindrada:</h6><p>645 cc</p></div>
      <div class="detalles"><h6>Velocidad máxima:</h6><p>200 km/h</p></div>
      <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
      <div class="detalles"><h6>Transmisión:</h6><p>6 velocidades</p></div>
    </div>`,
    imagen: "./img/sv650.webp",
    categoria: {
      nombre: "Suzuki",
      id: "suzuki"
    },
    precio: 7800,
  },
  {
    id: "hayabusa",
    titulo: "Hayabusa",
    ficha: `<div class="capa">
      <div class="detalles"><h6>Cilindrada:</h6><p>1340 cc</p></div>
      <div class="detalles"><h6>Velocidad máxima:</h6><p>312 km/h</p></div>
      <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
      <div class="detalles"><h6>Transmisión:</h6><p>6 velocidades</p></div>
    </div>`,
    imagen: "./img/hayabusa.webp",
    categoria: {
      nombre: "Suzuki",
      id: "suzuki"
    },
    precio: 18500,
  },
  {
    id: "v-strom-650",
    titulo: "V-Strom 650",
    ficha: `<div class="capa">
      <div class="detalles"><h6>Cilindrada:</h6><p>645 cc</p></div>
      <div class="detalles"><h6>Velocidad máxima:</h6><p>200 km/h</p></div>
      <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
      <div class="detalles"><h6>Transmisión:</h6><p>6 velocidades</p></div>
    </div>`,
    imagen: "./img/v-strom-650.webp",
    categoria: {
      nombre: "Suzuki",
      id: "suzuki"
    },
    precio: 9200,
  },
  {
    id: "gsx-r1000",
    titulo: "GSX-R1000",
    ficha: `<div class="capa">
      <div class="detalles"><h6>Cilindrada:</h6><p>999 cc</p></div>
      <div class="detalles"><h6>Velocidad máxima:</h6><p>299 km/h</p></div>
      <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
      <div class="detalles"><h6>Transmisión:</h6><p>6 velocidades</p></div>
    </div>`,
    imagen: "./img/gsx-r1000.webp",
    categoria: {
      nombre: "Suzuki",
      id: "suzuki"
    },
    precio: 16500,
  },
  { 
    id: "NC750X",
    titulo: "NC750X",
    ficha: `<div class="capa">
    <div class="detalles"><h6>Cilindrada:</h6><p>745 cc</p></div>
    <div class="detalles"><h6>Velocidad máxima:</h6><p>180 Km/h</p></div>
    <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
    <div class="detalles"><h6>Transmisión:</h6><p>6 velocidades</p></div>
  </div>`,
    imagen: "./img/NC750X.webp",
    categoria: {
      nombre: "Honda",
      id: "honda"
    },
    precio: 15500
  },
  {
    id: "cbr1000rr",
    titulo: "CBR1000RR",
    ficha: `<div class="capa">
      <div class="detalles"><h6>Cilindrada:</h6><p>1000 cc</p></div>
      <div class="detalles"><h6>Velocidad máxima:</h6><p>299 km/h</p></div>
      <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
      <div class="detalles"><h6>Transmisión:</h6><p>6 velocidades</p></div>
    </div>`,
    imagen: "./img/cbr1000rr.webp",
    categoria: {
      nombre: "Honda",
      id: "honda"
    },
    precio: 17200,
  },
  {
    id: "cb500x",
    titulo: "CB500X",
    ficha: `<div class="capa">
      <div class="detalles"><h6>Cilindrada:</h6><p>471 cc</p></div>
      <div class="detalles"><h6>Velocidad máxima:</h6><p>190 km/h</p></div>
      <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
      <div class="detalles"><h6>Transmisión:</h6><p>6 velocidades</p></div>
    </div>`,
    imagen: "./img/cb500x.webp",
    categoria: {
      nombre: "Honda",
      id: "honda"
    },
    precio: 7200,
  },
  {
    id: "goldwing",
    titulo: "Goldwing",
    ficha: `<div class="capa">
      <div class="detalles"><h6>Cilindrada:</h6><p>1833 cc</p></div>
      <div class="detalles"><h6>Velocidad máxima:</h6><p>180 km/h</p></div>
      <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
      <div class="detalles"><h6>Transmisión:</h6><p>7 velocidades</p></div>
    </div>`,
    imagen: "./img/goldwing.webp",
    categoria: {
      nombre: "Honda",
      id: "honda"
    },
    precio: 33000,
  },
  {
    id: "cbr650r",
    titulo: "CBR650R",
    ficha: `<div class="capa">
      <div class="detalles"><h6>Cilindrada:</h6><p>649 cc</p></div>
      <div class="detalles"><h6>Velocidad máxima:</h6><p>220 km/h</p></div>
      <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
      <div class="detalles"><h6>Transmisión:</h6><p>6 velocidades</p></div>
    </div>`,
    imagen: "./img/cbr650r.webp",
    categoria: {
      nombre: "Honda",
      id: "honda"
    },
    precio: 9900,
  },
  {
    id: "africatwin",
    titulo: "Africa Twin",
    ficha: `<div class="capa">
      <div class="detalles"><h6>Cilindrada:</h6><p>1084 cc</p></div>
      <div class="detalles"><h6>Velocidad máxima:</h6><p>212 km/h</p></div>
      <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
      <div class="detalles"><h6>Transmisión:</h6><p>6 velocidades</p></div>
    </div>`,
    imagen: "./img/africatwin.webp",
    categoria: {
      nombre: "Honda",
      id: "honda"
    },
    precio: 16800,
  },
  { 
    id: "SMX-200",
    titulo: "SMX 200 Adventure",
    ficha: `<div class="capa">
    <div class="detalles"><h6>Cilindrada:</h6><p>205cc</p></div>
    <div class="detalles"><h6>Velocidad máxima:</h6><p>105 km/h</p></div>
    <div class="detalles"><h6>Alimentación:</h6><p>carburador</p></div>
    <div class="detalles"><h6>Transmisión:</h6><p> velocidades</p></div>
  </div>`,
    imagen: "./img/smx-200-adv.jpeg",
    categoria: {
      nombre: "Gilera",
      id: "gilera"
    },
    precio: 1680
  },
  {
    id: "smx-125",
    titulo: "SMX 125",
    ficha: `<div class="capa">
      <div class="detalles"><h6>Cilindrada:</h6><p>125 cc</p></div>
      <div class="detalles"><h6>Velocidad máxima:</h6><p>100 km/h</p></div>
      <div class="detalles"><h6>Alimentación:</h6><p>Carburador</p></div>
      <div class="detalles"><h6>Transmisión:</h6><p>5 velocidades</p></div>
    </div>`,
    imagen: "./img/smx-125.webp",
    categoria: {
      nombre: "Gilera",
      id: "gilera"
    },
    precio: 2500,
  },
  {
    id: "runner-50",
    titulo: "Runner 50",
    ficha: `<div class="capa">
      <div class="detalles"><h6>Cilindrada:</h6><p>50 cc</p></div>
      <div class="detalles"><h6>Velocidad máxima:</h6><p>45 km/h</p></div>
      <div class="detalles"><h6>Alimentación:</h6><p>Carburador</p></div>
      <div class="detalles"><h6>Transmisión:</h6><p>Automática</p></div>
    </div>`,
    imagen: "./img/runner-50.webp",
    categoria: {
      nombre: "Gilera",
      id: "gilera"
    },
    precio: 1200,
  },
  {
    id: "nexus-500",
    titulo: "Nexus 500",
    ficha: `<div class="capa">
      <div class="detalles"><h6>Cilindrada:</h6><p>492 cc</p></div>
      <div class="detalles"><h6>Velocidad máxima:</h6><p>160 km/h</p></div>
      <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
      <div class="detalles"><h6>Transmisión:</h6><p>Automática</p></div>
    </div>`,
    imagen: "./img/nexus-500.webp",
    categoria: {
      nombre: "Gilera",
      id: "gilera"
    },
    precio: 4800,
  },
  {
    id: "stalker-50",
    titulo: "Stalker 50",
    ficha: `<div class="capa">
      <div class="detalles"><h6>Cilindrada:</h6><p>49 cc</p></div>
      <div class="detalles"><h6>Velocidad máxima:</h6><p>45 km/h</p></div>
      <div class="detalles"><h6>Alimentación:</h6><p>Carburador</p></div>
      <div class="detalles"><h6>Transmisión:</h6><p>Automática</p></div>
    </div>`,
    imagen: "./img/stalker-50.webp",
    categoria: {
      nombre: "Gilera",
      id: "gilera"
    },
    precio: 1100,
  },
  {
    id: "fuoco-500",
    titulo: "Fuoco 500",
    ficha: `<div class="capa">
      <div class="detalles"><h6>Cilindrada:</h6><p>493 cc</p></div>
      <div class="detalles"><h6>Velocidad máxima:</h6><p>160 km/h</p></div>
      <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
      <div class="detalles"><h6>Transmisión:</h6><p>Automática</p></div>
    </div>`,
    imagen: "./img/fuoco-500.webp",
    categoria: {
      nombre: "Gilera",
      id: "gilera"
    },
    precio: 7800,
  },

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
        ${producto.ficha}
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
  const productoEnCarrito = { ...producto, precioARS: convertirPrecio(producto.precio) };
  productosEnCarrito.push(productoEnCarrito);
  actualizarCarrito();
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
  productosEnCarrito.length = 0;
  productosGuardados.forEach(producto => {
    producto.precioARS = convertirPrecio(producto.precio);
    productosEnCarrito.push(producto);
  });
  actualizarPreciosCarrito();
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
              <p class="card-text precio">ARS $ ${producto.precioARS}</p>
              <button class="papelera">borrar</i></button>
          </div>
      </div>`).join('');
      const total = productosEnCarrito.length > 0 ? productosEnCarrito.reduce((acumulado, producto) => acumulado + producto.precio, 0) : 0;

      const barraInferiorHTML = productosEnCarrito.length > 0 ? `
        <div class="barra-inferior-carrito">
          <p>Total:</p>
          <p>ARS $ ${total}</p>
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
    actualizarPreciosCarrito();
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

let tipoDeCambio = 1;
fetch("https://dolarapi.com/v1/dolares/blue")
  .then(response => response.json())
  .then(data => {
    tipoDeCambio = data.compra;
    console.log("Tipo de cambio: " + tipoDeCambio);
    actualizarPrecios();
  })
  .catch(error => {
    console.error("Error al consultar la API: " + error);
  });

function convertirPrecio(precio) {
  return precio * tipoDeCambio;
}

function mostrarPrecio(producto, precio = null) {
  if (precio === null) {
    precio = convertirPrecio(producto.precio);
  }
  let elemento = document.getElementById(producto.id);



  if (elemento) {
    elemento.textContent = precio.toLocaleString("es-AR", { style: "currency", currency: "ARS" });
  } else {
    console.error("Elemento no encontrado para el producto:", producto);
  }
}

function actualizarPrecios() {
  productosArray.forEach(producto => {
    mostrarPrecio(producto);
  });
}

function actualizarPreciosCarrito() {
  productosEnCarrito.forEach(producto => {
    producto.precio = convertirPrecio(producto.precio);
  });
  actualizarCarrito();
}

setInterval(actualizarPrecios, 5000);
cargarProductosDesdeLocalStorage();
actualizarCarrito();


const productos = [
  {
    id: "pantalon-1",
    titulo: "Pantalon 1",
    imagen: "../img/pant01.jpg",
    categoria: {
      nombre: "Pantalones",
      id: "pantalones",
    },
    precio: 15000,
  },
  {
      id: "pantalon-2",
      titulo: "Pantalon 2",
      imagen: "../img/pant02.jpg",
      categoria: {
        nombre: "Pantalones",
        id: "pantalones",
      },
      precio: 11500,
  },
  {
      id: "pantalon-3",
      titulo: "Pantalon 3",
      imagen: "../img/pant03.jpg",
      categoria: {
        nombre: "Pantalones",
        id: "pantalones",
      },
      precio: 12500,
  },
  {
      id: "pantalon-4",
      titulo: "Pantalon 4",
      imagen: "../img/pant01.jpg",
      categoria: {
        nombre: "Pantalones",
        id: "pantalones",
      },
      precio: 13500,
  },
  {
      id: "pantalon-5",
      titulo: "Pantalon 5",
      imagen: "../img/pant02.jpg",
      categoria: {
        nombre: "Pantalones",
        id: "pantalones",
      },
      precio: 15600,
  },

  {
      id: "pantalon-6",
      titulo: "Pantalon 6",
      imagen: "../img/pant03.jpg",
      categoria: {
        nombre: "Pantalones",
        id: "pantalones",
      },
      precio: 15900,
  },
  {
      id: "pantalon-7",
      titulo: "Pantalon 7",
      imagen: "../img/pant01.jpg",
      categoria: {
        nombre: "Pantalones",
        id: "pantalones",
      },
      precio: 18600,
  },
  {
      id: "pantalon-8",
      titulo: "Pantalon 8",
      imagen: "../img/pant02.jpg",
      categoria: {
        nombre: "Pantalones",
        id: "pantalones",
      },
      precio: 19000,
  },
  {
      id: "pantalon-9",
      titulo: "Pantalon 9",
      imagen: "../img/pant03.jpg",
      categoria: {
        nombre: "Pantalones",
        id: "pantalones",
      },
      precio: 20500,
  },
  {
      id: "pantalon-10",
      titulo: "Pantalon 10",
      imagen: "../img/pant01.jpg",
      categoria: {
        nombre: "Pantalones",
        id: "pantalones",
      },
      precio: 11500,
  },
  {
      id: "pantalon-11",
      titulo: "Pantalon 11",
      imagen: "../img/pant02.jpg",
      categoria: {
        nombre: "Pantalones",
        id: "pantalones",
      },
      precio: 15400,
  },
  {
      id: "pantalon-12",
      titulo: "Pantalon 12",
      imagen: "../img/pant03.jpg",
      categoria: {
        nombre: "Pantalones",
        id: "pantalones",
      },
      precio: 17500,
  },

];
//_________________________________________________

document.addEventListener("DOMContentLoaded", () => {
  productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito")) || [];
  cargarProductosCarrito();
})

//__________________________________________________

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categorias");
let botonesAgregar = document.querySelectorAll(".btnBoton");
const numero = document.querySelector("#numero");

function cargarProductos(productosElegidos) {
  contenedorProductos.innerHTML = "";

  productosElegidos.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("producto"); //producto
    div.innerHTML = `
        <div class="card producto">
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.titulo}">
            <div class="card-body">
                <h5 class="card-title">${producto.titulo}</h5>
                <p class="producto-precio">$${producto.precio}</p>
                <a href="#" class="btn btnBoton" id="${producto.id}">Agregar al carrito</a>
            </div>
        </div>
    `;

    contenedorProductos.append(div); //append
  });

  actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    botonesCategorias.forEach((boton) => boton.classList.remove("active"));

    e.currentTarget.classList.add("active");

    const productosBoton = productos.filter(
      (producto) => producto.categoria.id === e.currentTarget.id
    );

    cargarProductos(productosBoton);
  });
});

function actualizarBotonesAgregar() {
  botonesAgregar = document.querySelectorAll(".btnBoton");

  botonesAgregar.forEach((boton) => {
    boton.addEventListener("click", agregarAlCarrito);
  });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");


if (productosEnCarritoLS) {
  productosEnCarrito = JSON.parse(productosEnCarritoLS);
  actualizarNumero();
} else {
  productosEnCarrito = [];
}



function agregarAlCarrito(e) {
  const idBoton = e.currentTarget.id;
  const productoAgregado = productos.find(
    (producto) => producto.id === idBoton
  );

  if (productosEnCarrito.some((producto) => producto.id === idBoton)) {
    const index = productosEnCarrito.findIndex(
      (producto) => producto.id === idBoton
    );
    productosEnCarrito[index].cantidad++;
  } else {
    productoAgregado.cantidad = 1;
    productosEnCarrito.push(productoAgregado);
  }

  actualizarNumero();

  localStorage.setItem(
    "productos-en-carrito",
    JSON.stringify(productosEnCarrito)
  );
}

function actualizarNumero() {
  let nuevoNumero = productosEnCarrito.reduce(
    (acc, producto) => acc + producto.cantidad,
    0
  );
  numero.innerText = nuevoNumero;
}

/*Boton- categoria id=todos*/




































/*const productos = [
  {
    id: "pantalon-1",
    titulo: "Pantalon 1",
    imagen: "../img/pant01.jpg",
    categoria: {
      nombre: "Pantalones",
      id: "pantalones",
    },
    precio: 1500,
  },
  {
    id: "pantalon-2",
    titulo: "Pantalon 2",
    imagen: "../img/pant02.jpg",
    categoria: {
      nombre: "Pantalones",
      id: "pantalones",
    },
    precio: 1500,
  },
  {
    id: "pantalon-3",
    titulo: "Pantalon 3",
    imagen: "../img/pant03.jpg",
    categoria: {
      nombre: "Pantalones",
      id: "pantalones",
    },
    precio: 1500,
  },
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categorias");
let botonesAgregar = document.querySelectorAll(".btnBoton");
const numero = document.querySelector("#numero");

function cargarProductos(productosElegidos) {
  contenedorProductos.innerHTML = "";

  productosElegidos.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
          <div class="card col-xl-3 col-md-6 col-sm-12 producto">
              <img src="${producto.imagen}" class="card-img-top" alt="${producto.titulo}">
              <div class="card-body">
                  <h5 class="card-title">${producto.titulo}</h5>
                  <p class="producto-precio">$${producto.precio}</p>
                  <a href="#" class="btn btnBoton" id="${producto.id}">Agregar al carrito</a>
              </div>
          </div>
      `;

    contenedorProductos.append(div);
  });

  actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    botonesCategorias.forEach((boton) => boton.classList.remove("active"));

    e.currentTarget.classList.add("active");

    const productosBoton = productos.filter(
      (producto) => producto.categoria.id === e.currentTarget.id
    );

    cargarProductos(productosBoton);
  });
});

function actualizarBotonesAgregar() {
  botonesAgregar = document.querySelectorAll(".btnBoton");

  botonesAgregar.forEach((boton) => {
    boton.addEventListener("click", agregarAlCarrito);
  });
}

let productosEnCarrito = [];

document.addEventListener("DOMContentLoaded", () => {
  productosEnCarrito =
    JSON.parse(localStorage.getItem(productos - en - carrito)) || [];
  cargarProductosCarrito();
});

/*let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
  productosEnCarrito = JSON.parse(productosEnCarritoLS);
  actualizarNumero();
} else {
  productosEnCarrito = [];
}

function agregarAlCarrito(e) {
  const idBoton = e.currentTarget.id;
  const productoAgregado = productos.find(
    (producto) => producto.id === idBoton
  );

  if (productosEnCarrito.some((producto) => producto.id === idBoton)) {
    const index = productosEnCarrito.findIndex(
      (producto) => producto.id === idBoton
    );
    productosEnCarrito[index].cantidad++;
  } else {
    productoAgregado.cantidad = 1;
    productosEnCarrito.push(productoAgregado);
  }

  actualizarNumero();


  localStorage.setItem(
    "productos-en-carrito",
    JSON.stringify(productosEnCarrito)
  );
}

function actualizarNumero() {
  let nuevoNumero = productosEnCarrito.reduce(
    (acc, producto) => acc + producto.cantidad,
    0
  );
  numero.innerText = nuevoNumero;
}
*/

/*Boton- categoria id=todos*/

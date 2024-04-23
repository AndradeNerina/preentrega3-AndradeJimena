const productos = [
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
        id: "pantalon-1",
        titulo: "Pantalon 1",
        imagen: "../img/pant02.jpg",
        categoria: {
          nombre: "Pantalones",
          id: "pantalones",
        },
        precio: 1500,
    },
    {
        id: "pantalon-1",
        titulo: "Pantalon 1",
        imagen: "../img/pant03.jpg",
        categoria: {
          nombre: "Pantalones",
          id: "pantalones",
        },
        precio: 1500,
    },
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
        id: "pantalon-1",
        titulo: "Pantalon 1",
        imagen: "../img/pant02.jpg",
        categoria: {
          nombre: "Pantalones",
          id: "pantalones",
        },
        precio: 1500,
    },

    {
        id: "pantalon-1",
        titulo: "Pantalon 1",
        imagen: "../img/pant03.jpg",
        categoria: {
          nombre: "Pantalones",
          id: "pantalones",
        },
        precio: 1500,
    },
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
        id: "pantalon-1",
        titulo: "Pantalon 1",
        imagen: "../img/pant02.jpg",
        categoria: {
          nombre: "Pantalones",
          id: "pantalones",
        },
        precio: 1500,
    },
    {
        id: "pantalon-1",
        titulo: "Pantalon 1",
        imagen: "../img/pant03.jpg",
        categoria: {
          nombre: "Pantalones",
          id: "pantalones",
        },
        precio: 1500,
    },
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
        id: "pantalon-1",
        titulo: "Pantalon 1",
        imagen: "../img/pant02.jpg",
        categoria: {
          nombre: "Pantalones",
          id: "pantalones",
        },
        precio: 1500,
    },
    {
        id: "pantalon-1",
        titulo: "Pantalon 1",
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
  
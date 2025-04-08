const countryList = [
    "Nike Ice For One",
    "Dress Hugo Boss",
    "T-Shirt Fendi",
    "Dress Christian Dior"
];

const resultBox = document.querySelector(".results");
const inputBox = document.querySelector(".search-bar");

// Muestra sugerencias debajo del input
const displayResults = function (result) {
    const resultHTML = result.map(function (country) {
        return `<li onclick="selectInput(this)">${country}</li>`;
    });

    resultBox.innerHTML = `<ul>${resultHTML.join("")}</ul>`;
    resultBox.style.background = "#fff";
    resultBox.style.padding = "10px";
    resultBox.style.borderRadius = "5px";
    resultBox.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
    resultBox.style.display = "block";
};

// Escucha mientras se escribe
inputBox.onkeyup = function () {
    let result = [];
    const input = inputBox.value.toLowerCase();

    if (input.length === 0) {
        resultBox.innerHTML = "";
        resultBox.style.display = "none";
        mostrarTodosLosProductos();
        return;
    }

    result = countryList.filter((country) =>
        country.toLowerCase().includes(input)
    );

    displayResults(result);
};

// Cuando haces clic en una sugerencia
function selectInput(country) {
    inputBox.value = country.innerText;
    resultBox.innerHTML = "";
    resultBox.style.display = "none";
    filtrarProductos(country.innerText);
}

// Filtra productos según el texto
function filtrarProductos(filtro) {
    const productos = document.querySelectorAll(".producto");
    const filtroLower = filtro.toLowerCase();
    let visibles = 0;

    productos.forEach((producto) => {
        const categoria = producto.getAttribute("data-category")?.toLowerCase();
        const nombre = producto.getAttribute("data-nombre")?.toLowerCase();

        const coincideCategoria = categoria === filtroLower;
        const coincideNombre = nombre.includes(filtroLower);
        const mostrar = filtroLower === "all" || coincideCategoria || coincideNombre;

        producto.style.display = mostrar ? "block" : "none";

        if (mostrar) visibles++;
    });

    // Alinea si queda uno o pocos
    const contenedor = document.querySelector(".productos");
    if (visibles <= 2) {
        contenedor.classList.add("alinear-derecha");
    } else {
        contenedor.classList.remove("alinear-derecha");
    }
}


// Mostrar todos cuando el input está vacío
function mostrarTodosLosProductos() {
    const productos = document.querySelectorAll(".productos > div");
    productos.forEach((producto) => {
        producto.style.display = "block";
    });
}

function filtrarProductos(categoria) {
    const productos = document.querySelectorAll('.producto');
  
    productos.forEach(producto => {
      const cat = producto.getAttribute('data-category');
  
      if (categoria === 'All' || cat === categoria) {
        producto.style.display = 'block';
      } else {
        producto.style.display = 'none';
      }
    });
  }

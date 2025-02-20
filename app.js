// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Selección de elementos del html
const nombreTexto = document.getElementById("amigo");
const botonAñadir = document.querySelector(".button-add");
const botonSorteo = document.querySelector(".button-draw");
const listaNombres = document.getElementById("listaAmigos");
const resultadoSorteo = document.getElementById("resultado");

// Lista para almacenar los nombres
let amigos = [];

// Función para agregar un nombre a la lista
function agregarAmigo() {
    const nombre = nombreTexto.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Agregar el nombre a la lista de amigos
    amigos.push(nombre);

    // Crear un elemento de lista y añadirlo al html
    const itemLista = document.createElement("li");
    itemLista.textContent = nombre;
    listaNombres.appendChild(itemLista);

    // Limpiar el campo de texto
    nombreTexto.value = "";
    nombreTexto.focus();
}

// Función para realizar el sorteo
botonSorteo.addEventListener("click", () => {
    if (amigos.length === 0) {
        alert("La lista está vacía. Por favor, agrega nombres antes de realizar el sorteo.");
        return;
    }

    // Seleccionar un nombre aleatorio
    const sorteo = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[sorteo];

    // Mostrar el resultado en la página
    resultadoSorteo.innerHTML = `<li>El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
});

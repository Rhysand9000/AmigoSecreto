// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
  const inputAmigo = document.getElementById("amigo");
  const nombreAmigo = inputAmigo.value.trim(); // Obtener el valor del input y eliminar espacios extra

  // Validar que el campo no esté vacío
  if (nombreAmigo === "") {
    alert("Por favor, inserte un nombre.");
    return; // Detiene la ejecución de la función
  }

  // Validar que el nombre no esté duplicado
  if (amigos.includes(nombreAmigo)) {
    alert(`El nombre "${nombreAmigo}" ya está en la lista.`);
    return;
  }

  // Agregar el nombre al array de amigos
  amigos.push(nombreAmigo);

  // Limpiar el campo de entrada
  inputAmigo.value = "";

  // Actualizar la lista en el HTML
  actualizarLista();
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarLista() {
  const listaAmigos = document.getElementById("listaAmigos");

  // Limpiar la lista antes de actualizar
  listaAmigos.innerHTML = "";

  // Recorrer el array y agregar cada nombre a la lista
  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}

// Función para seleccionar un amigo aleatorio
function sortearAmigo() {
  // Validar que haya amigos en la lista
  if (amigos.length === 0) {
    alert("No hay amigos disponibles para sortear. Agrega al menos uno.");
    return;
  }

  // Generar un índice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre sorteado
  const amigoSorteado = amigos[indiceAleatorio];

  // Mostrar el resultado en el HTML
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<strong>Amigo sorteado: ${amigoSorteado}</strong>`;
}

// Array 
let amigos = [];

// Función  agregar un amigo
function agregarAmigo() {
  // Capturar el valor  de entrada
  let nombre = document.getElementById('amigo').value;

  // Validar que el campo no esté vacío
  if (nombre.trim() === "") {
    alert("Por favor, inserte el nombre del amigo invisible.");
    return;  // Terminar la función si el nombre está vacío
  }

  // Agregar el nombre al array 
  amigos.push(nombre);

  // Limpiar 
  document.getElementById('amigo').value = "";

  // Actualizar 
  actualizarLista();
}

// actualizar la lista de amigos en la página
function actualizarLista() {
  // Obtener el elemento de la lista
  let lista = document.getElementById('listaAmigos');

  // Limpiar la lista existente 
  lista.innerHTML = "";

  // Iterar sobre el arreglo amigos y agregar cada nombre como un <li>
  for (let i = 0; i < amigos.length; i++) {
    // Crear un nuevo <li> para cada amigo
    let li = document.createElement("li");
    li.textContent = amigos[i];  // Asignar el nombre al contenido del <li>
    
    // Agregar el <li> a la lista
    lista.appendChild(li);
  }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
  // Validar si hay amigos disponibles en el array
  if (amigos.length === 0) {
    alert("No hay amigos para sortear. Añade al menos un amigo.");
    return;
  }

  // Generar un índice aleatorio entre 0 y la longitud del array de amigos
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre del amigo sorteado
  let amigoSorteado = amigos[indiceAleatorio];

  // Mostrar el resultado en el elemento de resultado
  let resultadoLista = document.getElementById('resultado');
  resultadoLista.innerHTML = `<li>El amigo secreto sorteado es: <strong>${amigoSorteado}</strong></li>`;
}

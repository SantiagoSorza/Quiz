//todos los formularios
const formulario = document.forms["formulario"];

//Msg

const codigomsg = document.getElementById("codigomsg");
const codigosExistentes = [];

const modalmsg = document.getElementById("modalmsg");

//valiables
const codigoInp = formulario["codigoInp"];
const listaEstudiantes = document.getElementById("listaEstudiantes");



//Metodo

const cargarDatos = (dato) => {
  const row = document.createElement("tr");

  const buttonCeld = document.createElement("td");
  const button = document.createElement("button");
  button.textContent = "Eliminar";
  
  
  button.addEventListener('click', () => {
    row.remove();
    delete codigosExistentes[dato.codigo]; 
  });
  
  const codigoCeld = document.createElement("td");
  codigoCeld.textContent = dato.codigo;

  const nombreCeld = document.createElement("td");
  nombreCeld.textContent = dato.nombre;

  const nota1Celd = document.createElement("td");
  nota1Celd.textContent = dato.nota1;

  const nota2Celd = document.createElement("td");
  nota2Celd.textContent = dato.nota2;

  const nota3Celd = document.createElement("td");
  nota3Celd.textContent = dato.nota3;

  const nota4Celd = document.createElement("td");
  nota4Celd.textContent = dato.nota4;

  // Calcular la definitiva
  const definitiva = (parseFloat(dato.nota1) * 0.2) + (parseFloat(dato.nota2) * 0.2) + (parseFloat(dato.nota3) * 0.2) + (parseFloat(dato.nota4) * 0.4);
  const definitivaCeld = document.createElement('td');
  definitivaCeld.textContent = definitiva.toFixed(2);

  // Determinar si está aprobado
  const aprobacionCeld = document.createElement('td');
  aprobacionCeld.textContent = definitiva >= 3.0 ? 'Aprobado' : 'No Aprobado';

  buttonCeld.appendChild(button);
  row.appendChild(buttonCeld);
  row.appendChild(codigoCeld);
  row.appendChild(nombreCeld);
  row.appendChild(nota1Celd);
  row.appendChild(nota2Celd);
  row.appendChild(nota3Celd);
  row.appendChild(nota4Celd);
  row.appendChild(definitivaCeld);
  row.appendChild(aprobacionCeld);

  const tbody = estudiantes.getElementsByTagName("tbody")[0];
  tbody.appendChild(row);
};

// Evento para enviar el formulario
formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const nuevoCodigo = formulario["codigoInp"].value;

  // Verificar si el código ya existe
  if (codigosExistentes[nuevoCodigo]) {
      codigomsg.style.display = 'block';
      return; 
  }

  // Agregar el nuevo código al objeto
  codigosExistentes[nuevoCodigo] = true;

  const dato = {
      codigo: nuevoCodigo,
      nombre: formulario["nombreInp"].value,
      nota1: formulario["nota1Inp"].value,
      nota2: formulario["nota2Inp"].value,
      nota3: formulario["nota3Inp"].value,
      nota4: formulario["nota4Inp"].value,
  };

  cargarDatos(dato);
});

// Evento para cerrar el mensaje
document.getElementById("cerrarCodigomsg").addEventListener("click", () => {
  codigomsg.style.display = 'none';
});
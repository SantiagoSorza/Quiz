//todos los formularios
const formulario = document.forms["formulario"];

//Msg

const codigomsg = document.getElementById("codigomsg");
const modalmsg = document.getElementById("modalmsg");

//valiables
const codigoInp = formulario["codigoInp"];
const listaEstudiantes = document.getElementById("listaEstudiantes");



//Metodo

const cargarDatos = (dato) => {
  const row = document.createElement("tr");
  ////-------------
  const buttonCeld1 = document.createElement("td");
  buttonCeld1.textContent = dato.Button;
  const codigoCeld = document.createElement("td");
  codigoCeld.textContent = dato.Codigo;

  const nombreCeld = document.createElement("td");
  nombreCeld.textContent = dato.Nombre;

  const nota1Celd = document.createElement("td");
  nota1Celd.textContent = dato.nota1;

  const nota2Celd = document.createElement("td");
  nota2Celd.textContent = dato.nota2;

  const nota3Celd = document.createElement("td");
  nota3Celd.textContent = dato.nota3;

  const nota4Celd = document.createElement("td");
  nota4Celd.textContent = dato.nota4;
  ////-------------

 // Calcular la definitiva
 const definitiva = (parseFloat(dato.nota1) * 0.2) + (parseFloat(dato.nota2) * 0.2) + (parseFloat(dato.nota3) * 0.2) + (parseFloat(dato.nota4) * 0.4);
 const definitivaCeld = document.createElement('td');
 definitivaCeld.textContent = definitiva.toFixed(2);

 // Determinar si está aprobado
 const aprobacionCeld = document.createElement('td');
 aprobacionCeld.textContent = definitiva >= 3 ? 'Aprobado' : 'No Aprobado';

  row.appendChild(buttonCeld1);
  row.appendChild(codigoCeld);
  row.appendChild(nombreCeld);
  row.appendChild(nota1Celd);
  row.appendChild(nota2Celd);
  row.appendChild(nota3Celd);
  row.appendChild(nota4Celd);
  row.appendChild(definitivaCeld);
  row.appendChild(aprobacionCeld);

  const tbody = tabla.getElementsByTagName("tbody")[0];
  tbody.appendChild(row);
};
////
formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  


    const dato = {
      codigo: codigoInp.value,
      nombre: formulario["nombreInp"].value,
      nota1: formulario["nota1Inp"].value,
      nota2: formulario["nota2Inp"].value,
      nota3: formulario["nota3Inp"].value,
      nota4: formulario["nota4Inp"].value,
    }

    cargarDatos(dato);
  });


//todos los formularios
const formulario = document.forms["formulario"];



//Msg

const codigomsg = document.getElementById('codigomsg');
const modalmsg = document.getElementById('modalmsg');



//valiables
const listaEstudiantes = document.getElementById('listaEstudiantes');
const codigoInp = contactoForm['codigoInp'];
//Metodo





const cargarDatos = (datos)=>{
    const row = document.createElement('tr')
    ////-------------
    const codigoCeld = document.createElement('td');
    codigoCeld.textContent = datos.codigo;

    const nombreCeld = document.createElement('td');
    nombreCeld.textContent = datos.nombre;

    const nota1Celd = document.createElement('td');
    nota1Celd.textContent = datos.nota1;
    const nota2Celd = document.createElement('td');
    nota2Celd.textContent = datos.nota2;
    const nota3Celd = document.createElement('td');
    nota3Celd.textContent = datos.nota3;
    const nota4Celd = document.createElement('td');
    nota4Celd.textContent = datos.nota4;
     ////-------------
    

     btnCeld.appendChild(button)
     row.appendChild(codigoCeld)
     row.appendChild(nombreCeld)
     row.appendChild(nota1Celd)
     row.appendChild(nota2Celd)
     row.appendChild(nota3Celd)
     row.appendChild(nota4Celd)
}
////
formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const codigo = codigo.value
    if(validarNombre(codigo)){

        const dato ={
            Codigo: codigoInp.value,
            Nombre: contactoForm['nombreInp'].value,
            Nota1: contactoForm['nota1Inp'].value,
            Nota2: contactoForm['nota2Inp'].value,
            Nota3: contactoForm['nota3Inp'].value,
            Nota4: contactoForm['nota4Inp'].value,

        };
        cargarDatos(datos);
    }
})
codigoInp.addEventListener("keyup", () => { validarCodigo(codigoInp.value); });
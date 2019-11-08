let form = document.querySelector("#carta-a-santa");
let nombre = form.nombre.value;
let ciudad = form.ciudad.value;
let erroresM = {
    nombre: false,
    ciudad: false,
    "descripcion-regalo":false
}
let descripcion = form["descripcion-regalo"].value;

function validarNombre(nombre){
    if(nombre.length===0) return "Poco";
    if(nombre.length>=50) return "Mucho";
    const patt1 = /[0-9]|\s|[!@#$%^&*()+-,.?":{}|<>]/g;
    if(nombre.match(patt1)) return "Caracter Invalido";
    return '';
}

function validarCiudad(ciudad) {
    if(!ciudad) return "No hay ciudad"
    return ""
}

function validarDescripcionRegalo(descripcion) {
    if(!descripcion) return "No hay descripcion"
    if(descripcion.length>=250) return "Mucha descripcion"
    return ""
}

const submit = document.querySelector("#carta-a-santa");
function submitForm(e) {
    nombre = form.nombre.value;
    ciudad = form.ciudad.value;
    descripcion = form["descripcion-regalo"].value;
    let sinErrores = 0;
    let errorBox = document.querySelector("#errores");
    let errores = {
        nombre: validarNombre(nombre),
        ciudad: validarCiudad(ciudad),
        "descripcion-regalo":validarDescripcionRegalo(descripcion)
    }
    let keys = Object.keys(errores);
    keys.forEach(i=>{
        let resultadoErrores = errores[i];
        if(resultadoErrores){
            if(!erroresM[i]){
                const error = document.createElement("li");
                error.innerText = resultadoErrores;
                error.id = i;
                errorBox.appendChild(error);
                erroresM[i] = true;
            }
            form[i].classList.add("error");
        }else{
            form[i].classList.remove("error");
            erroresM[i]=false;
            const erroresM2 = errorBox.querySelectorAll("li");
            erroresM2.forEach(j=>{
                if(j.id == i){
                    j.remove();
                }
            });
            sinErrores++;
        }
        if(sinErrores==keys.length){
            document.querySelector("#exito").className = "";
            form.className = 'oculto';
            setTimeout(()=>{ window.location.href="wishlist.html" }, 5000);
        }
    });
    e.preventDefault();
}

submit.onsubmit = submitForm;
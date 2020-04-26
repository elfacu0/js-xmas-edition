let form = document.querySelector('#carta-a-santa');
let nombre = form.nombre.value;
let ciudad = form.ciudad.value;
let erroresPosibles = {
    nombre: false,
    ciudad: false,
    'descripcion-regalo': false,
};
let descripcion = form['descripcion-regalo'].value;

function validarNombre(nombre) {
    if (nombre.length === 0) return 'Ingrese un Nombre';
    if (nombre.length >= 50) return 'Nombre muy largo';
    const patt1 = /[0-9]|\s|[!@#$%^&*()+-,.?":{}|<>]/g;
    if (nombre.match(patt1)) return 'Caracter Invalido';
    return '';
}

function validarCiudad(ciudad) {
    if (!ciudad) return 'No hay ciudad';
    return '';
}

function validarDescripcionRegalo(descripcion) {
    if (!descripcion) return 'No hay descripcion';
    if (descripcion.length >= 250) return 'Mucha descripcion';
    return '';
}

const submit = document.querySelector('#carta-a-santa');
function submitForm(e) {
    e.preventDefault();
    nombre = form.nombre.value;
    ciudad = form.ciudad.value;
    descripcion = form['descripcion-regalo'].value;
    let sinErrores = true;
    let errorBox = document.querySelector('#errores');
    let errores = {
        nombre: validarNombre(nombre),
        ciudad: validarCiudad(ciudad),
        'descripcion-regalo': validarDescripcionRegalo(descripcion),
    };
    Object.keys(errores).forEach((key) => {
        let resultadoErrores = errores[key];
        if (resultadoErrores) {
            if (!erroresPosibles[key]) {
                const error = document.createElement('li');
                error.innerText = resultadoErrores;
                error.id = key;
                errorBox.appendChild(error);
                erroresPosibles[key] = true;
            }
            form[key].classList.add('error');
            sinErrores = false;
        } else {
            form[key].classList.remove('error');
            erroresPosibles[key] = false;
            const erroresMostrados = errorBox.querySelectorAll('li');
            erroresMostrados.forEach((j) => {
                if (j.id == key) {
                    j.remove();
                }
            });
        }
    });
    if (sinErrores) {
        document.querySelector('#exito').className = '';
        form.className = 'oculto';
        setTimeout(() => {
            window.location.href = 'wishlist.html';
        }, 5000);
    }
}

submit.onsubmit = submitForm;

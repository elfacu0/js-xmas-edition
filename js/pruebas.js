function probarValidarNombre() {
  nombre = form.nombre.value;
  console.assert(
    validarNombre(nombre) !== 'Poco', 'Validar nombre no validó que el nombre no sea vacío'
  );

  console.assert(
    validarNombre(nombre) !== 'Mucho', 'Validar nombre no validó que el nombre sea menor a 50 caracteres'
  );

  console.assert(validarNombre(nombre) !== "Caracter Invalido","No funciona el regex en validar nombre");
  console.assert (validarNombre(nombre) !== "" , "No hubo errores en validarNombre" )
}

function probarValidarciudad() {
    ciudad = form.ciudad.value;
    console.assert( validarCiudad(ciudad) !== "No hay ciudad",
    "Falló la comprobacion de ciudad");
    console.assert (validarCiudad(ciudad) !== "" , "No hubo errores En validarciudad" );
}

function probarValidardescripcion() {
    descripcion = form["descripcion-regalo"].value;
    console.assert(validarDescripcionRegalo(descripcion) !== "No hay descripcion",
    "Falló la comprobacion de descripcion nula");
    console.assert(validarDescripcionRegalo(descripcion) !== "Mucha descripcion",
    "Falló la comprobacion de descripcion para muchos caracteres");
    console.assert (validarDescripcionRegalo(descripcion) !== "" , "No hubo errores en validarDescripcion" );
}

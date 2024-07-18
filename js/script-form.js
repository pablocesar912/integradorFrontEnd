function validarFormulario() {
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const telefono = document.getElementById("telefono").value;
  const asunto = document.getElementById("asunto").value;
  const mensaje = document.getElementById("mensaje").value;
  const metodoContacto = document.getElementById("metodoContacto").value;
  const textoCaptcha = document.getElementById("textoCaptcha").value;
  const checkboxTerminos = document.getElementById("aceptoTerminos").checked;
  
  let valido = true; // variable bandera; su valor es true si todos los campos son válidos

  // Valida el nombre
  if (nombre === "") {
    alert("Por favor, ingrese su nombre completo.");
    valido = false;
  }

  // Valida el email
  if (email === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Por favor, ingrese una dirección de correo electrónico válida.");
    valido = false;
  }

  // Valida el teléfono
  if (telefono === "") {
    alert("Por favor, ingrese su número de teléfono.");
    valido = false;
  }

  // Valida el asunto
  if (asunto === "") {
    alert("Por favor, ingrese el asunto de su consulta.");
    valido = false;
  }

  // Valida el mensaje
  if (mensaje === "") {
    alert("Por favor, ingrese su mensaje.");
    valido = false;
  }

  // Valida que haya un método de contacto seleccionado
  if (metodoContacto === "") {
    alert("Por favor, seleccione un método de contacto preferido.");
    valido = false;
  }

  // Valida el texto del captcha
  if (textoCaptcha !== "PRNU") {
    alert("El texto ingresado en el captcha no es correcto.");
    valido = false;
  }

  // Valida que el usuario acepta los términos y condiciones
  if (!checkboxTerminos) {
    alert("Debe aceptar los términos y condiciones para continuar.");
    valido = false;
  }

  // Si el formulario está completo, muestra la alerta de envío exitoso
  if (valido) {
    alert("El formulario se envió correctamente.");
  }

  return valido; // devuelve false si algún campo está vacío
}

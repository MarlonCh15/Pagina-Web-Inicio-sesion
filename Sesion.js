
// --- Sistema de almacenamiento de usuarios ---

const form = document.getElementById("loginForm");
const inputCorreo = document.getElementById("correo");
const inputContrasena = document.getElementById("contrasena");
const mensaje = document.getElementById("mensaje");

// Obtener usuarios almacenados
function obtenerUsuarios() {
    try {
        return JSON.parse(localStorage.getItem("usuarios")) || [];
    } catch {
        return [];
    }
}

// Guardar usuarios en LocalStorage
function guardarUsuarios(usuarios) {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

// Registrar usuario
function registrarUsuario(correo, contrasena) {

    const usuarios = obtenerUsuarios();

    const nuevoUsuario = {
        id: Date.now().toString(),
        correo: correo,
        contrasena: contrasena,
        fecha: new Date().toLocaleString("es-PE")
    };

    usuarios.push(nuevoUsuario);

    guardarUsuarios(usuarios);
}

// Capturar información del formulario
form.addEventListener("submit", function(event) {

    event.preventDefault();

    const correo = inputCorreo.value.trim();
    const contrasena = inputContrasena.value;

    if (!correo || !contrasena) {
        mensaje.textContent = "Completa todos los campos.";
        return;
    }

    registrarUsuario(correo, contrasena);

    mensaje.textContent = "Información guardada correctamente.";

    form.reset();
});

// Consultar los registros almacenados
console.log("Usuarios almacenados:", obtenerUsuarios());
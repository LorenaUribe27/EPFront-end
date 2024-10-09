let datosLogin = [
    {
        nombre: "Jhon Olarte",
        clave: "Poli2024",
        rol: "Admin"
    },
    {
        nombre: "Lore Uribe",
        clave: "Poli2024*",   
        rol: "cliente"
    },
    {
        nombre: "Estudiante",
        clave: "Poli2024",   
        rol: "cliente"
    }
];

function validarLogin() {
    // Obtener los valores del formulario
    let correoInput = document.querySelector('input[name="ema"]').value;
    let claveInput = document.querySelector('input[name="cla"]').value;

    // Buscar el usuario en la base de datos simulada
    let usuario = datosLogin.find(user => user.nombre === correoInput && user.clave === claveInput);

    if (usuario) {
        // Si el usuario es Admin, mostrar el mensaje de bienvenida y redirigir
        if (usuario.rol === "Admin") {
            alert(`Bienvenido ${usuario.nombre}, estás en la vista de Administrador.`);
            window.location.href = "indexAdmin.html";
        } else if (usuario.rol === "cliente") {
            alert(`Bienvenido ${usuario.nombre}, estás en la vista de Cliente.`);
            window.location.href = "indexClient.html";
        }
    } else {
        // Mostrar mensaje de error si las credenciales no son correctas
        alert("Correo o contraseña incorrectos.");
    }
}

//NOMBRE
document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    let nombreInput = document.getElementById('nombre');
    let mensajeError = document.getElementById('nombre-error-message');

    if (nombreInput.value.trim() === '') {
        mensajeError.textContent = 'Requerido';
        mensajeError.style.display = 'block';
    } else {
        mensajeError.style.display = 'none';
    }
});

//CORREO
document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    let emailInput = document.getElementById('email');
    let mensajeError = document.getElementById('email-error-message');

    if (emailInput.value.trim() === '') {
        mensajeError.textContent = 'Requerido';
        mensajeError.style.display = 'block';
    } else {
        mensajeError.style.display = 'none';
    }
});

//CLAVE
document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let passwordInput = document.getElementById('password');
    let mensajeError = document.getElementById('password-error-message');

    if (passwordInput.value.trim() === '') {
        mensajeError.textContent = 'Requerido';
        mensajeError.style.display = 'block';
    } else if (passwordInput.value.length < 6) {
        mensajeError.textContent = 'Debe tener al menos 6 caracteres';
        mensajeError.style.display = 'block';
    } else {
        mensajeError.style.display = 'none';
    }
});

//CONFIRMACION DE CLAVE
document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let passwordInput = document.getElementById('password');
    let confirmInput = document.getElementById('confirmPassword');
    let mensajeError = document.getElementById('confirmPassword-error-message');

    if (confirmInput.value.trim() === '') {
        mensajeError.textContent = 'Requerido';
        mensajeError.style.display = 'block';
    } else if (passwordInput.value !== confirmInput.value) {
        mensajeError.textContent = 'Las claves deben coincidir';
        mensajeError.style.display = 'block';
    } else {
        mensajeError.style.display = 'none';
    }
});

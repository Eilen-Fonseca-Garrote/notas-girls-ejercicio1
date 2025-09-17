const notas = document.getElementById('notas');
const guardarBtn = document.getElementById('guardar');
const borrarBtn = document.getElementById('borrar');

function cargarNota() {
    const notaGuardada = localStorage.getItem('notaChica');
    if (notaGuardada) {
        notas.value = notaGuardada;
    }
}

guardarBtn.addEventListener('click', () => {
    localStorage.setItem('notaChica', notas.value);
    guardarBtn.textContent = "¡Guardado!";
    setTimeout(() => guardarBtn.textContent = "Guardar Nota", 1200);
});

borrarBtn.addEventListener('click', () => {
    notas.value = '';
    localStorage.removeItem('notaChica');
    borrarBtn.textContent = "¡Borrado!";
    setTimeout(() => borrarBtn.textContent = "Borrar Nota", 1200);
});

window.addEventListener('DOMContentLoaded', cargarNota);
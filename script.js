// 💡 Conectamos elementos
const inputTarea = document.getElementById('inputTarea');
const btnAgregar = document.getElementById('btnAgregar');
const lista = document.getElementById('listaTareas');
const alerta = document.getElementById('alertaExito');

// 🧠 Escuchamos el click
btnAgregar.addEventListener('click', (e) => {
  e.preventDefault();

  const texto = inputTarea.value.trim();
  if (texto !== '') {
    // 🎉 Creamos nueva tarea
    const nuevoLi = document.createElement('li');
    nuevoLi.className = 'list-group-item d-flex justify-content-between align-items-center';
    nuevoLi.innerHTML = `
      ${texto}
      <button class="btn btn-danger btn-sm">Eliminar</button>
    `;
    lista.appendChild(nuevoLi);
    inputTarea.value = '';

    // 🎊 Mostramos alerta celebratoria
    alerta.classList.remove('d-none');
    setTimeout(() => alerta.classList.add('d-none'), 2000);

    // 🗑️ Eliminar tarea
    nuevoLi.querySelector('button').addEventListener('click', () => {
      nuevoLi.remove();
    });
  }
});
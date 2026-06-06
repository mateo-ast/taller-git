function loadHTML(file, containerId) {
  fetch(file)
    .then(response => response.text())
    .then(html => {
      document.getElementById(containerId).innerHTML = html;
    })
    .catch(error => console.error('Error al cargar ' + file, error));
}

document.addEventListener('DOMContentLoaded', () => {
  loadHTML('cabecera.html', 'cabecera');
  loadHTML('lunes.html', 'content-lunes');
  loadHTML('martes.html', 'content-martes');
});

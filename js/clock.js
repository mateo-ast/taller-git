function actualizarReloj() {
  const ahora = new Date();
  
  const horas = String(ahora.getHours()).padStart(2, '0');
  const minutos = String(ahora.getMinutes()).padStart(2, '0');
  const segundos = String(ahora.getSeconds()).padStart(2, '0');
  
  const horaFormateada = `${horas}:${minutos}:${segundos}`;
  
  const elementoReloj = document.getElementById('live-clock');
  if (elementoReloj) {
    elementoReloj.textContent = horaFormateada;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  actualizarReloj();
  setInterval(actualizarReloj, 1000);
});

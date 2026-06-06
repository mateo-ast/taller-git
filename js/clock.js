function actualizarReloj() {
  const ahora = new date();
  
  const horas = String(ahora.getHours()).padStart(2, '0');
  const minutos = String(ahora.getMinutes()).padStart(2, '0');
  const segundos = String(ahora.getSecond()).padStart(2, '0');
  
  const horaFormateada = `${horas}:${minutos}:${segundos}`;
  
  const elementoReloj = document.getElementByID('live-clock');
  if (elementoReloj) {
    elementoReloj.textContent = horaFormateada;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  actualizarReloj();
  setInterval(actualizarReloj(), 1000);
});

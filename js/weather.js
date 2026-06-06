async function obtenerClima() {
  const latitud = -33.67;
  const longitud = -65.46;
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitud}&longitude=${longitud}&current_weather=true`;

  const elementoTemp = document.getElementById('weather-temp');
  const elementoIcono = document.getElementById('weather-icon');

  try {
    const respuesta = await fetch(url);
    if (!respuesta.ok) throw new Error('Error en la petición');

    const datos = await respuesta.json();
    const temperatura = datos.current_weather.temperature;
    const codigoClima = datos.current_weather.weathercode;

    if (elementoTemp) {
      elementoTemp.textContent = `${temperatura}°C`;
    }

    if (elementoIcono) {
      let icono = '🌡️';
      if (codigoClima === 0) icono = '☀️';
      else if (codigoClima > 0 && codigoClima <= 3) icono = '⛅';
      else if (codigoClima >= 45 && codigoClima <= 48) icono = '🌫️';
      else if (codigoClima >= 51 && codigoClima <= 67) icono = '🌧️';
      else if (codigoClima >= 71 && codigoClima <= 77) icono = '❄️';
      else if (codigoClima >= 95) icono = '⛈️';

      elementoIcono.textContent = icono;
    }

  } catch (error) {
    console.error("No se pudo obtener el clima:", error);
    if (elementoTemp) elementoTemp.textContent = "N/A";
    if (elementoIcono) elementoIcono.textContent = '⚠️';
  }
}

document.addEventListener('DOMContentLoaded', obtenerClima);

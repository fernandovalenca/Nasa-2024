function checkDate(dateStr) {
  const inputDate = new Date(dateStr);
  const today = new Date();

  // Normalizando a hora para comparar apenas o dia (desconsidera horas/minutos/segundos)
  today.setHours(0, 0, 0, 0);
  inputDate.setHours(0, 0, 0, 0);

  // Calculando a diferença em milissegundos e convertendo para dias
  const diffTime = inputDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0 || diffDays < 0) {
    return "Today";
  } else if (diffDays > 0) {
    return diffDays;
  }
}

function fahrenheitToCelsius(fahrenheit) {
  const celsius = (fahrenheit - 32) * 5 / 9;
  return celsius.toFixed(2); // Limita a 2 casas decimais
}


function filter_periods(periodes) {

  let periodo = []
  periodes.forEach(element => {
    periodo.push({
      time: checkDate(element.startTime),
      temperature: fahrenheitToCelsius(element.temperature),
      windSpeed: filter_air(element.windSpeed)
    })
  });
  return periodo;
}


function filter_air(air) {
  // Usa expressão regular para encontrar todos os números na string
  const numbers = air.match(/\d+/g);

  // Se não houver números, retorne null ou outro valor
  if (!numbers) {
    return null;
  }

  // Converte os números em formato de array numérico
  const numericValues = numbers.map(Number);

  // Se houver dois números (exemplo: "2 to 8 mph"), some-os
  if (numericValues.length > 1) {
    return numericValues[0] + numericValues[1];
  }

  // Se houver apenas um número, retorne esse número
  return numericValues[0];
}


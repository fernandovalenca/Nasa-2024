geolocation()
    .then(() => {
        main();  // Só será chamado após as coordenadas serem obtidas
    })


async function main() {


    try {
        const cityData = await get_values(96, 70);
        let cityDataJson = await cityData.json();





        console.log(cityDataJson.properties.periods)

        filter_periods(cityDataJson.properties.periods)

    } catch (error) {
        console.error("Erro ao obter dados da cidade:", error);
    }
}


function filter_periods(periodes) {

    let periodo = []
    periodes.forEach(element => {
        periodo.push({
            time: checkDate(element.startTime),
            temperature: fahrenheitToCelsius(element.temperature),
            windSpeed: ""

            
        })

        



    });

}

function checkDate(dateStr) {
    const inputDate = new Date(dateStr);
    const today = new Date();
  
    // Normalizando a hora para comparar apenas o dia (desconsidera horas/minutos/segundos)
    today.setHours(0, 0, 0, 0);
    inputDate.setHours(0, 0, 0, 0);
  
    // Calculando a diferença em milissegundos e convertendo para dias
    const diffTime = inputDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
    if (diffDays === 0) {
      return "Today";
    } else if (diffDays > 0) {
      return diffDays;
    } 
  }
  
  function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5 / 9;
    return celsius.toFixed(2); // Limita a 2 casas decimais
  }
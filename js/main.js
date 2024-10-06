// geolocation()
//     .then(() => {
//         main();  // Só será chamado após as coordenadas serem obtidas
//     })

async function main() {


    try {
        const cityData = await get_values(96, 70);
        let cityDataJson = await cityData.json();

        let periods= filter_periods(cityDataJson.properties.periods)

        console.log(periods)
        console.log( await get_temp_media(periods));

    } catch (error) {
        console.error("Erro ao obter dados da cidade:", error);
    }
}


 main()


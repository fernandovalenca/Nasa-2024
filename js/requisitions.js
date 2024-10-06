


async function get_values(latitude, longitude) {
    const apiUrl = `https://api.weather.gov/gridpoints/LWX/${latitude},${longitude}/forecast`;
    console.log(apiUrl)
    try {
        const response = await fetch( apiUrl);

        // Verifica se a resposta foi bem-sucedida
        if (!response.ok) {
            throw new Error(`Erro: ${response.status} - ${response.statusText}`);
        }

        return response; 
    } catch (error) {
        console.error('Erro ao buscar a cidade:', error);
        throw error; // Lança o erro para ser tratado em outro lugar, se necessário
    }

}

// async function get_forecast(id) {
//     const apiUrl = `api/findForecast.php?id=${id}`;

//     try {
//         const response = await fetch(apiUrl);

//         // Verifica se a resposta foi bem-sucedida
//         if (!response.ok) {
//             throw new Error(`Erro: ${response.status} - ${response.statusText}`);
//         }

//         // Retorna a resposta diretamente
//         return response; // Você pode retornar diretamente a resposta ou o que precisar dela
//     } catch (error) {
//         console.error('Erro ao buscar a cidade:', error);
//         throw error; // Lança o erro para ser tratado em outro lugar, se necessário
//     }
// }
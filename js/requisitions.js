


async function get_values(latitude, longitude) {
    const apiUrl = `https://api.weather.gov/gridpoints/LWX/${latitude},${longitude}/forecast`;
    try {
        const response = await fetch( apiUrl);

        // Verifica se a resposta foi bem-sucedida
        if (!response.ok) {
            throw new Error(`Erro: ${response.status} - ${response.statusText}`);
        }

        return response; 
    } catch (error) {
        throw error; // Lança o erro para ser tratado em outro lugar, se necessário
    }

}

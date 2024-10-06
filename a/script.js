// Função para criar e exibir os cards
function exibirCards(dadosDeCultivo) {
    const container = document.getElementById('cards-container');

    for (const cultivo in dadosDeCultivo) {
        const card = document.createElement('div');
        card.classList.add('card');

        const titulo = document.createElement('h2');
        titulo.textContent = cultivo;
        card.appendChild(titulo);

        const detalhes = dadosDeCultivo[cultivo];
        for (const detalhe in detalhes) {
            const paragrafo = document.createElement('p');
            paragrafo.textContent = `${detalhe}: ${detalhes[detalhe]}`;
            card.appendChild(paragrafo);
        }

        container.appendChild(card);
    }
}

// Carregar dados do arquivo JSON
fetch('data.json')
    .then(response => response.json())
    .then(dadosDeCultivo => {
        exibirCards(dadosDeCultivo);
    })
    .catch(error => {
        console.error('Erro ao carregar os dados:', error);
    });

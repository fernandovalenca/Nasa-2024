let latitude;
let longitude;

function geolocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                latitude = position.coords.latitude;  // Atribui às variáveis globais
                longitude = position.coords.longitude;
                resolve();  // Resolve a Promise quando as coordenadas forem definidas
            },
            function (error) {
                reject(error);  // Rejeita a Promise se houver um erro
            }
        );
    });
}

geolocation()
    .then(() => {
        run();  // Só será chamado após as coordenadas serem obtidas
    })
    .catch((error) => {
        console.error("Error getting location: ", error);
    });

function run() {
    console.log("Latitude inside run(): " + latitude);
    console.log("Longitude inside run(): " + longitude);
}




async function get_data(){
    let response = await fetch("data.json");
    
    return await response.json();
}




async function get_temp_media(periods) {
    let sum = 0;
    
    periods.forEach(element => {
        sum += parseFloat(element.temperature)
    });


    return sum / (periods.length);
}
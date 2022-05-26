document.getElementById("date").innerHTML = Date();

function toggleFullScreen() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||
        (!document.mozFullScreen && !document.webkitIsFullScreen)) {
        if (document.documentElement.requestFullScreen) {
            document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
            document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
}

fetch("https://api.weatherapi.com/v1/current.json?key=647a6c33c4974b73ad9154932211412&q=sao paulo&aqi=no").then(function(response) {
    return response.json()
}).then(function(data) {
    console.log(data);
    var temp = String(data.current.temp_c) + "º";
    var icon = data.current.condition.icon
    var text = data.current.condition.text
    var state = data.location.name
        // console.log(state);
    var img = document.querySelector('#icone')
    img.src = icon
    var tempo = document.querySelector('#temp')
    tempo.innerText = temp
    var estado = document.querySelector('#state')
    estado.innerText = state

    console.log(img)
})
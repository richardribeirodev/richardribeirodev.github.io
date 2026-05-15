let alertPlayed = false;

function playAlertAudio(){
    var agentAlertAudio = new Audio('./audio/agentAlertChamadaEncerrada.mp3');
    setTimeout(function(){
        agentAlertAudio.play();
    }, 3000)
}

setInterval(() => {
    const elementStateNow = document.querySelector("text-component.cc-editable");

    elementStateNow.forEach((el, index) => {
        console.log(index, el.innerText);
    });

    if (elementStateNow) {
        const stateNow = elementStateNow.innerText.trim();
        if (stateNow.toLowerCase() == "disconnected"){
            if (!alertPlayed){
                alertPlayed = true;
                playAlertAudio();
            }
        } else {
            alertPlayed = false;
        }
    }
}, 1000);

// a notification triggers when the user switches to another tab.
//document.addEventListener('visibilitychange', function() {
//    if (document.visibilityState === 'hidden') {
//        sendNotification();
//    }
//});
var timer;

function arrayIsEqual(arr1,arr2) {
    let equal = true;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            equal = false;
            break;
        }
    }
    return equal;
}

function start() {
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
    document.getElementById("cancelButton").disabled = true;

    timer = setTimeout(update,1000);
}

function update() {
    let hours = parseInt(document.getElementById("hours").value);
    let minutes = parseInt(document.getElementById("minutes").value);
    let seconds = parseInt(document.getElementById("seconds").value);

    seconds--;
    if (arrayIsEqual([hours,minutes,seconds],[0,0,-1])) {
        stop();
        cancel();
        alert("Time is up!");
    }
    else {
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }

        document.getElementById("hours").value = hours;
        document.getElementById("minutes").value = minutes;
        document.getElementById("seconds").value = seconds;

        timer = setTimeout(update,1000);
    }

}

function stop() {
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
    document.getElementById("cancelButton").disabled = false;

    clearTimeout(timer);
}

function cancel() {
    document.getElementById("startButton").disabled = false;
    document.getElementById("cancelButton").disabled = true;

    document.getElementById("hours").value = 0;
    document.getElementById("minutes").value = 0;
    document.getElementById("seconds").value = 0;
}
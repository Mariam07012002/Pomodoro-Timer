let workTime = 25; // Initial work time in minutes
let breakTime = 5; // Initial break time in minutes
let timer;
let isWorking = true;

function updateTimerDisplay(minutes, seconds) {
    document.getElementById("time").innerText = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function startTimer() {
    let totalTime = isWorking ? workTime * 60 : breakTime * 60;
    let minutes, seconds;

    timer = setInterval(function () {
        minutes = Math.floor(totalTime / 60);
        seconds = totalTime % 60;

        updateTimerDisplay(minutes, seconds);

        if (totalTime <= 0) {
            clearInterval(timer);
            isWorking = !isWorking;
            document.getElementById("status").innerText = isWorking ? "Work" : "Break";
            startTimer();
        }

        totalTime--;
    }, 1000);
}

document.getElementById("work-time").addEventListener("change", function () {
    workTime = parseInt(this.value);
    updateTimerDisplay(workTime, 0);
});

document.getElementById("break-time").addEventListener("change", function () {
    breakTime = parseInt(this.value);
});

document.getElementById("start").addEventListener("click", startTimer);

document.getElementById("pause").addEventListener("click", function () {
    clearInterval(timer);
});

document.getElementById("reset").addEventListener("click", function () {
    clearInterval(timer);
    isWorking = true;
    document.getElementById("status").innerText = "Work";
    updateTimerDisplay(workTime, 0);
});

// Initial display
updateTimerDisplay(workTime, 0);

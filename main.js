window.addEventListener('DOMContentLoaded', main);

function main() {
    startClock();
    setInterval(startClock, 1000);

    showDate();
}

function startClock() {
    //hämtar klockdiven
    const clockElement = document.getElementById("clock");
    //sätter textcontent på den, alltså tiden just nu i text
    clockElement.textContent = new Date().toLocaleTimeString();
}

function showDate() {
    const getDateElement = document.querySelector("#date");

    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    const date = new Date().toLocaleDateString(undefined, options);

    getDateElement.textContent = date;
}

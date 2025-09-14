let updateClock =  () => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes().toString().padStart(2,0);
    let seconds = date.getSeconds().toString().padStart(2,0);
    const meridian = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2,0);

    let timeString = `${hours} : ${minutes} : ${seconds} ${meridian}`;
    document.getElementById("clock").textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);


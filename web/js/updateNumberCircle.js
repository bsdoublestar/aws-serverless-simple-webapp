function isUpdated() {
    var storedFlag = localStorage.getItem("ridesUpdated");
    return (storedFlag === "1");
}

function numberRidesDisplayed() {
    var numberRidesDisplayed = sessionStorage.getItem("numberRidesDisplayed");
    if (numberRidesDisplayed == null) return 0; // null or undefined
    return parseInt(numberRidesDisplayed);
}

function readRidesFromStore() {
    var ridesInStore = localStorage.getItem("rides");
    if (ridesInStore === "undefined") return {};
    return JSON.parse(ridesInStore);
}

function diffInDisplayedRides() {
    var a = readRidesFromStore().length;
    var b = numberRidesDisplayed();
    var c = (a - b) !== 0;
    return c;
}

function updateNumberCircle() {
    var numberCircle = document.getElementById("numberCircle");
    var a = isUpdated();
    var b = diffInDisplayedRides();
    if (a || b) {
        numberCircle.style.display = "block";
        var x = readRidesFromStore().length;
        var y = numberRidesDisplayed();
        numberCircle.innerHTML = Math.abs(x-y);
    }
    else {
        numberCircle.style.display = "none";
    }
}
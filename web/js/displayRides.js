function displayRides(onloadCall=false) {  
    if (!(isUpdated() || onloadCall || diffInDisplayedRides())) {
      return;
    }
    var rides = readRidesFromStore();
    var block = "";
    var item = {};
    for (item of rides) {
        block += item.RideId.S + "<br>";            
    }
    document.getElementById("ridesTableBodyDiv").innerHTML = block;
    sessionStorage.setItem("numberRidesDisplayed",rides.length);
    localStorage.setItem("ridesUpdated",0);
    updateNumberCircle();
  }
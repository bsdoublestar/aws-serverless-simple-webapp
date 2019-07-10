function displayRides(onloadCall=false) {  
    if (!(isUpdated() || onloadCall || diffInDisplayedRides())) {
      return;
    }
    var rides = readRidesFromStore();
    if (rides !== null) {
      var block = "";
      var item = {};
      for (item of rides) {
          block += item.RideId.S + "<br>";            
      }
      document.getElementById("ridesTableBodyDiv").innerHTML = block;
      sessionStorage.setItem("numberRidesDisplayed",rides.length);
    }
    else {
      sessionStorage.setItem("numberRidesDisplayed",0);
    }
    localStorage.setItem("ridesUpdated",0);
    updateNumberCircle();
  }
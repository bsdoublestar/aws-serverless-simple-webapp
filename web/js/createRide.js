function createRide() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var json = JSON.parse(this.responseText);
          document.getElementById("rideCreatedFeedbackDiv").innerHTML = json.message;
      }
    };
    xhttp.open("POST", "https://4mmuolcjva.execute-api.eu-central-1.amazonaws.com/DEV/api/v1/rides", true);
    xhttp.send();
  }
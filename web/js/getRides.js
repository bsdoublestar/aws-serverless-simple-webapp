function getRides() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var headers = this.getAllResponseHeaders();
        var json = JSON.parse(this.responseText);
        var block = "";
        var item;
        var itemJson = "";
        for (item of json.Items) {
            itemJson = JSON.stringify(item);
            block += item.RideId.S + "<br>";            
        }
        document.getElementById("ridesTableBodyDiv").innerHTML = block;
      }
    };
    xhttp.open("GET", "https://4mmuolcjva.execute-api.eu-central-1.amazonaws.com/DEV/api/v1/rides", true);
    xhttp.send();
  }
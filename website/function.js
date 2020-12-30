    fetch("https://ipinfo.io/json")
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        document.querySelector("#ipText").innerHTML = myJson.ip;
      })
      .catch(function (error) {
        console.log("Error: " + error);
      });
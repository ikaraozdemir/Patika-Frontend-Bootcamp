function setName() {
    let name = document.getElementById("name").value;
    if (name.trim() !== "") {
      document.getElementById("myName").textContent = name;
      document.getElementById("nameForm").style.display = "none";
      document.getElementById("welcomeMessage").style.display = "block";
      showTime();
      return false;
    }
    return false; 
  }
  
  function showTime() {
    let clockElement = document.getElementById("myClock");
    if (clockElement) {
      let date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
  
      clockElement.textContent =
        (hours < 10 ? "0" : "") + hours
         + ":" +
        (minutes < 10 ? "0" : "") + minutes
        + ":" +
        (seconds < 10 ? "0" : "") + seconds
        + " " +
        (day < 10 ? "0" : "") + day
        + "/" +
        (month < 10 ? "0" : "") + month
        + "/" + year;
  
      setTimeout(showTime, 1000);
    }
  }
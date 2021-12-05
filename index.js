function loadpage(){
  const http = new XMLHttpRequest();
  http.onload = function(){
    document.getElementById("content").innerHTML =
      this.responseText;
  }
  http.open("GET", "home.xml");
  http.send();
}
document.body.onload = loadpage()

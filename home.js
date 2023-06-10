const btnClick = document.querySelector(".btn");

btnClick.addEventListener("click" , ()=> {
    var http = new XMLHttpRequest();
    http.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // Response received successfully
        console.log(this.responseText);
      }
    };
    http.open("GET", "index.php", true);
    http.send();
})


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    alert(this.responseText);
  }
};
xhttp.open("POST", "https://vietteltelecom.vn/api/get-info-user", true);
xhttp.send();
      

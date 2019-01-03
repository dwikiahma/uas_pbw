
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xhttp.open("GET", "../ajax/wisata.xml", true);
  xhttp.send();

  //console.trace();

}

function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>NO</th><th>TEMPAT WISATA</th></tr>";
  var x = xmlDoc.getElementsByTagName("profile");
  for (i = 0; i <x.length; i++) {
    table += "<tr><td>" +
    x[i].getElementsByTagName("no")[0].childNodes[0].nodeValue +
    "</center></td><td>" +
    x[i].getElementsByTagName("nama")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("tampil").innerHTML = table;
}

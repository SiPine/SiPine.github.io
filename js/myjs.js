function ClickFunc(){
    window.alert(Date());
  }

function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
   xmlhttp.onreadystatechange =  function() {
     if (this.readyState == 4 && this.status == 200) {
       myFunction(this);
      }
   };
   xmlhttp.open("GET", "/xml/songs.xml", true);
    xmlhttp.send();
 }

 function myFunction(xml) {
   var i;
    var xmlDoc = xml.responseXML;
   var table="<tr><th>曲名</th><th>リンク</th></tr>";
    var x = xmlDoc.getElementsByTagName("TRACK");
   for (i = 0; i <x.length;  i++) { 
     table += "<tr><td>" +
     x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue  +
     "</td><td>" +
     '<button type = "button" onclick="clearFunc('+ "'" + x[i].getElementsByTagName("VIDEO")[0].childNodes[0].nodeValue +"'" +')">video</button>'
     "</td></tr>";
   }
    document.getElementById("demo1").innerHTML = table;
 }

 function clearFunc (metLink){
  document.getElementById("metv").innerHTML = '<iframe id="ytplayer" type="text/html" width="640" height="360" ' +
  'src="https://www.youtube.com/embed/' + metLink+ '?autoplay=1"' +
  'frameborder="0">'+
  '</iframe>';
}
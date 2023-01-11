
document.getElementById('documenter').innerHTML="Hoşgeldin!"+""+prompt()


function tarihSaat(){
    var date = new Date().toLocaleString('tr-TR'); // tarih saati al
    document.getElementById("zaman").innerHTML = date; // zaman id'li elemente yazdır

}
setInterval(tarihSaat,1000);


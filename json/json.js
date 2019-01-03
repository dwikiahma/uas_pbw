
var myJSON = '{ "n1":"Gunung Bromo", "n2":"Kawah Ijen", "n3":"Jatim Park", "n4":"Pantai Klayar", "n5":"Gili Labak",
                "n6":"Taman Nasional Baluran", "n7":"Candi Penataran", "n8":"Gua Gong", "n9":"Pantai Plengkung", "n10":"Air Terjun Madakaripura" }';
            
var myObj = JSON.parse(myJSON);

document.getElementById("tempatwisata1").innerHTML = myObj.n1;
document.getElementById("tempatwisata2").innerHTML = myObj.n2;
document.getElementById("tempatwisata3").innerHTML = myObj.n3;
document.getElementById("tempatwisata4").innerHTML = myObj.n4;
document.getElementById("tempatwisata5").innerHTML = myObj.n5;
document.getElementById("tempatwisata6").innerHTML = myObj.n6;
document.getElementById("tempatwisata7").innerHTML = myObj.n7;
document.getElementById("tempatwisata8").innerHTML = myObj.n8;
document.getElementById("tempatwisata9").innerHTML = myObj.n9;
document.getElementById("tempatwisata10").innerHTML = myObj.n10;
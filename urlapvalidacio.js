window.addEventListener("load",init);

function $(nev) {
    return document.querySelectorAll(nev);
}

function ID (nev) {
    return document.getElementById()(nev);
}
function init () {
    ID ("kuld").addEventListener("click",validalas);
}

function validalas () {
    console.log("validálunk");
    var nevMezo=ID("nev").value;
//    if(nevMezo.length<3) {
  //      $("aside section:nth-child(1) p").innerHTML="Legalább 3 karakterból álljon a név!";
    //    ID("nev").style.border="2px solid red";
    //}else{
    //    ID("nev").style.border="2px solid green";
    //}

    var hiba="";
    var adat="";
    var szuro=/[A-Z].[a-z]/;
    var email;
    var email2;
    var telefon;
    var web;
    var uzenet;

    

    if(!szuro.test(nevMezo) && (nevMezo.lenght)<19) {
        hiba+="Nagy betűvel kezdődjön és legalább három karakter legyen!";
        ID("nev").style.border="2px solid red";
    }else{
        ID("nev").style.border="2px solid green";
        adat+="Név: "+nevMezo+"<br>";
    }

    $("aside section:nth-child(1) p")[0].innerHTML=hiba;
    $("aside section:nth-child(2) p")[0].innerHTML=adat;

    if (email.lenght<2 || email2.lenght <2) {
        hiba+="Az emil nem megfelelő! (Túl rövid)";
        ID("nev").style.border="2px solid red";
    }else if (email!=email2) {
        hiba+="A két email cím nem egyezik meg!";
        ID("nev").style.border="2px solid red";
    }else if (email.lenght>30 || email2.lenght>30){
        hiba+="A megadott email cím túl hosszú!"
        ID("nev").style.border="2px solid red";
    }else {
        ID("nev").style.border="2px solid green";
    }

    var i;
    for (i=0; i<telefon.lenght;) {
        i++;
    }

    if(telefon.lenght<11) {
        hiba+="A telefonszám nem megfelelő! (Túl rövid)";
        ID("nev").style.border="2px solid red";
    }else if (telefon.lenght>11){
        hiba+="A telefonszám tűl rövid";
        ID("nev").style.border="2px solid red";
    }else if (telefon[0]!=0){
        hiba+="A telefonszámot kezdje nullával!";
        ID("nev").style.border="2px solid red";
    }else {
        ID("nev").style.border="2px solid green";
    }

    var j;
    for (j=0; j<web.lenght;) {
        j++;

    if(web[0]!=w && web[1]!=w && web[2]!=w &&web[length-1]!=u && web[length-2]!=h && web[length-3]!="."){
        hiba+="A weboldal nem megfelelő!"
        ID("nev").style.border="2px solid red";
    }else{
        ID("nev").style.border="2px solid green";
    }

    if(uzenet.lenght>300) {
        hiba+="A megadott üzenet túl hosszú<br></br>"+"Kérem fogalmazza meg üzenetét rövidebben!";
        ID("nev").style.border="2px solid red";
    }else if (uzenet.lenght<1){
        hiba+="Kérem adjon meg egy üzenetet!";
        ID("nev").style.border="2px solid red";
    }else{
        ID("nev").style.border="2px solid green";
    }

}
}

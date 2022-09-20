function gombKatt(){
    let suly = parseFloat(document.getElementById('suly').value);
    let magassag = parseFloat(document.getElementById('magassag').value);
    let bmiErtek = suly / (magassag/100)**2;
    document.getElementById("bmiertek").innerHTML = "<b>AZ ÖN BMI ÉRTÉKE: </b>" + bmiErtek.toFixed(2);

    var element = document.getElementById("sovany");
    element.classList.remove("narancs");
    element = document.getElementById("normal");
    element.classList.remove("narancs");
    element = document.getElementById("tulsuly");
    element.classList.remove("narancs");
    element = document.getElementById("elsofok");
    element.classList.remove("narancs");
    element = document.getElementById("masodikfok");
    element.classList.remove("narancs");
    element = document.getElementById("harmadikfok");
    element.classList.remove("narancs");

    if(bmiErtek.toFixed(2)<=18.5){
        element = document.getElementById("sovany");
        element.classList.add("narancs");
    }else if(bmiErtek.toFixed(2)<=24.9){
        element = document.getElementById("normal");
        element.classList.add("narancs");
    }else if(bmiErtek.toFixed(2)<=29.9){
        element = document.getElementById("tulsuly");
        element.classList.add("narancs");
    }else if(bmiErtek.toFixed(2)<=34.9){
        element = document.getElementById("elsofok");
        element.classList.add("narancs");
    }else if(bmiErtek.toFixed(2)<=39.9){
        element = document.getElementById("masodikfok");
        element.classList.add("narancs");
    }else{
        element = document.getElementById("harmadikfok");
        element.classList.add("narancs");
    }

    let also = parseFloat((18.5*(magassag/100)**2).toFixed(1));
    let felso = parseFloat((24.9*((magassag/100)**2)).toFixed(1));
    let atlag = parseFloat(((also + felso)/2));
    document.getElementById("idealis").innerHTML = "<b>AZ IDEÁLIS TESTTÖMEGE: </b>" + atlag + " kg";
    document.getElementById("szelso").innerHTML = also + " - " + felso + " kg";
}


function init(){
    document.getElementById('szamitas').addEventListener('click', gombKatt);
}

document.addEventListener('DOMContentLoaded', init);


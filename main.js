function gombKatt(){
    let suly = parseFloat(document.getElementById('suly').value);
    let magassag = parseFloat(document.getElementById('magassag').value);
    let bmiErtek = suly / (magassag/100)**2;
    document.getElementById("bmiertek").innerHTML = "AZ ÖN BMI ÉRTÉKE: " + bmiErtek.toFixed(2);

    var element = document.getElementById("sovany");
    element.classList.remove("narancs");
    var element = document.getElementById("normal");
    element.classList.remove("narancs");
    var element = document.getElementById("tulsuly");
    element.classList.remove("narancs");
    var element = document.getElementById("elsofok");
    element.classList.remove("narancs");
    var element = document.getElementById("masodikfok");
    element.classList.remove("narancs");
    var element = document.getElementById("harmadikfok");
    element.classList.remove("narancs");

    if(bmiErtek.toFixed(2)<=18.5){
        var element = document.getElementById("sovany");
        element.classList.add("narancs");
    }else if(bmiErtek.toFixed(2)<=24.9){
        var element = document.getElementById("normal");
        element.classList.add("narancs");
    }else if(bmiErtek.toFixed(2)<=29.9){
        var element = document.getElementById("tulsuly");
        element.classList.add("narancs");
    }else if(bmiErtek.toFixed(2)<=34.9){
        var element = document.getElementById("elsofok");
        element.classList.add("narancs");
    }else if(bmiErtek.toFixed(2)<=39.9){
        var element = document.getElementById("masodikfok");
        element.classList.add("narancs");
    }else{
        var element = document.getElementById("harmadikfok");
        element.classList.add("narancs");
    }
}


function init(){
    document.getElementById('szamitas').addEventListener('click', gombKatt);
}

document.addEventListener('DOMContentLoaded', init);


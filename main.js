function gombKatt(){
    let suly = parseFloat(document.getElementById('suly').value);
    let magassag = parseFloat(document.getElementById('magassag').value);
    document.getElementById('bmiertek').value = suly / (magassag/100)**2;     
}


function init(){
    document.getElementById('magassag').addEventListener('change', bmi);
    document.getElementById('suly').addEventListener('change', bmi);
}

document.addEventListener('DOMContentLoaded', init);


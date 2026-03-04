const rezultat = document.getElementById('rezultat');
document.getElementById('izvedi').addEventListener('click',() => {

const a = document.getElementById('a').value;
const b = document.getElementById('b').value;

if(!provjeriIme(a) || !provjeriIme(b)){
    rezultat.innerHTML = "Unesite ispravna imena"; 
    return; 
}

const stringBrojeva = brojPonavljanja(a, b);
const rezultatKalkulatora = kalkulator(stringBrojeva);
rezultat.innerHTML = rezultatKalkulatora + '%';

});

function provjeriIme(ime) {
    ime = ime.trim().toLowerCase();

    if (ime.length < 2) {
        return false;
    }
    
    for (let i = 0; i < ime.length; i++) {
        if(ime[i] === 'č' || ime[i] === 'ć' || ime[i] === 'š' || ime[i] === 'ž' || ime[i] === 'đ' ){ 
            continue;
        }
        if(ime[i] < 'a' || ime[i] > 'z'){
            return false;
        }
    }

    return true;
}


function brojPonavljanja(prvoIme, drugoIme){
    let zajednickiString = prvoIme.toLowerCase() + drugoIme.toLowerCase();
    let brojevi = "";

    for(let i = 0; i < zajednickiString.length; i++){
        let brojac = 0;

        for(let j = 0; j < zajednickiString.length; j++){
            if(zajednickiString[i] === zajednickiString[j]){
                brojac++;
            }
        }

        brojevi += String(brojac);
    }
    return brojevi;
}

function kalkulator(s){
    if(s.length === 1 || s.length === 2 || (s.length === 3 && s[0] === '1' && s[1] === '0' && s[2] === '0')){
        return s;
    }

    let noviString = "";
    let j = s.length-1;
    let zbroj = 0;

    for(let i = 0; i < s.length; i++){

        if (i === j && s.length % 2 !== 0){
            noviString += s[i];
            break;
        }

        else if(i >= j){
            break;
        }

        else{
            zbroj = Number(s[i]) + Number(s[j]); 
            noviString += String(zbroj); 
            j--;
        }
    }
    return kalkulator(noviString);
}


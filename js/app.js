
function calcularParitaria(){


let fieldSeptiembre23 = document.querySelector("#septiembre23");
let fieldOctubre23 = document.querySelector("#octubre23");
let fieldNoviembre23 = document.querySelector("#noviembre23");
let fieldDiciembre23 = document.querySelector("#diciembre23");



let septiembre22 = document.querySelector("#septiembre22");


    let septiembre23 = Math.round(parseFloat(septiembre22.value)*2.3762);
    let octubre23 =  Math.round(septiembre23 * 1.104);
    let noviembre23 = Math.round(octubre23 + (septiembre23 * 0.10));
    let diciembre23 = Math.round(noviembre23 + (septiembre23 * 0.10) );

    

fieldSeptiembre23.innerHTML = `<span>${septiembre23}</span>`;
fieldOctubre23.innerHTML = `<span>${octubre23}</span>`;
fieldNoviembre23.innerHTML = `<span>${noviembre23}</span>`;
fieldDiciembre23.innerHTML = `<span>${diciembre23}</span>`;



};










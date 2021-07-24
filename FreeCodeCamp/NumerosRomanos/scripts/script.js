//Variables
let millar, centena, decena, unidad, valor, result, r1, r2, r3, r4;


//funcion para iniciar el proceso al darle al boton
function convertir(){
    //Capturampos el numero que ingreso el usuario
    valor = document.querySelector('#valor').value;
    //Desframectamos el numero 
    millar = Math.trunc(valor/1000) % 10;
    centena = Math.trunc(valor/100) % 10;
    decena = Math.trunc(valor/10) % 10;
    unidad = Math.trunc(valor/1) % 10;

    if (millar > 3){
        document.querySelector('.result').innerHTML = `El numero no se puede convertir`;
    }
    else {
        switch(unidad) {
            case 1:
                r4 = "I";
                break;
            case 2:
                r4 = "II";
                break;
            case 3:
                r4 = "III";
                break;
            case 4:
                r4 = "IV";
                break;
            case 5:
                r4 = "V";
                break;
            case 6:
                r4 = "VI";
                break;
            case 7:
                r4 = "VII";
                break;
            case 8:
                r4 = "VIII";
                break;
            case 9:
                r4 = "IX";
                break;
            default:
                    r4 = "";
        }

        switch(decena) {
            case 1:
                r3 = "X";
                break;
            case 2:
                r3 = "XX";
                break;
            case 3:
                r3 = "XXX";
                break;
            case 4:
                r3 = "XL";
                break;
            case 5:
                r3 = "L";
                break;
            case 6:
                r3 = "LX";
                break;
            case 7:
                r3 = "LXX";
                break;
            case 8:
                r3 = "LXXX";
                break;
            case 9:
                r3 = "XC";
                break;
            default:
                    r3 = "";
        }

        switch(centena) {
            case 1:
                r2 = "C";
                break;
            case 2:
                r2 = "CC";
                break;
            case 3:
                r2 = "CCC";
                break;
            case 4:
                r2 = "CD";
                break;
            case 5:
                r2 = "D";
                break;
            case 6:
                r2 = "DC";
                break;
            case 7:
                r2 = "DCC";
                break;
            case 8:
                r2 = "DCCC";
                break;
            case 9:
                r2 = "CM";
                break;
            default:
                    r2 = "";
        }

        switch (millar){
            case 1:
                r1 = "M";
                break;
            case 2:
                r1 = "MM";
                break;
            case 3:
                r1 = "MMM";
                break;
            default:
                r1 = "";
        }

        document.querySelector('.result').innerHTML = `${r1+r2+r3+r4}`;
    }

}

console.log(valor);




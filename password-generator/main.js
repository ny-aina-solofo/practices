const passwordText = document.querySelector('#password-generator'); 

function generate() {
    let password = ""; 
    const character = 
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ"+ 
        "abcdefghijklmnopqrstuvwxyz"+
        "1234567890"+ 
        "!@#$ù^&*°+-/èéàçµ£§?<>";
    const passwordLenght = 10;
    for(let i = 0; i < passwordLenght ; i++){
            let randomValue = Math.floor(Math.random()*character.length);
            password = password + character.substring(randomValue,randomValue+1);
        /*  La méthode substring() retourne une sous-chaîne de la chaîne courante, entre un indice de début et un indice de fin. 
            str.substring(indiceA[, indiceB])
        */
    }
    passwordText.value = password;      
}

function copyText() {
    /*  L'interface Clipboard implémente l'API clipboard, 
        qui fournit un accès en lecture et en écriture au contenu du presse-papiers du système.
    */
    navigator.clipboard.writeText(passwordText.value);
    alert(`${passwordText.value} copied !`);  
}

document.querySelector('.copy-text').addEventListener('click',copyText);
document.querySelector('.generate').addEventListener('click',generate); 
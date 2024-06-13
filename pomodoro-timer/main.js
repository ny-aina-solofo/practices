const timeText = document.querySelector('.time'); 
let minutes = 25; 
let secondes = 0;   
let pomodoro ; 

function startTimer() {
    pomodoro = setInterval(updateTimer,1000); 
}
function updateTimer() {
    if(secondes === 0) {
        secondes = 59;  
        minutes--; 
    } else {
        secondes--; 
    }
    timeText.textContent = time();
}
function stopTimer() {
    clearInterval(pomodoro); 
}
function resetTimer() {
    clearInterval(pomodoro);
    minutes = 25; 
    secondes = 0;
    timeText.textContent = time();
}
const time =  ()=> {
    /* --PADSTART--
    permet de compléter la chaîne courante avec une chaîne de caractères donnée afin d'obtenir une chaîne de longueur fixée.
    str.padStart(longueurCible [, chaîneComplémentaire])
    */
    return`${minutes.toString().padStart(2,'0')}:${secondes.toString().padStart(2,'0')}`;
}

document.querySelector('.start-btn').addEventListener('click',startTimer);
document.querySelector('.stop-btn').addEventListener('click',stopTimer); 
document.querySelector('.reset-btn').addEventListener('click',resetTimer) 


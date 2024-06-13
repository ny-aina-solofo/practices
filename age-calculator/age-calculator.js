let currentDate = new Date(); 
let currentDay = currentDate.getDate();
let currentMonth = currentDate.getMonth() + 1; // Les mois commencent à 0 en JavaScript
let currentYear = currentDate.getFullYear();

let birth_day = 29 ; 
let birth_month = 2; 
let birth_year = 2000;

function getJourDansMois(mois,annee) {
  let JourDansMois ; 
  if (mois === 4 || mois === 6 || mois === 9 || mois === 11) {
    JourDansMois = 30; 
  } else {
    JourDansMois = 31; 
  }
  // si annee bissextiles alors 29 jours sinon 28 jours 
  if(mois === 2) JourDansMois = annee % 4 === 0 && annee % 100 !== 0 || annee % 400 === 0 ? 29 : 28 ;

  return JourDansMois; 
}


let age_Year = currentYear - birth_year;
/* decrementer l'age si le mois courant est inférieur ou égal au mois de naissance
   et si le jour courant est inférieur au jour de naissance 
*/ 
if(currentMonth <= birth_month && currentDay < birth_day ) age_Year--; 

let age_Month = currentMonth - birth_month ;
if(currentDay < birth_day) age_Month--; 
// si le mois de naissance est négative, alors ajouter 12 sinon ajouter 0
if(age_Month < 0) age_Month += 12 ;  

let age_Day = currentDay - birth_day;
// si le jour de naissance est négative, alors ajouter le nombre de jour du mois de naissance 
if(age_Day < 0){
  const JourDansMois = getJourDansMois(currentMonth - 1, currentYear); 
  age_Day += JourDansMois; 
}

let age = ` ${age_Year} ans , ${age_Month} mois et ${age_Day} jours `
console.log(age);


module.exports = {getJourDansMois}; 
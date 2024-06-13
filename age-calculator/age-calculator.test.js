const {getJourDansMois} = require('./age-calculator'); 
 
// calculer le nombre correct de jour dans un mois 
test('get number of days in month',()=>{
    expect(getJourDansMois(2,2024)).toBe(29);  // année bisextilles
    expect(getJourDansMois(2,2023)).toBe(28);  // année non bisextilles
    expect(getJourDansMois(1,2024)).toBe(31);  // un mois de 31 jours
    expect(getJourDansMois(4,2024)).toBe(30);  // un mois de 30 jours
}); 




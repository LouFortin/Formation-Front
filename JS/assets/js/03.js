/*----------------------------------------
        LA CONCATENATION 
------------------------------------------*/

var DebutDePhrase      = "Aujourd'hui "; 
var DateDuJour         = new Date();
var SuiteDePhrase      = ", sont présents: ";
var NombreDeStagiaires = 12;
var FinDePhrase        = " apprenants.<br>";

/* 
Nous souhaitons maintenant, grâce à la concaténation, afficher tout ce petit monde en un seul morceau.
*/

document.write(DebutDePhrase + DateDuJour.getDate() + '/'+ (DateDuJour.getMonth() + 1) + '/' + DateDuJour.getFullYear() + SuiteDePhrase + NombreDeStagiaires + FinDePhrase);

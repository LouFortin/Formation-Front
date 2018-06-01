/*----------------------------------------
        LES BOUCLES
------------------------------------------*/

// -- Pour i = 0 ; Tant que i est strictement inférieur ou égal à 10 ; alors, j'incrémente i de 1.
for( let i = 0 ; i <= 10 ; i++ ) {
    document.write('<p> Instruction executée : <strong>' + i + '</strong></p>'); 
}
document.write('<hr>');

var j = 1;
while(j <= 10){
    document.write('<p> Instruction executée : <strong>' + j + '</strong></p>'); 

    // -- ATTENTION A NE PAS OUBLIER L'INCREMENTATION !
    j++;
}

/*----------------------------------------
        EXERCICE
------------------------------------------*/

var Prenoms = ['Jean', 'Marc', 'Matthieu', 'Luc', 'Pierre', 'Paul', 'Hugo', 'Jacques'];

/*
CONSIGNE: Grâce à une boucle FOR, affichez la liste des prénoms du tableau ci-dessus dans la console ou sur votre page.
*/

console.log(Prenoms);
for( let i = 0 ; i < Prenoms.length ; i++) {
    console.log(Prenoms[i]);
}

console.log('----');

// -- Avec la boucle While

var j = 0;
while(j < Prenoms.length){
    console.log(Prenoms[j]);
    j++;
}

console.log('----');

// -- Avec la boucle forEach
// --- ATTENTION A LA PERFORMANCE !!

Prenoms.forEach(afficheUnPrenom);

function afficheUnPrenom(prenom, i){
    console.log(i + ' ' + prenom);
}
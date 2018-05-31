/* --
    Votre mission, que vous devez accepter !
    Réaliser une fonction permettant à un internaute de :
        - Saisir son Prénom dans un Prompt
        - Retourner à l'Utilisateur : Bonjour [PRENOM], Quel age as-tu ?
        - Saisir son Age
        - Retourner à l'Utilisateur : Tu es donc né en [ANNEE DE NAISSANCE].
        - Afficher ensuite un récapitulatif dans la page.
        Bonjour [PRENOM], tu as [AGE] ! 
-- */


/*var Prenom = prompt("Quel est votre Prenom ?");

alert("Bonjour" + " " + Prenom + ", Quel âge as-tu ?")


var Age = prompt("Quel est votre Age?");

var DateDuJour = new Date();
alert("Tu es donc né en " + DateDuJour.getFullYear() - Age)

document.write("<p> Bonjour" + " " + Prenom + ", tu as " + " " + Age + " ans !</p>")*/


// -- 1 Initialisation des variables
var ObjetDate = new Date();
var AnneeActuelle = ObjetDate.getFullYear();

// -- 2 Création d'une fonction
function Hello() {

    // 2a. Je demande à l'utilisateur son prénom
    var prenom = prompt("Hello ! What is your name?", "<Saisir votre prénom>");
    console.log(prenom);
    console.log(typeof prenom);
    // 2b. Je lui demande son âge
    var age = parseInt(prompt("Hello " + prenom + " !  How old are you?", "<Saisir votre âge>"));
    age = parseInt(age);
    console.log(age);
    console.log(typeof age);
    // 2c. Déduire l'année de naissance et l'afficher dans une alerte
    var AnneeDeNaissance = AnneeActuelle - age;
    alert('AMAZING ! So you were born in ' + AnneeDeNaissance);

    // 2d. Afficher dans la page un récapitulatif
    document.write("Hello " + prenom + " it's AMAZING ! You are " + age + " years old!");
}
// 3 Execution de la fonction
Hello();




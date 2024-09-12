//job 3
console.log("Hello Javascript!");

//job 4
function bisextile(année) {
    // Une année est bisextile si elle est divisible par 4
    // Sauf si elle est divisible par 100, auquel cas elle doit aussi être divisible par 400
    return (année % 4 === 0 && année % 100 !== 0) || (année % 400 === 0);
}

// Test de la fonction
console.log("2020 est bisextile :", bisextile(2020));
console.log("2021 est bisextile :", bisextile(2021));
console.log("2000 est bisextile :", bisextile(2000));
console.log("1900 est bisextile :", bisextile(1900));

//job 5
function afficherjourssemaines() {
    const jourssemaines = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
    
    for (let i = 0; i < jourssemaines.length; i++) {
        console.log(jourssemaines[i]);
    }
}

// Appel de la fonction pour tester
afficherjourssemaines();

//job 6
function fizzbuzz() {
    for (let i = 1; i <= 151; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// Appel de la fonction pour tester
fizzbuzz();

//job 7
function jourtravaille(date) {
    const joursFeries2020 = [
        new Date(2020, 0, 1),  // Jour de l'an
        new Date(2020, 3, 13), // Lundi de Pâques
        new Date(2020, 4, 1),  // Fête du Travail
        new Date(2020, 4, 8),  // Victoire 1945
        new Date(2020, 4, 21), // Ascension
        new Date(2020, 5, 1),  // Lundi de Pentecôte
        new Date(2020, 6, 14), // Fête Nationale
        new Date(2020, 7, 15), // Assomption
        new Date(2020, 10, 1), // Toussaint
        new Date(2020, 10, 11),// Armistice 1918
        new Date(2020, 11, 25) // Noël
    ];

    const jour = date.getDate();
    const mois = date.getMonth() + 1; // getMonth() retourne 0-11
    const année = date.getFullYear();
    const jourSemaine = date.getDay(); // 0 pour dimanche, 6 pour samedi

    // Vérifier si c'est un jour férié
    if (joursFeries2020.some(jourFerie => 
        jourFerie.getDate() === jour && 
        jourFerie.getMonth() === date.getMonth() && 
        jourFerie.getFullYear() === année)) {
        console.log(`Le ${jour} ${mois} ${année} est un jour férié`);
    }
    // Vérifier si c'est un weekend
    else if (jourSemaine === 0 || jourSemaine === 6) {
        console.log(`Non, ${jour} ${mois} ${année} est un week-end`);
    }
    // Sinon, c'est un jour travaillé
    else {
        console.log(`Oui, ${jour} ${mois} ${année} est un jour travaillé`);
    }
}

// Tests de la fonction
jourtravaille(new Date(2020, 0, 1));  // Jour férié
jourtravaille(new Date(2020, 4, 8));  // Jour férié
jourtravaille(new Date(2020, 5, 13)); // Samedi
jourtravaille(new Date(2020, 5, 14)); // Dimanche
jourtravaille(new Date(2020, 5, 15)); // Jour travaillé

//job 8
function estPremier(nombre) {
    if (nombre <= 1) return false;
    for (let i = 2; i <= Math.sqrt(nombre); i++) {
        if (nombre % i === 0) return false;
    }
    return true;
}

function sommenombrespremiers(n1, n2) {
    if (estPremier(n1) && estPremier(n2)) {
        return n1 + n2;
    } else {
        return false;
    }
}

// Tests de la fonction
console.log(sommenombrespremiers(2, 3));   // Devrait retourner 5
console.log(sommenombrespremiers(3, 7));   // Devrait retourner 10
console.log(sommenombrespremiers(4, 7));   // Devrait retourner false
console.log(sommenombrespremiers(13, 23)); // Devrait retourner 36
console.log(sommenombrespremiers(15, 17)); // Devrait retourner false

//job 9
function tri(numbers, order) {
    return numbers.sort((a, b) => {
        if (order === "asc") {
            return a - b;
        } else if (order === "desc") {
            return b - a;
        } else {
            throw new Error("L'ordre doit être 'asc' ou 'desc'");
        }
    });
}

// Tests de la fonction
let tableau1 = [5, 2, 8, 1, 9];
console.log("Tri ascendant:", tri(tableau1, "asc"));

let tableau2 = [5, 2, 8, 1, 9];
console.log("Tri descendant:", tri(tableau2, "desc"));

// Test avec un ordre invalide
try {
    tri([1, 2, 3], "invalid");
} catch (error) {
    console.log("Erreur:", error.message);
}

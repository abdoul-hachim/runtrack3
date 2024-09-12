function jsonValueKey(jsonString, key) {
    try {
        // Convertir la chaîne JSON en objet JavaScript
        const obj = JSON.parse(jsonString);
        
        // Vérifier si la clé existe dans l'objet
        if (key in obj) {
            return obj[key];
        } else {
            return "Clé non trouvée";
        }
    } catch (error) {
        return "Erreur : Chaîne JSON invalide";
    }
}

// Exemple d'utilisation :
const jsonStr = `{
    "name": "La Plateforme_",
    "address": "8 rue d'hozier",
    "city": "Marseille",
    "nb_staff": "11",
    "creation": "2019"
}`;

console.log(jsonValueKey(jsonStr, "city")); // Affiche : Marseille
console.log(jsonValueKey(jsonStr, "name")); // Affiche : La Plateforme_
console.log(jsonValueKey(jsonStr, "country")); // Affiche : Clé non trouvée
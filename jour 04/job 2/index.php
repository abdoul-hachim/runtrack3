<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test jsonValueKey()</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 800px;
            margin: auto;
            background: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        h1 {
            color: #333;
        }
        pre {
            background-color: #eee;
            padding: 10px;
            border-radius: 5px;
        }
        #result {
            margin-top: 20px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Test de la fonction jsonValueKey()</h1>
        
        <h2>JSON String :</h2>
        <pre id="jsonString"></pre>
        
        <h2>Résultats :</h2>
        <div id="result"></div>
        
        <script>
            function jsonValueKey(jsonString, key) {
                try {
                    const obj = JSON.parse(jsonString);
                    if (key in obj) {
                        return obj[key];
                    } else {
                        return "Clé non trouvée";
                    }
                } catch (error) {
                    return "Erreur : Chaîne JSON invalide";
                }
            }

            const jsonStr = `{
                "name": "La Plateforme_",
                "address": "8 rue d'hozier",
                "city": "Marseille",
                "nb_staff": "11",
                "creation": "2019"
            }`;

            document.getElementById('jsonString').textContent = jsonStr;

            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML += `<p>Résultat pour la clé "city" : ${jsonValueKey(jsonStr, "city")}</p>`;
            resultDiv.innerHTML += `<p>Résultat pour la clé "name" : ${jsonValueKey(jsonStr, "name")}</p>`;
            resultDiv.innerHTML += `<p>Résultat pour la clé "country" : ${jsonValueKey(jsonStr, "country")}</p>`;
        </script>
    </div>
</body>
</html>
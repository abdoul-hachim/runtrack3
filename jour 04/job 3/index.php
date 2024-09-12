<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Filtre de Pokémon</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Filtre de Pokémon</h1>
    <form id="filterForm">
        <input type="text" id="id" name="id" placeholder="ID">
        <input type="text" id="nom" name="nom" placeholder="Nom">
        <select id="type" name="type">
            <option value="">Tous les types</option>
            <!-- Les options seront remplies dynamiquement par JavaScript -->
        </select>
        <input type="button" id="filtrer" value="Filtrer">
    </form>
    <div id="resultats"></div>

    <script src="script.js"></script>
</body>
</html>
<?php
    require_once "start.php";
?>

<!DOCTYPE html>
<html>
    <head>
        <title><?php print($CONF["company"]); ?></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" href="img/favicon.png">
        <link rel="stylesheet" href="css/main.css">
    </head>

    <body>
        <div class="container">
            <header>
                <div class="header_logo">
                    <a href="./"><img src="img/favicon.png" width="75px" height="75px"></a>
                </div>
                <div class="header_link">
                    <a href="./"><b><i><?php print($CONF["company"]); ?></i></b></a>
                </div>
            </header>

            <div class="siteMap">
                <i><a href="./">Главная → Сервисы </a><a href="./random.php">→ Генератор чисел</a></i>
            </div>

            <div class="groupBox">
                <p>Минимальное значение:</p>
                <input type="number" class="numberBox" id="minValue" min="0" value="0">
                <p>Максимальное значение:</p>
                <input type="number" class="numberBox" id="maxValue" value="9">
                <input type="button" class="button100" value="Сгенерировать" onclick="randomBtn_Click()">
                <input type="number" class="numberBox" id="randomResult">
            </div>

            <footer>
                <p><i><?php print($CONF["copyright"]); ?></i></p>
            </footer>
        </div>

        <script src="js/random.js"></script>        
    </body>
</html>

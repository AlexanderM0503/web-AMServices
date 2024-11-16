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
                <i><a href="./">Главная → Сервисы </a><a href="./factor.php">→ Разложение числа на множители</a></i>
            </div>

            <div class="groupBox">
                <input type="number" class="numberBox" id="numValue" min="2" value="2">
                <input type="button" class="button100" value="Разложить" onclick="factorBtn_Click()">
                <textarea class="text" id="factorResult" rows="20"></textarea>
            </div>

            <footer>
                <p><i><?php print($CONF["copyright"]); ?></i></p>
            </footer>
        </div>

        <script src="js/factor.js"></script>        
    </body>
</html>

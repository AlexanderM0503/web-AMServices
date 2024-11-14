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
                <i><a href="./">Главная → Сервисы </a><a href="./password.php">→ Генератор паролей</a></i>
            </div>

            <div class="groupBox">
                <input type="number" class="numberBox" id="numChar" min="1" max="255" value="8">
                <br>
                <input type="button" class="button45px" id="numMinus" value="-" onclick="SetNumChar(-1)">
                <input type="button" class="button45px" id="numPlus" value="+" onclick="SetNumChar(1)">
                <br>
                <input type="button" class="button45px" id="numSet4" value="4" onclick="SetNumChar(4)">
                <input type="button" class="button45px" id="numSet8" value="8" onclick="SetNumChar(8)">
                <input type="button" class="button45px" id="numSet12" value="12" onclick="SetNumChar(12)">
            </div>

            <div class="groupBox">
                <input type="checkbox" class="checkbox" id="charUp" checked>
                <label class="label" for="charUp">Буквы (верхний регистр)</label> <br>
                <input type="checkbox" class="checkbox" id="charLow" checked>
                <label class="label" for="charLow">Буквы (нижний регистр)</label> <br>
                <input type="checkbox" class="checkbox" id="digit" checked>
                <label class="label" for="digit">Цифры</label> <br>
                <input type="checkbox" class="checkbox" id="spChar" checked>
                <label class="label" for="spChar">Специальные символы</label> <br>
            </div>

            <div class="groupBox">
                <input type="text" class="textBox" id="passwd" value="Здесь будет Ваш пароль..." readonly>
                <input type="button" class="button100" id="passwdBtn" value="Сгенерировать" onclick="GetPassword()">
            </div>

            <footer>
                <p><i><?php print($CONF["copyright"]); ?></i></p>
            </footer>
        </div>

        <script src="js/password.js"></script>        
    </body>
</html>

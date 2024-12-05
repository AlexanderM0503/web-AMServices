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
        <link rel="stylesheet" href="css/schulte.css">
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
                <i><a href="./">Главная → Игры </a><a href="./schulte.php">→ Таблицы Шульте</a></i>
            </div>

            <div class="groupBox">
                <input type="text" class="textBox" id="gameStatus" value="Игра не начата" readonly>
                <input type="button" class="button100" id="startBtn" value="Старт" onclick="startBtn_Click()">
                <input type="button" class="button100" id="stopBtn" value="Стоп" onclick="stopBtn_Click()">
            </div>

            <div class="gameBox">
                <input type="button" id="schulte0" name="schulte0" value="1" onclick="SchulteGame(0)">
                <input type="button" id="schulte1" name="schulte1" value="2" onclick="SchulteGame(1)">
                <input type="button" id="schulte2" name="schulte2" value="3" onclick="SchulteGame(2)">
                <input type="button" id="schulte3" name="schulte3" value="4" onclick="SchulteGame(3)">
                <input type="button" id="schulte4" name="schulte4" value="5" onclick="SchulteGame(4)"> <br>
                <input type="button" id="schulte5" name="schulte5" value="6" onclick="SchulteGame(5)">
                <input type="button" id="schulte6" name="schulte6" value="7" onclick="SchulteGame(6)">
                <input type="button" id="schulte7" name="schulte7" value="8" onclick="SchulteGame(7)">
                <input type="button" id="schulte8" name="schulte8" value="9" onclick="SchulteGame(8)">
                <input type="button" id="schulte9" name="schulte9" value="10" onclick="SchulteGame(9)"> <br>
                <input type="button" id="schulte10" name="schulte10" value="11" onclick="SchulteGame(10)">
                <input type="button" id="schulte11" name="schulte11" value="12" onclick="SchulteGame(11)">
                <input type="button" id="schulte12" name="schulte12" value="13" onclick="SchulteGame(12)">
                <input type="button" id="schulte13" name="schulte13" value="14" onclick="SchulteGame(13)">
                <input type="button" id="schulte14" name="schulte14" value="15" onclick="SchulteGame(14)"> <br>
                <input type="button" id="schulte15" name="schulte15" value="16" onclick="SchulteGame(15)">
                <input type="button" id="schulte16" name="schulte16" value="17" onclick="SchulteGame(16)">
                <input type="button" id="schulte17" name="schulte17" value="18" onclick="SchulteGame(17)">
                <input type="button" id="schulte18" name="schulte18" value="19" onclick="SchulteGame(18)">
                <input type="button" id="schulte19" name="schulte19" value="20" onclick="SchulteGame(19)"> <br>
                <input type="button" id="schulte20" name="schulte20" value="21" onclick="SchulteGame(20)">
                <input type="button" id="schulte21" name="schulte21" value="22" onclick="SchulteGame(21)">
                <input type="button" id="schulte22" name="schulte22" value="23" onclick="SchulteGame(22)">
                <input type="button" id="schulte23" name="schulte23" value="24" onclick="SchulteGame(23)">
                <input type="button" id="schulte24" name="schulte24" value="25" onclick="SchulteGame(24)"> <br>
            </div>

            <footer>
                <p><i><?php print($CONF["copyright"]); ?></i></p>
            </footer>
        </div>

        <script src="js/schulte.js"></script>        
    </body>
</html>

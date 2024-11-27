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
        <link rel="stylesheet" href="css/tictactoe.css">
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
                <i><a href="./">Главная → Игры </a><a href="./tictactoe.php">→ Игра "Крестики-Нолики"</a></i>
            </div>

            <div class="groupBox">
                <p>Крестик:</p>
                <input type="text" class="textBox" id="playerName1" value="Игрок 1">
                <p>Нолик:</p>
                <input type="text" class="textBox" id="playerName2" value="Игрок 2">
                <input type="button" class="button100" id="changeNames" value="Поменять имена местами" onclick="changeNames_Click()">
            </div>

            <div class="groupBox">
                <input type="text" class="textBox" id="gameStatus" value="Игра не начата" readonly>
                <input type="button" class="button100" id="startBtn" value="Старт" onclick="startBtn_Click()">
                <input type="button" class="button100" id="stopBtn" value="Стоп" onclick="stopBtn_Click()">
            </div>

            <div class="gameBox">
                <input type="image" id="ttt0" src="./img/tictactoe/0.png" onclick="ttt_Click(0)">
                <input type="image" id="ttt1" src="./img/tictactoe/0.png" onclick="ttt_Click(1)">
                <input type="image" id="ttt2" src="./img/tictactoe/0.png" onclick="ttt_Click(2)"> <br>
                <input type="image" id="ttt3" src="./img/tictactoe/0.png" onclick="ttt_Click(3)">
                <input type="image" id="ttt4" src="./img/tictactoe/0.png" onclick="ttt_Click(4)">
                <input type="image" id="ttt5" src="./img/tictactoe/0.png" onclick="ttt_Click(5)"> <br>
                <input type="image" id="ttt6" src="./img/tictactoe/0.png" onclick="ttt_Click(6)">
                <input type="image" id="ttt7" src="./img/tictactoe/0.png" onclick="ttt_Click(7)">
                <input type="image" id="ttt8" src="./img/tictactoe/0.png" onclick="ttt_Click(8)"> <br>
            </div>

            <footer>
                <p><i><?php print($CONF["copyright"]); ?></i></p>
            </footer>
        </div>

        <script src="js/tictactoe.js"></script>        
    </body>
</html>

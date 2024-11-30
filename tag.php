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
        <link rel="stylesheet" href="css/tag.css">
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
                <i><a href="./">Главная → Игры </a><a href="./tag.php">→ Игра "Пятнашки"</a></i>
            </div>

            <div class="groupBox">
                <input type="text" class="textBox" id="gameStatus" value="Игра не начата" readonly>
                <input type="button" class="button100" id="startBtn" value="Старт" onclick="startBtn_Click()">
                <input type="button" class="button100" id="stopBtn" value="Стоп" onclick="stopBtn_Click()">
            </div>

            <div class="gameBox">
                <input type="button" id="tag0" name="tag0" value="1" onclick="tag_Click(0)">
                <input type="button" id="tag1" name="tag1" value="2" onclick="tag_Click(1)">
                <input type="button" id="tag2" name="tag2" value="3" onclick="tag_Click(2)">
                <input type="button" id="tag3" name="tag3" value="4" onclick="tag_Click(3)"> <br>
                <input type="button" id="tag4" name="tag4" value="5" onclick="tag_Click(4)">
                <input type="button" id="tag5" name="tag5" value="6" onclick="tag_Click(5)">
                <input type="button" id="tag6" name="tag6" value="7" onclick="tag_Click(6)">
                <input type="button" id="tag7" name="tag7" value="8" onclick="tag_Click(7)"> <br>
                <input type="button" id="tag8" name="tag8" value="9" onclick="tag_Click(8)">
                <input type="button" id="tag9" name="tag9" value="10" onclick="tag_Click(9)">
                <input type="button" id="tag10" name="tag10" value="11" onclick="tag_Click(10)">
                <input type="button" id="tag11" name="tag11" value="12" onclick="tag_Click(11)"> <br>
                <input type="button" id="tag12" name="tag12" value="13" onclick="tag_Click(12)">
                <input type="button" id="tag13" name="tag13" value="14" onclick="tag_Click(13)">
                <input type="button" id="tag14" name="tag14" value="15" onclick="tag_Click(14)">
                <input type="button" id="tag15" name="tag15" value=" " onclick="tag_Click(15)"> <br>
            </div>

            <footer>
                <p><i><?php print($CONF["copyright"]); ?></i></p>
            </footer>
        </div>

        <script src="js/tag.js"></script>        
    </body>
</html>

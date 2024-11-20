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
                <i><a href="./">Главная → Сервисы </a><a href="./color.php">→ RGB-палитра</a></i>
            </div>

            <div class="groupBox">
                <p>Красный:</p>
                <input type="range" class="range" id="colorRngRed" min="0" max="255" value="0" oninput="colorRng_change()">
                <input type="number" class="textBox75px" id="colorNumRed" min="0" max="255" value="0" oninput="colorNum_change()">
                <p>Зеленый:</p>
                <input type="range" class="range" id="colorRngGreen" min="0" max="255" value="0" oninput="colorRng_change()">
                <input type="number" class="textBox75px" id="colorNumGreen" min="0" max="255" value="0" oninput="colorNum_change()">
                <p>Синий:</p>
                <input type="range" class="range" id="colorRngBlue" min="0" max="255" value="0" oninput="colorRng_change()">
                <input type="number" class="textBox75px" id="colorNumBlue" min="0" max="255" value="0" oninput="colorNum_change()">
            </div>

            <div class="groupBox">
                <textarea class="text" id="colorPreview" rows="3" style="background: black;" readonly></textarea>
            </div>

            <div class="groupBox">
                <input type="text" class="textBox" id="htmlColor" value="#000000" readonly>
            </div>

            <footer>
                <p><i><?php print($CONF["copyright"]); ?></i></p>
            </footer>
        </div>

        <script src="js/color.js"></script>        
    </body>
</html>

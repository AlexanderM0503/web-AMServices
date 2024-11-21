<?php
    require_once "start.php";

    if (isset($_POST["newAncd"]))
    {
        $db = new SQLite3($CONF["db_file"]);
        $sql = "INSERT INTO anecdotes (ancd) VALUES (:newAncd)";
        $stmt = $db->prepare($sql);
        $stmt->bindValue(":newAncd", $_POST["newAncd"], SQLITE3_TEXT);
        $result = $stmt->execute();
        $stmt->close();
        $db->close();
    }

    if (isset($_GET["deleteId"]))
    {
        $db = new SQLite3($CONF["db_file"]);
        $sql = "DELETE FROM anecdotes WHERE id_ancd = :deleteId";
        $stmt = $db->prepare($sql);
        $stmt->bindValue(":deleteId", $_GET["deleteId"], SQLITE3_INTEGER);
        $result = $stmt->execute();
        $stmt->close();
        $db->close();
        header('Location: anecdotes.php');
    }
?>

<!DOCTYPE html>
<html>
    <head>
        <title><?php print($CONF["company"]); ?></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" href="img/favicon.png">
        <link rel="stylesheet" href="css/main.css">
        <link rel="stylesheet" href="css/anecdotes.css">
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
                <i><a href="./">Главная → Сервисы </a><a href="./anecdotes.php">→ Сборник анекдотов</a></i>
            </div>

            <div class="groupBox">
                <form action="./anecdotes.php" method="post">
                    <input type="text" class="textBox" name="newAncd" placeholder="Добавить новый анекдот">
                    <input type="submit" class="button100" value="Добавить">
                </form>
            </div>

            <div class="groupBox">
                <?php
                    $db = new SQLite3($CONF["db_file"]);
                    $sql = "SELECT * FROM anecdotes";
                    $result = $db->query($sql);

                    while ($ancd = $result->fetchArray(SQLITE3_ASSOC))
                    {
                        print("<div class='ancd'>");
                        print("    <div class='ancdText'>");
                        print("        <p>" . $ancd["ancd"] . "</p>");
                        print("    </div>");
                        print("    <div class='ancdDelete'>");
                        print("        <a href='./anecdotes.php?deleteId=" . $ancd["id_ancd"] . "'><img src='./img/delete.png' width='35px' height='35px'></a>");
                        print("    </div>");
                        print("</div>");
                    }

                    $db->close();
                ?>
            </div>

            <footer>
                <p><i><?php print($CONF["copyright"]); ?></i></p>
            </footer>
        </div>        
    </body>
</html>

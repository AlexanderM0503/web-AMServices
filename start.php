<?php

include "config.inc.php";

if (file_exists("./config.local.php"))
{
    include "config.local.php";
}

if (!file_exists($CONF["db_file"]))
{
    $db = new SQLite3($CONF["db_file"]);
    $sql = "CREATE TABLE anecdotes
            (
                id_ancd INTEGER PRIMARY KEY AUTOINCREMENT,
                ancd TEXT
            )";
    $db->exec($sql);
    $db->close();
}

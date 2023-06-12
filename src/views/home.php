<?php

use Proyect\Notas\models\Note;

$notes = Note::getAll();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>Home Carga Defecto</h1>
    <?php
    foreach ($notes as $note) {
        echo "<div>{$note->getTitle()}</div>";
    }
    ?>
</body>

</html>
<?php
session_start();
if (!isset($_SESSION["username"])) {

    header("location:login.php");
}
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <title>userhome</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="css/style.css" rel="stylesheet">
    </head>
    <body>
    <h1>USER HOMEPAGE</h1><?php echo  $_SESSION["username"] ?>
    <a href="logout.php">Logout</a>
    </body>
</html>
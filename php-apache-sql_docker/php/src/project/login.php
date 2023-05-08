<!-- 
This is the login page determines which call to make when session loads
-->

<?php

$host="db";
$user="MYSQL_USER";
$password="MYSQL_PASSWORD";
$db="MYSQL_DATABASE";
session_start();
// Checks database connection
$data=mysqli_connect($host, $user, $password, $db);
if($data ===false){
    die("connection failed");
}
//Listens for the submit button
//takes values and matches them to the databe and logs them in by usertype
if($_SERVER["REQUEST_METHOD"]=="POST"){
    $username = $_POST["username"];
    $password = $_POST["password"];

    $sql="select * from users where username='".$username."' AND password='".$password."' ";
    $result=mysqli_query($data,$sql);
    $row=mysqli_fetch_array($result);
    if($row["usertype"]=="user"){
        $_SESSION["username"]=$username;
        header("location:userhome.php");
    }
    elseif($row["usertype"]=="admin"){
        $_SESSION["username"]=$username;
        header("location:adminhome.php");
    }
    else {
        echo "username or password incorrect";
    }
}


?>


 <!DOCTYPE html>
 <html lang="en">
 <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
 </head>
 <body>
 <center>
    <form action="#" method="POST">
    <div >
        <label for="">username</label>
        <input type="text" name="username" required>
    </div>
    <div>
        <label for="">password</label>
        <input type="password" name="password" required>
    </div>
    <div>
     
        <input type="submit" value="Login" >
    </div>
    </form>
   </center>
 </body>
 </html>
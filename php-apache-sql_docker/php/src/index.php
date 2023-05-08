<?php
/*
//These are the defined authentication environment in the db service

// The MySQL service named in the docker-compose.yml.
$host = 'db';

// Database use name
$user = 'MYSQL_USER';

//database user password
$pass = 'MYSQL_PASSWORD';
$mydatabase = 'MYSQL_DATABASE';

// check the MySQL connection status
$conn = new mysqli($host, $user, $pass, $mydatabase);
$sql = 'SELECT * FROM users';
/*

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo "Connected to MySQL server successfully!";
    echo "<br>";
    

    if ($result = $conn->query($sql)) {
        while ($data = $result->fetch_object()) {
            $users[] = $data;
        }
    }

    foreach ($users as $user) {
        echo "<br>";
        echo $user->username . " " . $user->password;
        echo "<br>";
    }
    
}
*/
/*
if ($result = $conn->query($sql)) {
    while ($data = $result->fetch_object()) {
        $users[] = $data;
    }
}

foreach ($users as $user) {
    echo "<br>";
    echo $user->username . " " . $user->password;
    echo "<br>";
}
*/
/*
drop table if exists `users`;
create table `users` (
    id int not null auto_increment,
    username text not null,
    password text not null,
    primary key (id)
);
insert into `users` (username, password) values
    ("admin","password"),
    ("Alice","this is my password"),
    ("Job","12345678"); 
    
    
    session_start();


    if (!empty($_SERVER['HTTPS']) && ('on' == $_SERVER['HTTPS'])) {
		$uri = 'https://';
	} else {
		$uri = 'http://';
	}
	$uri .= $_SERVER['HTTP_HOST'];
    */

$host="db";
$user="MYSQL_USER";
$password="MYSQL_PASSWORD";
$db="MYSQL_DATABASE";
// Checks database connection
//$data=mysqli_connect($host, $user, $password);
//if($data ===false){
//    die("connection failed");
//}else{
 //   echo"connected";
//}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Home</title>
    <link rel="stylesheet" href="/style/style.css">
</head>
<body>
    <div class="body-container">
        <div class="nav-bar-container">
            <div class="nav-bar">
                <nav>
                   
                        <li>Home</li>
                        <li>Explore</li>
                        <li>Events</li>
                        <li>Theme</li>
                        <li>Sign-In</li>
                        

                    <select> 

    
                        <option value="/">Home</option> 
                        <option value="/collections/all">Books</option> 
                        <option value="/blogs/five-simple-steps-blog">Blog</option> 
                        <option value="/pages/about-us">About Us</option> 
                        <option value="/pages/support">Support</option> 
                    </select> 
                </nav>
            </div>
        </div>
        <div class="footer-container">
            <div class="footer">
                

                
                <div class="subscribe" id="footer-grid">
                <div class="subcribe-contents">
                    <div class="text">
                        <p>Enter email and click Subscribe for the latest news letter</p>
                    </div>
                    <br>
                    <div class="wrapper">
                        <form action="" method="post">
                            <input  type="email" name="subscribe" id="email-text" >
                            <input type="button" value="subscribe" id="submit-button">
                        </form>
                </div>
                <br>
                    
                    </div>
                </div>
                <div class="contacts" id="footer-grid">
                <div class="contacts-contents">
                <div class="text">
                        <p>Enter email and click Subscribe for the latest news letter</p>
                    </div>
                <div class="contacts-blocks">
                       
                            <li><img src="" alt="" srcset=""></li>
                            <li><img src="" alt="" srcset=""></li>
                            <li><img src="" alt="" srcset=""></li>
                            <li><img src="" alt="" srcset=""></li>
                        
                    </div>
    	        </div>
                </div>
            </div>
        </div>
        <p>&copy; WeSkate Pty Ltd est 2021. All rights reserved</p>
    </div>
</body>
</html>

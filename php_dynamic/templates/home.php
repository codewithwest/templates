<?php
// We need to use sessions, so you should always start sessions using the below code.
session_start();
// If the user is not logged in redirect to the login page...
if (!isset($_SESSION['loggedin'])) {
	header('Location: index.html');
	exit;
}
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Home Page</title>
		<link href="../css/home.css" rel="stylesheet" type="text/css">
		<!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer"> -->
	</head>
	<body class="loggedin">
		<div class="homeCont">
		<nav class="navBar">
			<div class="compName">
				<h1>HUBLOID</h1>
			</div>
			<div class="navLinks">
			<li><a href="http://">Main</a> </li>
			<li><a href="http://">Second</a> </li>
			<li><a href="http://">Watch</a> </li>
			<li><a href="http://">Trough</a> </li>
			</div>
			
<div class="routeLinks">
	<a href="profile.php">
				<div class="profilePic" id="profilePic">
				</div></a>
				<p><?=$_SESSION['name']?></p>
				
				<!-- <a href="logout.php"><i class="fas fa-sign-out-alt"></i>Logout</a> -->
			</div>
		</nav>

		<!-- Content Section -->
		<div class="content">
			<div class="categories"></div>
			<div class="postArea">
				<div class="posts" id="posts">
				</div>
				<div id="postText" class="postText">
					<input type="text" name="currentText" id="currentPost">
					<button type="button" id="postButton" value=""></button>
				</div>
			</div>
		</div>
	</div>
	<script src="../scripts/home.js" type=module></script>
	</body>
</html>
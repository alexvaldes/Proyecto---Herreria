<?php 
	$name =$_POST['name'];
	$email = $_POST['email'];
	$comments = $_POST['comments'];

	include("conexion\config.php");

mysqli_query($conexion,"INSERT INTO comentario VALUES ('','$name','$email','$comments')");


 ?>
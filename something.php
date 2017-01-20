<?php

//Define variables and set to empty
$userErr = $passErr = "";
$user = $pass = "";


if ($_SERVER["REQUEST_METHOD"] == "POST") {
	if (empty($_POST["username"])) {
		echo $userErr = "Username required";
	} else {
		$user = test_input($_POST["username"]);
		if (!preg_match("[[:alpha:]]*(_)*[[:alpha:]]+")) {
			echo $userErr = "Woops, only letters and underscores allowed"
		}
	}
	
	if (empty($_POST["password"])) {
		echo $passErr = "Password required";
	} else {
		$pass = test_input($_POST["password"]);
	}
}

?>
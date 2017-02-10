<?php
session_start(); // Starting Session
$error = '';
if (isset($_POST['submit'])) {
    if (empty($_POST['admin'])) {
        $error = "Not a valid admin";
    } else  {
        $admin = $_POST['admin'];
        $admin = stripslashes($admin);

        if ($admin == "rprom") {
            $_SESSION['login_user'] = $admin;
            header("location: codegen.html"); // Redirecting to code generation
        } else {
            $error = "Not a valid admin";
        }
    }
}
?>
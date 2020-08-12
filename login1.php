<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="login.css" />
    <title>Login</title>
    <link rel="icon" type="image/png" href="lol3.jpg" />
   
</head>

<body>
<a href="?param=login"> test </a> 

<?php if(isset($_POST['Username'])) include("project.html") ?> 
<form action="?" method="post">
    <div class="login-box">

        <h1>Login</h1>
        <div class="textbox">
            <i class="fas fa-user"></i>
            <input type="text " placeholder="Username" name="Username" value="">
        </div>

        <div class="textbox">
            <i class="fas fa-lock"></i>
            <input type="password" placeholder="Password" name="Password" value="">
        </div>
        </form>
        <input class="btn" type="submit"  name="" value="Log in ">
        <input class="btn" type="submit" name="" value="Sign in ">


</body>

</html>
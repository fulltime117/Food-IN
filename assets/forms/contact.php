<?php
$flag = $_POST['flag'];
// get register parameter
$fullname = $_POST['fullname'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$pin = $_POST['pin'];
$ttime = $_POST['ttime'];
//get contact parameter
$cName = $_POST['cName'];
$cPhone = $_POST['cPhone'];
$cEmail = $_POST['cEmail'];
$cMessage = $_POST['cMessage'];



// Get main domain
// $domain = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? 
// "https" : "http") . "://" . $_SERVER['HTTP_HOST'];

if($flag == "register"){
    $message = '<h2 style="color:blue">Customer Name: </h2>'.$fullname;
    $message .= '<h2 style="color:blue">Phone Number: </h2>'.$phone; 
    $message .= ($email !== '')?'<h2 style="color:blue">Email: </h2>'.$email:'';
    $message .= '<h2 style="color:blue">PIN: </h2>'.$pin;
    $message .= '<h2 style="color:blue">Time: </h2>'.$ttime;

    $subject = "User Register email";

    $headers = "From: ".$fullname."\n";
    $headers .= "Reply-To: ".$fullname."\n";
    $headers .= "MIME-Version: 1.0\n";
    $headers .= "Content-type: text/html\r\n";
    $headers .= 'Cc:Ganesh.Sridharan@homesuperfoods.com';
    
    $to_address = "contact@freshhomefood.uk";
    
    $mailsent = @mail($to_address, $subject, $message, $headers);
}

if($flag == "contact"){
    $message = '<h2 style="color:blue">Customer Name: </h2>'.$cName;
    $message .= '<h2 style="color:blue">Phone Number: </h2>'.$cPhone; 
    $message .= ($cEmail !== '')?'<h2 style="color:blue">Email: </h2>'.$cEmail:'';
    $message .= '<h2 style="color:blue">Message: </h2>'.$cMessage;   

    $subject = "User Contact email";

    $headers = "From: ".$cName."\n";
    $headers .= "Reply-To: ".$cName."\n";
    $headers .= "MIME-Version: 1.0\n";
    $headers .= "Content-type: text/html\r\n";
    $headers .= 'Cc:Ganesh.Sridharan@homesuperfoods.com';

    $to_address = "contact@freshhomefood.uk";    
    $mailsent = @mail($to_address, $subject, $message, $headers);
}
?>
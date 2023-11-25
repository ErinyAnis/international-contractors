<html>
<body>
<?php
if (isset($_REQUEST['email']))
//if "email" is filled out, send email
  {
  //send email
  //$to = "mostafa.mahmoud@intcot.com";
  $first_name= $_REQUEST['first_name'] ; 
  $last_name= $_REQUEST['last_name'] ; 
  $email = $_REQUEST['email'] ; 
  $subject = $_REQUEST['subject'] ;
  $message = $_REQUEST['message'] ;
  $header = "From: ". $first_name . " ". $last_name . " <" . $email . ">\r\n";
  
  mail("mostafa.mahmoud@intcot.com", $subject, $message, $header);
  
  header("Location: contact_us.html");
  }
else
//if "email" is not filled out, display the form
  {
  echo "Please Check The Error";
  }
?>
</body>
</html>

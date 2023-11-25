<html>
<body>
<?php
if (isset($_REQUEST['email']))
//if "email" is filled out, send email
  {
  //send email
  //$to = "mostafa.mahmoud@intcot.com";
  $email = $_REQUEST['email'] ; 
  $header = "From: ". $email . ">\r\n";
  
  mail("mostafa.mahmoud@intcot.com", $header, " ". $email);
  
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

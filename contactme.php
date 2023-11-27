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
  $message = 'Name : ' . $first_name . " ". $last_name . ', <br/>Email : ' . $_REQUEST['email'] . ', <br/>Message : ' . $_REQUEST['message'] ;
  $headers = "From: ". $first_name . " ". $last_name . " <" . $email . ">\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
  
  mail("remoonrafaat@gmail.com", $subject, $message, $headers);
  echo 'Thank you for the message. We will contact you shortly.';
  echo "<script type='text/javascript'>window.location.href='https://www.innovationscope.com/demos/eriny/index.html'</script>";
  }
else
//if "email" is not filled out, display the form
  {
  echo "Please Check The Error";
  }
?>
</body>
</html>

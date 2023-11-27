<html>
<body>
<?php
if (isset($_REQUEST['email']))
//if "email" is filled out, send email
  {
  //send email
  //$to = "mostafa.mahmoud@intcot.com";
  $email = $_REQUEST['email'] ; 
  $headers = "From: ". $email . ">\r\n";
  $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
  
  mail("remoonrafaat@gmail.com", $email, $headers);
  echo 'Thank you for the message. We will contact you shortly.';
//  header = "refresh:1.5;https://www.innovationscope.com/demos/eriny/index.html";
//  header("refresh:1.5;https://www.innovationscope.com/demos/eriny/index.html" );
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

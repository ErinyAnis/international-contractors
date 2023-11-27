$("#contactform").validate({
    rules: {
        first_name: {
        required: true,
        minlength: 2,
      },

      last_name: {
        required: true,
        minlength: 2,
      },
  
  
      email: {
        required: true,
        email: true
      },
  
      message: {
        required: true
      }
    },
    messages: {
        first_name: {
        required: "please enter your first-name",
        minlength:"first-name at least 2 characters"
      },

        last_name: {
        required: "please enter your last-name",
        minlength:"last-name at least 2 characters"
      },
  
      email: {
        required: "please enter your email",
        email: "Your email address must be in the format of name@domain.com"
      },
  
      message: {
        required: "please enter your message"
      }
    },
//  
//  
//    submitHandler: function(form) {
//    
//    $(form).submit();
//    }
  });
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
        required: "من فضلك ادخل اسمك الاول",
        minlength:"الاسم الاول لابد ان يكون من حرفين علي الاقل"
      },

        last_name: {
        required: "من فضلك ادخل اسم العائلة",
        minlength:"اسم العائلة لابد ان يكون من حرفين علي الاقل"
      },
  
      email: {
        required: "من فضلك ادخل عنوان بريدك الالكتروني",
        email: "عنوان بريدك الالكتروني لابد ان يكون في صيغة name@domain.com "
      },
  
      message: {
        required: "من فضلك اكتب رسالتك"
      }
    },
  
  
    submitHandler: function(form) {
    
    $(form).submit();
    }
  });
$(document).ready(function(){
$('.login-info-box').fadeOut();
$('.login-show').addClass('show-log-panel');
});


$('.login-reg-panel input[type="radio"]').on('change', function() {
if($('#log-login-show').is(':checked')) {
    $('.register-info-box').fadeOut();
    $('.login-info-box').fadeIn();

    $('.white-panel').addClass('right-log');
    $('.register-show').addClass('show-log-panel');
    $('.login-show').removeClass('show-log-panel');

}
else if($('#log-reg-show').is(':checked')) {
    $('.register-info-box').fadeIn();
    $('.login-info-box').fadeOut();

    $('.white-panel').removeClass('right-log');

    $('.login-show').addClass('show-log-panel');
    $('.register-show').removeClass('show-log-panel');
}
});
function validation()
{
var email =  document.getElementById("email").value;
var password =  document.getElementById("pass").value;
var confirm =  document.getElementById("confirm").value;
  var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
  if(email!="" || password!="" || confirm!="")
  {
     if(email.match(emailExp))
    {

       if(password.length>8)
      {
      document.getElementsByClassName("error")[0].innerHTML="";
      }
      else
      {
        document.getElementsByClassName("error")[1].innerHTML="*Minimum 8 character required";
        return false;
      }
    //  return true;
    }
    else {
      document.getElementsByClassName("error")[0].innerHTML="*invalid Email";
      return false;
    }
    //return true;
  }
  else {
      document.getElementsByClassName("error")[0].innerHTML="*All fields required";
        document.getElementsByClassName("error")[1].innerHTML="*All fields required";
        return false;
  }
}
function validate()
{
  var email =  document.getElementById("email1").value;
  var password =  document.getElementById("pass1").value;
  var confirm =  document.getElementById("confirm").value;
    var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    if(email!="" && password!="" && confirm!="")
    {

       if(email.match(emailExp))
      {

         if(password.length>=8)
        {
            if(password==confirm)
            {
                  console.log("hllo");

                      document.getElementById("error3").innerHTML="";
                      return true;
            }
            else {
              document.getElementById("error3").innerHTML="*password not matched";
              return false;
            }
        }
        else
        {
          document.getElementById("error2").innerHTML="*Minimum 8 character required";
          return false;
        }
      //  return true;
      }
      else {
        document.getElementById("error1").innerHTML="*invalid Email";
        return false;
      }
      //return true;
    }
    else {
        document.getElementById("error1").innerHTML="*All fields required";
          document.getElementById("error2").innerHTML="*All fields required";
          document.getElementById("error3").innerHTML="*All fields required";
          return false;
    }
}

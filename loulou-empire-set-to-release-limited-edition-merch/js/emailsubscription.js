// WARNING: FORM SUBMIT
function open_subscription(){
  $(".subscribe-page").fadeIn();
}
function close_subscription(){
  $(".subscribe-page").hide();
}
var emailaddress = $(".subscribers-email").val();
$("form").submit(function(e){
    if( !validateEmail(emailaddress)) {
    /* do stuff here */
    alert("Enter a valid Email");
  }else{
    $(".sub-form-input").hide();
    setTimeout(
      function(){
        $(".connected-txt").text("You are now Connected");
      }, 3000
    );
    setTimeout(
      function(){
        $(".subscribe-page").hide();
      }, 4500
    );

  }
  });
function validateEmail($email) {
 var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
 return emailReg.test( $email );
}

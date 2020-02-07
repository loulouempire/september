
$(document).ready(function() {
    // This will fire when document is ready:
    $(window).resize(function() {
        // This will fire each time the window is resized:
        if($(window).width() <= 740) {
            // if larger or equal
            $('header .centerize').addClass('moveSocial');
        } else {
            // if smaller
            $('header .centerize').removeClass('moveSocial');
        }

        if($(window).width() <= 711) {
            // if larger or equal
            $('.home-page-container').addClass('fullWidth');
            $('.menu-box').show();
            $('.col-holder .col2').addClass('fullWidth');
            $('.headline-comment-box').css('width', '71%');
        } else {
            // if smaller
            $('.home-page-container').removeClass('fullWidth');
            $('.menu-box').hide();
            $('.col-holder .col2').removeClass('fullWidth');
            $('.headline-comment-box').css('width', '45%');
            $('.headline-comment-box').css('width', '45%');
        }
    }).resize(); // This will simulate a resize to trigger the initial run.
});


function openMenu(){
  $(".navigation").addClass("appearZI");
}
function removeMenu(){
  $(".navigation").removeClass("appearZI");
}
function amonwest_page(){
  window.location.href = 'amonwest';
}
function prominentyoungrappersintema_page(){
  window.location.href = 'prominent-young-rappers-in-tema';
}
function loulouempiremerch_page(){
  window.location.href = 'loulou-empire-set-to-release-limited-edition-merch';
}

var number=0;
function moveCountdown(){
  if (number == 0) {
    window.location.href = 'index.html#number-2';
    number=2;
  }
  else if (number==2) {
    window.location.href = 'index.html#number-3';
    number=3;
  }
  else if (number==3) {
    window.location.href = 'index.html#number-4';
    number=4;
  }
  else if (number==4) {
    window.location.href = 'index.html#number-5';
    number=5;
  }
  else if (number == 5) {
    window.location.href = 'index.html#number-0';
    number=0;
  }
  else {
    number = 0;
  }
}

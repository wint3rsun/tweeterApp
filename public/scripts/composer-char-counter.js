//const CHAR_LIMIT = 140; was defined in client.js

$(document).ready(function() {
  // calculate value of char remaining in tweet submission form
  $("#tweet-text").on("input", function() {
    let inputTextLength = this.value.length;
    let output = $(this).siblings().find("output");

    output.val(`${CHAR_LIMIT - inputTextLength}`);
    
    (output.val() < 0) ? output.addClass("invalid") : output.removeClass("invalid");
  });
  // determine appearance/disapearance of scroll up button on window scroll
  $(window).scroll(function() {
    $('#jquery-ajax-form-submit').hide();

    if ($(window).scrollTop() > 100) {
      $('.scroll-up').show();
      $('.scroll-up').click(function() {
        $(document).scrollTop(0);
      });
    }
    if ($(window).scrollTop() <= 100) {
      $('.scroll-up').hide();
    }
  });
});
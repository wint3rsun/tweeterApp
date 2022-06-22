//const CHAR_LIMIT = 140;

$(document).ready(function() {
  console.log("u working?");

  $("#tweet-text").on("input", function() {
    console.log("still working????");
    let inputTextLength = this.value.length;
    let output = $(this).siblings().find("output");

    output.val(`${CHAR_LIMIT - inputTextLength}`);
    
    (output.val() < 0) ? output.addClass("invalid") : output.removeClass("invalid");
  });
});
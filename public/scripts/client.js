/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  
  // Function Definitions
  const createTweetElement = function(data) {
    const {user, content, created_at} = data;
  
    let tweetTemplateMarkup = `
      <article class="tweet">
        <header>
          <div>
            <img src="${user.avatars}" alt="user avater">
            <p>${user.name}</p>
          </div>
          <p class="tweet-username">${user.handle}</p>
        </header>
        <p>${content.text}</p>
        <footer>
          <p>${created_at}</p>
          <div>
            <i class="fa-solid fa-flag"></i>
            <i class="fa-solid fa-retweet"></i>
            <i class="fa-solid fa-heart"></i>
          </div>
        </footer>
      </article>
    `;
  
    return tweetTemplateMarkup;
  };

  const renderTweets = function(dataArray) {
    for (const tweet of dataArray) {
      const $tweetData = createTweetElement(tweet);
      $('.all-tweets').append($tweetData);
    }
  };
  
  const loadTweets = function() {
    $.ajax({
      url: '/tweets/',
      method: "Get",
      success: (response) => {
        console.log("AJAX GET is successfull girl :D");
        console.log(response);
        renderTweets(response);
      },
      error: (error) => {
        console.log('Tweeter isn\'t working right now');
      }
    });
  };

  // Tweet form submission logic
  const $form = $('#jquery-ajax-form-submit');
  
  $form.on('submit', function(event) {
    event.preventDefault();

    const formData = $(this).find("#tweet-text");
    //console.log(formData.val())
    
    if (!formData.val()) {
      alert("Cannot send empty tweet");
    } else {
      $.ajax({
        url: '/tweets/',
        data: formData.serialize(),
        method: "POST",
        success: (response) => {
          console.log("AJAX is successfull girl :D");
          console.log(response);
          loadTweets();
        },
        error: (error) => {
          console.log('Tweeter isn\'t working right now');
          console.log(error);
        }
      });
    }
  });

});


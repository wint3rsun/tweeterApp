/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const CHAR_LIMIT = 140;

$(document).ready(function() {
  // Function Definitions
  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }
  
  const createTweetElement = function(data) {
    const {user, content, created_at} = data;

    // format time as x time ago using timeago library
    const formatedTime = timeago.format(created_at);
  
    let tweetTemplateMarkup = `
      <article class="tweet">
        <header>
          <div>
            <img src="${user.avatars}" alt="user avater">
            <p>${user.name}</p>
          </div>
          <p class="tweet-username">${user.handle}</p>
        </header>
        <p>${escape(content.text)}</p>
        <footer>
          <p>${formatedTime}</p>
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
      $('.tweet-container').append($tweetData);
    }
  };
  
  const loadTweets = function() {
    $.ajax({
      url: '/tweets/',
      method: "Get",
      success: (response) => {
        renderTweets(response);
      },
      error: (error) => {
        console.log('Tweeter isn\'t working right now');
      }
    });
  };

  loadTweets();

  // Tweet form submission logic
  const $form = $('#jquery-ajax-form-submit');
  
  $form.on('submit', function(event) {
    event.preventDefault();

    const formData = $(this).find("#tweet-text");
    
    if (!formData.val() || formData.val() === null) {
      $("#invalid-input-empty").slideDown(() => {
        $("#invalid-input-empty").slideUp(5000);
      });
      
    } else if(formData.val().length > CHAR_LIMIT) {
      $("#invalid-input-overLimit").slideDown(() => {
        $("#invalid-input-overLimit").slideUp(5000);
      });
    } else {
      $.ajax({
        url: '/tweets/',
        data: formData.serialize(),
        method: "POST",
        success: () => {
          formData.val(''); //
          loadTweets();
        },
        error: (error) => {
          alert('Tweeter isn\'t working right now');
          console.log(error);
        }
      });
    }
  });

});


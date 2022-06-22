/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const CHAR_LIMIT = 140;

$(document).ready(function() {
  // Function Definitions
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
        <p>${content.text}</p>
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
      $('.all-tweets').append($tweetData);
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
      alert("Invalid Tweet! Can't submit nothing~ 😩");
    } else if(formData.val().length > CHAR_LIMIT) {
      alert("Invalid Tweet! Remove some char's plz 🥺");
    } else {
      $.ajax({
        url: '/tweets/',
        data: formData.serialize(),
        method: "POST",
        success: (response) => {
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


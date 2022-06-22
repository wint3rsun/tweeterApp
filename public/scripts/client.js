/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 * 
 * 
 *  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": 1461116232227
 }
 * 
 * 
 */

const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

const createTweetElement = function (data) {
  const {user, content, created_at} = data;

  //console.log(`user: ${user}\ncontent: ${content}\ncreated at: ${created_at}`);

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
  `

  return tweetTemplateMarkup;
};

$(document).ready(function () {
  const $tweet = createTweetElement(tweetData);

  //Test / driver code (temporary)
  //console.log($tweet);
  $('.all-tweets').append($tweet);

});


/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 // Dummy data based from initial-tweets.json
const tweetData = {
  "user": {
    "name": "Wint3rSun",
    "avatars": "https://i.imgur.com/nlhLi3I.png",
    "handle": "@Wint3r"
  },
  "content": {
    "text": "Cats are a programmers best friend"
  },
  "created_at": 1461116232227
}

const tweetDataArr = [
  {
    "user": {
      "name": "Wint3rSun",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@Wint3r"
    },
    "content": {
      "text": "Cats are a programmers best friend <3"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

// Function Declarations
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

const renderTweets = function (dataArray) {

  for (tweet of dataArray) {
    const $tweetData = createTweetElement(tweet);
    $('.all-tweets').append($tweetData);
  }
}

$(document).ready(function () {
  
  //Test / driver code (temporary)
  //const $tweet = createTweetElement(tweetData);
  //console.log($tweet);
  //$('.all-tweets').append($tweet);
  renderTweets(tweetDataArr);

});


'use strict';

const got = require('got')

// exports.check =
let check = function(subreddit) {
  got(`https://reddit.com/r/{subreddit}`)
    .then(response => {
      let content = response.body;
      if (content.includes("there doesn't seem to be anything here") && content.includes("click the subscribe or unsubscribe buttons to choose which subreddits appear on your front page.")) {
        console.log('false')
        return false;
      } else {
        console.log('true!');
        return true;
      }
    })
    .catch(error => {
      // console.log(error.response.body);
    });
}

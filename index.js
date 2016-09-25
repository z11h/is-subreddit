'use strict';
const got = require('got')

function check(subreddit) {
  got(`https://reddit.com/r/{subreddit}`)
    .then(response => {
      const content = response.body;
      const hasNothing = content.includes("there doesn't seem to be anything here");
      const hasSubscribe = content.includes(
        "click the subscribe or unsubscribe buttons to choose which subreddits appear on your front page."
      );
      const exists = hasNothing && hasSubscribe;

      console.log(
        exists
         ? "Nope! Doesn't exist"
         : 'Yup! Totally exists!'
      )

      return exists;
    })
    .catch(error => console.log(error.response.body));
}

module.exports = check

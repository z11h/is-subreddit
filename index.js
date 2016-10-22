'use strict';
const got = require('got')

function check(subreddit = '') {
  if (typeof subreddit === 'string') {
  got(`https://reddit.com/r/${subreddit}`)
    .then(response => {
      const content = response.body;
      
      const hasName = content.includes(`${subreddit}`); // @todo: check the redirected url
      const hasSearchBar = content.includes('search subreddits by name');
      const hasNothing = content.includes("there doesn't seem to be anything here");
      const hasSubscribeButtons = content.includes(
        'click the subscribe or unsubscribe buttons to choose which subreddits appear on your front page.'
      );
    
      const exists = !hasNothing && !hasSubscribeButtons && !hasSearch;

      console.log(
        exists
         ? `Nope! ${subreddit} Doesn't exist!`
         : `Yup! ${subreddit} Totally exists!`
      )

      return exists;
    })
    .catch(error => console.log(error.response.body));
  } else {
    throw new Error('Invalid string entered!');
  }
}

module.exports = check

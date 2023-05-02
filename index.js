import got from 'got';

async function doesSubredditExist(subreddit = '') {
  if (typeof subreddit !== 'string' || subreddit.trim() === '') {
    throw new Error('Subreddit name must be a non-empty string');
  }
  try {
    const { body: content } = await got(`https://reddit.com/r/${subreddit}`);

    const hasName = content.includes(subreddit);
    const hasSearchBar = content.includes('search subreddits by name');
    const hasNothing = content.includes("there doesn't seem to be anything here");
    const hasSubscribeButtons = content.includes(
      'click the subscribe or unsubscribe buttons to choose which subreddits appear on your front page.'
    );

    const exists = !hasNothing && !hasSubscribeButtons && !hasSearchBar;

    console.log(
      exists
        ? `Yup! ${subreddit} totally exists!`
        : `Nope! ${subreddit} doesn't exist!`
    );

    return exists;
  } catch (error) {
    throw new Error(`Failed to check subreddit: ${error.message}`);
  }
}

export default doesSubredditExist;

# is-subreddit
:aerial_tramway: a small npm module that tell you if a subreddit exists

## getting started

```shell
$ npm install --save is-subreddit
```

## usage
```javascript
import doesSubredditExist from 'is-subreddit'

doesSubredditExist('xboxone');
//=> true

doesSubredditExist('ThisIsDefNotASubreddit');
//=> false
```

## api 

### doesSubredditExist()

Type: `<Function>`

Returns a boolean (true if the subreddit exists, false if not).

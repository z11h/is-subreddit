# is-subreddit
:aerial_tramway: a small npm module that tell you if a subreddit exists

## getting started

```shell
$ npm install --save is-subreddit
```

## usage
```javascript
const check = require('is-subreddit')

check('xboxone');
//=> true

check('ThisIsDefNotASubreddit');
//=> false
```

## api 

### check()

Type: `<Function>`

Returns a boolean (true if the subreddit exists, false if not).

## related projects
* [ ]()

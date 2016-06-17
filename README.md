# watch
Simple file watcher / child process spawner

## install
```
npm install @pakastin/watch
```

## usage
### watch(glob, command, firstRun)

```js
var watch = require('@pakastin/watch');
watch('js/**/*.js', 'npm run build-js', true);
```

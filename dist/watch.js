'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var chokidar = _interopDefault(require('chokidar'));
var cp = _interopDefault(require('child_process'));

function watch (glob, cmd, initRun) {
  chokidar.watch(glob)
    .on('change', function () {
      exec(cmd);
    });

  if (initRun) {
    exec(cmd);
  }
}

function exec (cmd) {
  var isArray = cmd instanceof Array;

  if (!isArray) {
    cmd = cmd.split(' ');
  }
  var child = cp.spawn(cmd[0], cmd.slice(1));

  child.stdout.pipe(process.stdout);
  child.stderr.pipe(process.stderr);
}

module.exports = watch;
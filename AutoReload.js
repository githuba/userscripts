// ==UserScript==
// @name        Auto Reload X min random
// @namespace   https://github.com/
// @description Reload pages every X minutes
// @version     0.1
// @include     http://club.tgfcer.com/*
// @include     https://steamcn.com/forum.php?mod=forumdisplay&fid=234&filter=author&orderby=dateline
// @include     https://steamcn.com/forum.php?mod=forumdisplay&fid=271&filter=author&orderby=dateline
// @include     https://steamcn.com/forum.php?mod=forumdisplay&fid=319&filter=author&orderby=dateline
// @grant       none
// ==/UserScript==

var numMinutes = 1;
var random = Math.floor(Math.random()*1000) + 1000;
setTimeout(function(){ location.reload(); }, numMinutes*60*random);

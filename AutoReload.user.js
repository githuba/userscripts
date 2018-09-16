// ==UserScript==
// @name        Auto Reload Random
// @description Reload pages every X to 2X minutes
// @author      githuba
// @namespace   https://github.com/githuba/userscripts
// @supportURL  https://github.com/githuba/userscripts/issues
// @version     1.2
// @downloadURL https://raw.githubusercontent.com/githuba/userscripts/master/AutoReload.user.js
// @include     http://club.tgfcer.com/*
// @include     https://steamcn.com/forum.php?mod=forumdisplay&fid=234&filter=author&orderby=dateline
// @include     https://steamcn.com/forum.php?mod=forumdisplay&fid=271&filter=author&orderby=dateline
// @include     https://steamcn.com/forum.php?mod=forumdisplay&fid=319&filter=author&orderby=dateline
// @run-at document-end
// ==/UserScript==

var numMinutes = 2;

/* random */
/* function rand(min, max) {  */
/* return Math.floor(Math.random() * (max - min + 1)) + min;  */
/* } */
var random = Math.floor(Math.random()*1000) + 1000;

/* reload every 1 minute */
/* setTimeout(function(){ location.reload(); }, 1*60*1000); */
setTimeout(function(){ location.reload(); }, numMinutes*60*random);

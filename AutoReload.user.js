// ==UserScript==
// @name        Auto Reload Random
// @description Reload pages every X to 2X minutes
// @author      githuba
// @namespace   https://github.com/githuba/userscripts
// @supportURL  https://github.com/githuba/userscripts/issues
// @version     2.7
// @downloadURL https://raw.githubusercontent.com/githuba/userscripts/master/AutoReload.user.js
// @include     https://*.tgfcer.com/*
// @include     http://bbs.weibufengge.com/forum.php?mod=forumdisplay*
// @include     http://bbs.weibufengge.com:88/forum.php?mod=forumdisplay*
// @include     https://steamcn.com/forum.php?mod=forumdisplay*
// @include     https://steamcn.com/forum.php?mod=guide*
// @include     https://na.alienwarearena.com/
// @include     https://www.steamgifts.com/*
// @include     https://www.hi-pda.com/forum/forumdisplay.php?*
// @run-at document-end
// ==/UserScript==

var numMinutes = 2;

/* random                                                               */
/* function rand(min, max) {                                            */
/* return Math.floor(Math.random() * (max - min + 1)) + min;            */
/* }                                                                    */
var random = Math.floor(Math.random()*1000) + 1000;

/* reload every 1 minute                                                */
/* setTimeout(function(){ location.reload(); }, 1*60*1000);             */
setTimeout(function(){ location.reload(); }, numMinutes*60*random);

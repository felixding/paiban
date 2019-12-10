// ==UserScript==
// @name            正确排版
// @author          Ding Yu
// @namespace       space-cleaner
// @version         0.1
// @match           *://*/*
// @grant           none
// @description     删除中文和英文及数字间的空格，显示正确的排版。
// ==/UserScript==
(function() {
  'use strict';

  var p1 = /([a-zA-Z0-9])\s([\u2E80-\u2FD5\u3190-\u319f\u3400-\u4DBF\u4E00-\u9FCC\uF900-\uFAAD])/g;
  var p2 = /([\u2E80-\u2FD5\u3190-\u319f\u3400-\u4DBF\u4E00-\u9FCC\uF900-\uFAAD])\s([a-zA-Z0-9])/g;

  var text = document.body.innerHTML;
  text = text.replace(p1, '$1$2').replace(p2, '$1$2');

  document.body.innerHTML = text;
});

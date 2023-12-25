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

  var text = document.body.innerHTML;
  text = text.replace(/([\u4e00-\u9fa5])\s+([a-zA-Z0-9])|([a-zA-Z0-9])\s+([\u4e00-\u9fa5])/g, '$1$2$3$4');

  document.body.innerHTML = text;
})();

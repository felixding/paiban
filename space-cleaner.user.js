// ==UserScript==
// @name正确排版
// @author          Ding Yu
// @namespace       space-cleaner
// @version         0.1
// @match           *://*/*
// @grant           none
// @description删除中文和英文及数字间的空格，显示正确的排版。
// ==/UserScript==
// ==UserScript==
// @name正确排版
// @author          Ding Yu
// @namespace       space-cleaner
// @version         0.1
// @match           *://*/*
// @grant           none
// @description删除中文和英文及数字间的空格，显示正确的排版。
// ==/UserScript==
(function() {
    'use strict';

    function removeSpaces(str) {
        // 匹配汉字与英文/数字之间的空格
        return str.replace(/([\u4e00-\u9fa5])\s+([a-zA-Z0-9])/g, '$1$2')
                  .replace(/([a-zA-Z0-9])\s+([\u4e00-\u9fa5])/g, '$1$2');
    }

    function processNode(node) {
        if (node.nodeType === 3) { // 文本节点
            node.nodeValue = removeSpaces(node.nodeValue);
        } else if (node.nodeType === 1) { // 元素节点
            for (let i = 0; i < node.childNodes.length; i++) {
                processNode(node.childNodes[i]);
            }
        }
    }

    processNode(document.body);

    // 观察DOM变化并处理新加入的内容
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            for (let i = 0; i < mutation.addedNodes.length; i++) {
                processNode(mutation.addedNodes[i]);
            }
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });

})();

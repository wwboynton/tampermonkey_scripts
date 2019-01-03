// ==UserScript==
// @name       Okta stay logged in.
// @author     Wes Boynton (wes@boynton.io)
// @namespace  http://okta.stay.logged.in.please/
// @version    0.1
// @description  Keeps you logged in to your Okta SSO console
// @match      https://*.okta.com/*
// @copyright  2012+, You
// Borrowed from http://tom-gould.co.uk/blog/stay-logged-in-to-okta-sso
// ==/UserScript==
var ssologin = function () {
    var button = document.getElementById('session-timeout-ok');
    if (button) {
        var evt = document.createEvent("HTMLEvents");
        evt.initEvent('click', true, true);
        button.dispatchEvent(evt);
    }
}
window.setInterval(ssologin, 10000);

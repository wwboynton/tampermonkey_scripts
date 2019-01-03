// ==UserScript==
// @author     Wes Boynton (wes@boynton.io)
// @name       Okta remove annoying browser extension banner
// @namespace  http://okta.stay.logged.in.please/
// @version    0.1
// @description  Gets rid of some annoying crap in the Okta interface
// @match      https://*.okta.com/*
// @copyright  2018, Wes Boynton
// This script ain't elegant but it scraped the crap off of the page that I wanted gone.
// ==/UserScript==

// Removes elements from the page by class
function removeElementsByClass(className){
    var elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

// Removes the parent element of all elements of name `className`
function removeParentElementByClass(className) {
    var elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        var parent = elements[0].parentNode
        parent.parentNode.removeChild(parent);
    }
}

// Do this several times on a small loop to ensure stuff that pops up after page load is tidied up.
var x = 0;
var intervalID = setInterval(function () {
   // Nix the input tooltips in the login page that interfere with the LastPass login selector icon
   removeElementsByClass("input-tooltip");

   // Nix the banner that indicates you need the Okta plugin/extension
   removeElementsByClass("banner-container");

   // Nix the plugins/apps that require the plugin/extension.
   // They'll reappear magically if you install it.
   removeParentElementByClass("plugin-required");

   // Announce proudly
   console.log("Tampermonkey Script cleaned up okta UI garbage!");
   if (++x === 15) {
       window.clearInterval(intervalID);
   }
}, 100);





// ==UserScript==
// @name         Funretro Fixer
// @namespace    https://funretro.github.io/
// @version      0.1
// @description  Get rid of annoying meta-ads and intercom on funretro
// @author       Wes Boynton
// @match        https://funretro.github.io/*
// @grant        none
// @run-at      document-idle
// ==/UserScript==

// Define a function to remove elements by class name
// https://stackoverflow.com/a/14066534
function removeElementsByClass(className){
    var elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

// Remove the funretro banner
removeElementsByClass('funretro-pro')

// Define a function to remove an element by ID
// https://www.abeautifulsite.net/adding-and-removing-elements-on-the-fly-using-javascript
function removeElement(elementId) {
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}

// Remove the intercom stuff
// Loop every 100ms and look for element by id, then delete it once it exists
// https://stackoverflow.com/a/33797357
var existCondition = setInterval(function() {
 if ($('#intercom-container').length) {
    console.log("Exists!");
    clearInterval(existCondition);
    removeElement('intercom-container')
 }
}, 100); // check every 100ms


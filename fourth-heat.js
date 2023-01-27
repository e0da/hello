"use strict";

var nameBox = document.querySelector("#nameBox");
var messageBox = document.querySelector("#messageBox");
var goButton = document.querySelector("#goButton");

goButton.addEventListener("click", function () {
  var name = nameBox.value;
  var msg = `Hello ${name}! 🥳`;
  messageBox.value = msg;
});

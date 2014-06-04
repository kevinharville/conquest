/*global chrome*/
"use strict";

chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('/index.html', {
    bounds: {
      width: 960,
      height: 480,
    },
    resizable: false
  });

});

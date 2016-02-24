/* This is the main file for JS */
// Function to change the header's bg.
// function chooseBG() {
// 	var header;
// 	header = document.querySelector('.site-header');
// 	header.style.background = 
// 		'url("/img/index/0' + getRandomInt(1,6) +'.jpg")' + ' no-repeat center center';
// 	header.style.backgroundSize = 'cover'; 
// }

// // Returns a random integer between min (included) and max (excluded)
// // Using Math.round() will give you a non-uniform distribution!
// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// window.onload = chooseBG;

/* 
 * Timing API to monitor Page Performance
 * 
 * @Author: qingnan.yqn
 * @Date: 2016-02-24
 * @Last Modified by:
 * @Last Modified time: 
 */

(function () {

  'use strict'

  var fb = {
    networkType: null,
    time: {}
  };

  // only work on mobile device
  if (window.WindVane) {
    WindVane.call('WVNative', 'getCurrentNetStatus', {}, function (e) {
      fb.networkType = e.netStatus;
    });
  }
  
  var timing;
  var startTime = new Date().getTime();

  if (window.performance && window.performance.timing) {
    timing = window.performance.timing;
    window.onload = function () {
      fb.time.responseReady = timing.responseEnd - timing.navigationStart;
      fb.time.domReady = timing.domComplete - startTime;
      fb.time.pageReady = new Date().getTime() - startTime;
    } 
  } else {
    fb.time.responseReady = null;
    document.addEventListener('DOMContentLoaded', function () {
      fb.time.domReady = new Date().getTime() - startTime;
    }, false);
    window.onload = function () {
      fb.time.pageReady = new Date().getTime() - startTime;
    }
  }
  
  // call manually while all services are ready
  window._services_all_ready = function () {
    fb.time.serviceReady = new Date().getTime() - startTime;
    console.log(fb);
  }

})();

window.addEventListener('load', function () {
  setTimeout(function () {_services_all_ready();}, 300);
});


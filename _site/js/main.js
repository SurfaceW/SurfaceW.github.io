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
    nw: '',    // network type
    resp: -1,  // response time
    load: -1,  // dom complete loading time
    ready: -1, // services ready time
    from: '',  // from which type of product line
    local: ''  // location of service (us / zh)
  };

  var timing;
  var startTime = new Date().getTime();

  // only work on mobile device
  if (window.WindVane) {
    WindVane.call('WVNative', 'getCurrentNetStatus', {}, function (e) {
      fb.nw = e.netStatus;
    });
  }

  if (window.performance && window.performance.timing) {
    timing = window.performance.timing;
    window.onload = function () {
      fb.resp = timing.responseEnd - timing.navigationStart;
      fb.load = timing.domComplete - startTime;
    } 
  } else {
    fb.time.responseReady = null;
    window.onload = function () {
      fb.load = new Date().getTime() - startTime;
    }
  }
  
  /**
   * Call manually while all services are ready to
   * to record the ready time.
   * 
   * @param  {String} from which product line [nw | fis | va_mb | va_pc | hx]
   */
  window._services_all_ready = function (from) {
    fb.from = from || ' ';
    fb.ready = new Date().getTime() - startTime;
    if (window._gl_record) {
      _gl_record('path', fb);
    }
  }
})();


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
    resp: -1,  // network responding time
    load: -1,  // from resp time to dom complete loaded time
    ready: -1, // from resp time to services ready time
    from: '',  // from which type of product line
    local: ''  // location of service (us / zh)
  };

  var timing;
  var startTime = new Date().getTime();
  var timeRanges = [1000, 3000, 5000, 10000]
  // Give number and return the range index in ranges
  var range = function (num, ranges) {
    var index = 1;
    for (var i = 0; i < ranges.length; i++) {
      if (ranges[i] < num) { index++; }
    }
    return index;
  }

  // only work on mobile device
  if (window.WindVane) {
    WindVane.call('WVNative', 'getCurrentNetStatus', {}, function (e) {
      fb.nw = e.netStatus;
    });
  }

  if (window.performance && window.performance.timing) {
    timing = window.performance.timing;
    window.onload = function () {
      fb.resp = range(timing.responseEnd - timing.navigationStart, timeRanges);
      fb.load = range(timing.domComplete - startTime, timeRanges);
    }
  } else {
    window.onload = function () {
      fb.load = range(new Date().getTime() - startTime, timeRanges);
    }
  }

  /**
   * Call manually while all services are ready to
   * to record the ready time.
   *
   * @param  {String} nw | fis | va_mb | va_pc | hx]
   */
  window._services_all_ready = function (from) {
    fb.from = from || '';
    fb.ready = range(new Date().getTime() - startTime, timeRanges);
    if (window._gl_record) {
      _gl_record('path', fb);
    } else {
      console.log(fb);
    }
  }
})();

window.addEventListener('load', function () {
  setTimeout(function () {_services_all_ready('fis')}, 400);
})


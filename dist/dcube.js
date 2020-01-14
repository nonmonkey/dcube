/**
 * (c) 2019-2020 du
 **/
(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? (module.exports = factory())
    : typeof define === 'function' && define.amd
    ? define(factory)
    : ((global = global || self), (global.Dcube = factory()));
})(this, function() {
  'use strict';

  var version = '1.0.0';

  var Dcube = /** @class */ (function() {
    function Dcube() {
      this.version = version;
    }
    return Dcube;
  })();

  return Dcube;
});

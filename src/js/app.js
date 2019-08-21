// PRE-initialization
var APP = window.APP || {};
APP.Dev = APP.Dev || {};
APP.Browser = APP.Browser || {};
APP.Plugins = APP.Plugins || {};
APP.Components = APP.Components || {};

// force scroll to top on initial load
window.onbeforeunload = function() {
  window.scrollTo(0, 0);
};

// shorthand operators
var _window = $(window);
var _document = $(document);
var easingSwing = [0.02, 0.01, 0.47, 1]; // default jQuery easing

(function($, APP) {
  APP.Initilizer = function() {
    var app = {};

    app.init = function() {
      app.initGlobalPlugins();
      app.initPlugins();
    };

    app.destroy = function() {};

    // Global plugins which must be initialized once
    app.initGlobalPlugins = function() {
      APP.Dev.Credentials.logCredentials();
      APP.Browser().methods.setBodyTags();
      APP.Plugins.AOS.init();
    };

    // Plugins which depends on DOM and page content
    app.initPlugins = function() {
      APP.Plugins.LegacySupport.fixImages();
    };

    return app;
  };

  // a.k.a. ready
  $(function() {
    APP.Initilizer().init();
  });
})(jQuery, window.APP);

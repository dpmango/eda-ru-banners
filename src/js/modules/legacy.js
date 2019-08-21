//////////
// LEGACY
//////////
(function($, APP) {
  APP.Plugins.LegacySupport = {
    init: function() {},
    fixImages: function() {
      if (APP.Browser().data.isIe) {
        // if LAZY LOAD is used, move initialization to afterFinishAll
        picturefill();
        objectFitImages();
      }
    },
  };
})(jQuery, window.APP);

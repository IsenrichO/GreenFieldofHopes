(function(app) {

  var bootstrap = ng.platformBrowserDynamic.bootstrap;
  var LocationStrategy = ng.common.LocationStrategy;
  var HashLocationStrategy = ng.common.HashLocationStrategy;

  document.addEventListener('DOMContentLoaded', function() {
    bootstrap(app.ActivityLoginComponent, []);
    bootstrap(app.ActivitySignupComponent, []);
    bootstrap(app.ActivityCreateComponent, []);
  });

})(window.app = window.app || {});
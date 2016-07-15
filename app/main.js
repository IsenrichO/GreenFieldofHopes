(function(app) {

  var bootstrap = ng.platformBrowserDynamic.bootstrap;
  var LocationStrategy = ng.common.LocationStrategy;
  var HashLocationStrategy = ng.common.HashLocationStrategy;

  document.addEventListener('DOMContentLoaded', function() {
    bootstrap(app.ActivityLoginComponent, []);
    bootstrap(app.ActivityJoinedComponent, []); // Need to add dataservice when completed
  });

})(window.app = window.app || {});
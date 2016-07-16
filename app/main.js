(function(app) {

  var bootstrap = ng.platformBrowserDynamic.bootstrap;
  var LocationStrategy = ng.common.LocationStrategy;
  var HashLocationStrategy = ng.common.HashLocationStrategy;

  document.addEventListener('DOMContentLoaded', function() {
    bootstrap(app.ActivityLoginComponent, []);
    bootstrap(app.ActivitySignupComponent, []);
    bootstrap(app.ActivityJoinedComponent, []); // Need to add dataservice when completed
    bootstrap(app.ActivityCreateComponent, []);
    bootstrap(app.CurrentEvent, []); // current event that is being displayed
  });

})(window.app = window.app || {});
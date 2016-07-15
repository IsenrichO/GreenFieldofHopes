(function(app) {

  const template = require(./login.html);
  const styles = require(./login.css)

  app.ActivityLoginComponent = 
    ng.core.Component({
      selector: 'logging-in',
      template: template,
      styles: styles
    })

    .Class({
      constructor: function() {},

      login(event, username, password) {
        event.preventDefault();
        let body = JSON.stringify({ username, password });
        console.log(body);
      },

      signup(event) {
        event.preventDefault();
        this.router.navigate(['/signup']);
      }

  
    })
})(window.app = window.app || {});
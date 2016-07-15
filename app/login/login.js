(function(app) {


  app.ActivityLoginComponent = 
    ng.core.Component({
      selector: 'logging-in',
      template: `
        <style>
        .login {
          width: 40%
        }
        </style>
        <div class="login jumbotron center-block">
          <h1>Login</h1>
          <form role="form" (submit)="login($event, username.value, password.value)"> add 
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" #username class="form-control" id="username" placeholder="Username">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
          </div>
            <input type="password" #password class="form-control" id="password" placeholder="Password">
          <button type="submit" class="">Submit</button>
        </form>
        </div>
      `
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
      }

  
    })

  
})(window.app = window.app || {});
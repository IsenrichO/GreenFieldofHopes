(function(app) {


  app.ActivitySignupComponent = 
    ng.core.Component({
      selector: 'sign-up',
      template: `
        <style>
        .signup {
          width: 40%
        }
        </style>

        <div class="signup center-block jumbotron">
          <h1>Signup</h1>
          <form role="form" (submit)="signup($event, username.value, password.value)">
            <div class="form-group">
              <label for="username">Username</label>
              <input type="text" #username class="form-control" id="username" placeholder="Username">
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" #password class="form-control" id="password" placeholder="Password">
            </div>
            <button type="submit" class="btn btn-default">Submit</button>
          </form>
        </div>
      `
    })

    .Class({
      constructor: function() {},

      signup(event, username, password) {
        event.preventDefault();
        let body = JSON.stringify({ username, password });
        console.log('signing up bitch' + body)
      },

      login(event) {
        event.preventDefault();
        console.log('huh');
      }

  
    })

  
})(window.app = window.app || {});
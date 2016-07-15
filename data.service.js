(function(app) {

  function DataService() {}
  DataService.annotations = [
    new ng.core.Injectable()
  ];
  
  DataService.prototype.getJoinedActivities = function(cb) {
  	firebase.database().ref('activities').once('value').then(function(snapshot) {
      cb.call(this, snapshot.val());
    }.bind(this));
  };

  DataService.prototype.enterNewActivity = function(activity) {
    var sessionsRef = firebase.database().ref('activities');
    sessionsRef.push(activity).then(function(snapshot) { // commented out so we dont actually always create new activity
      console.log('inside creation');
      console.log(activity, snapshot);
    });
  };

  app.DataService = 
  ng.core.Injectable({})
  .Class({
    constructor: function() {},

      getJoinedActivities: function(cb) {
        firebase.database().ref('activities').once('value').then(function(snapshot) {
          cb.call(this, snapshot.val());
        }.bind(this));
      },
      enterNewActivity : function(activity) {
        var sessionsRef = firebase.database().ref('activities');
        sessionsRef.push(activity).then(function(snapshot) { // commented out so we dont actually always create new activity
          console.log('inside creation');
          console.log(activity, snapshot);
        });
      },
      getUnseenActivities: function() {
        firebase.database().ref('activities').once('value').then(function(snapshot) {
          var unseen = [];
          snapshot.val().forEach(function(activity, index) {
            if (activity.seen[user] !== true) {
              unseen.push([activity, index]);
            }
          })
          cb.call(this, snapshot.val());
        }.bind(this));
      },
      createNewUser : function(user) {
        firebase.database().ref('users/' + user.username).set(user).then(function(snapshot) {
          console.log(snapshot.val());
        })
      },
      login: function(attempt) {
        if (attempt.username && attempt.password) {
          firebase.database().ref('users/' + attempt.username).once('value').then(function(snapshot) {
            if (snapshot.val().password === attempt.password) {
              console.log("congratulations")
            }
          })
          .catch(function(error) {
            console.log(error);
          });
        }
      },
      joinActivity : function(activity, user) {
        firebase.database().ref('activities/' + activity.index + '/seen').set({user: true}).then(function(snapshot) {
          console.log(snapshot.val());
        })
        .catch(function(error) {
          console.log(error);
        });
      }

  });

})(window.app = window.app || {});
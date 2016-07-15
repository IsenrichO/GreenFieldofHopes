(function(app) {

  app.DataService = 
  ng.core.Injectable({})
  .Class({
    constructor: function() {},
      //data service for gettting current users joined-activities
      getJoinedActivities: function(cb, user) {
        firebase.database().ref('users/' + user + '/joined-activities').once('value').then(function(snapshot) {
          console.log(snapshot.val());
          //this doesn't work yet because idk what this snapshot will loook like. needs to be the uniquely generated ids for activities so that we can get each one.
          cb.call(this, snapshot.val());
        }.bind(this));
      },
      //data service for creating a new activity. activity should = {comments: string, initiator : current users username, joining: [placeholder], name: string, when: timestamp, where: string}
      enterNewActivity : function(activity) {
        var sessionsRef = firebase.database().ref('activities');
        sessionsRef.push(activity).then(function(snapshot) { // commented out so we dont actually always create new activity
          console.log('inside creation');
          console.log(activity, snapshot);
        });
      },
      //data service for getting a list of unseen activities for the tindering page
      getUnseenActivities: function(cb) {
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
      //data service for signing up new users. user should = {username : string, password : string}
      createNewUser : function(user) {
        firebase.database().ref('users/' + user.username).set(user).then(function(snapshot) {
          console.log(snapshot.val());
        })
      },
      //data service for signing up new users. attempt should = {username : string, password : string}
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
        firebase.database().ref('users/' + user + '/joined-activities').push({name : activity.name, activity-id : activity.id}).then(snapshot) {
          console.log('congratualtions activity joined');
        }
      },
      declineActivity : function(activities, user){
        firebase.database().ref('activities/' + activity.index + '/seen').set({user: true}).then(function(snapshot) {
          console.log(snapshot.val());
        })
        .catch(function(error) {
          console.log(error);
        });
      }


  });

})(window.app = window.app || {});
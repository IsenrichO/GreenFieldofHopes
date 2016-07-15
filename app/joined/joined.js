(function(app) {
  // Create function to attach everything to and pass any injected service.
  function ActivityComponent(dataService) {
    // Dummy Data for now
    this.activities = [ {name: 'Off the Grid', when: '09/07/2016', 
                         where: 'Fort Mason', initiator: 'Nick', 
                         joining: 'Josh, Oliver', comments: 'Lets get come food'},
                        {name: 'Baseball', when: '09/16/2016', 
                         where: 'Lions Field', initiator: 'Josh', 
                         joining: 'Nick, Rene', comments: 'Play ball'},
                      ];

    // Commented out for now
    // dataService.getJoinedActivities.call(this, function(data) {
    //   this.activities = data;
    // });
  }
  // Declare components injectables
  ActivityComponent.parameters = [
    // app.DataService
  ];
  // Create new DOM Space for Component
  ActivityComponent.annotations = [
    // create new component
    new ng.core.Component({
      // create selector for html
      selector: 'joined',
      //templateUrl: 'app/joinedEvents.html'
      template: `
      <div class="container jumbotron center-block">
         <h1>Joined Events!</h1>
         <div>
           <div id="activityList">
             <div class="activity" *ngFor="let activity of activities">
               <h3>{{activity.name}}</h3>
               <p>Date: {{activity.when}}</p>
               <p>Location: {{activity.where}}</p>
               <p>Initiator: {{activity.initiator}}</p>
               <p>Joining: {{activity.joining}}</p>
               <p>Comments: {{activity.comments}}</p>
             </div>
           </div>
         </div>
      </div>   
      `
    })
  ];

  // Name and link component
  app.ActivityJoinedComponent = ActivityComponent;

})(window.app = window.app || {});
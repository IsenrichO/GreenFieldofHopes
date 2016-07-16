(function(app) {
  // Create function to attach everything to and pass any injected service.
  function ActivityComponent(dataService) { 
    // Dummy Data for now
    this.activities = [ {name: 'Off the Grid', when: '09/07/2016', 
                         where: 'Fort Mason', initiator: 'Nick', 
                         joining: 'Josh, Oliver', comments: 'Lets get some food'},
                        {name: 'Baseball', when: '09/16/2016', 
                         where: 'Lions Field', initiator: 'Josh', 
                         joining: 'Nick, Rene', comments: 'Play ball'},
                      ];
    this.join = function(){
      console.log('fuck you');
    };
    this.decline = function() {
      console.log('fuck you 2 times');
    };
    

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
      selector: 'current-event-display',
      //templateUrl: 'app/joinedEvents.html'
      template: `
      <div class="container jumbotron center-block">
         <h1>Want to Join?!</h1>
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
      <button type="submit" class="decline" (click)="decline()">Decline</button>
      <button type="submit" class="join" (click)="join()">Join</button>
      </div>

      `
    })
  ];

  // Name and link component
  app.CurrentEvent = ActivityComponent;

})(window.app = window.app || {});
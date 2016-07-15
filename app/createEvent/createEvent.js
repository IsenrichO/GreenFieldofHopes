(function(app) {
  app.ActivityCreateComponent = ng.core
    .Component({
      selector: 'create-event',
      template: `
        
          <div class="container jumbotron center-block">
             <h1>Activity Form</h1>
             <form (ngSubmit)="onSubmit(model)" #activityForm="ngForm">
             <div class="form-group">
               <label for="name">Type of Activity</label>
               <input type="text" class="form-control" required>
             </div>
               <div class="form-group">
                 <label for="comment">Comments?</label>
                 <input type="text" class="form-control" required>
               </div>
               <div class="form-group">
                 <label for="name">When?</label>
                 <input type="text" class="form-control" required>
               </div>
               <div class="form-group">
                 <label for="name">Where?</label>
                 <input type="text" class="form-control" required>
               </div>
               <button type="submit" class="btn btn-default">Submit</button>
             </form>
           </div>
      `
    })
    .Class({
      constructor: function() {

        // this.model = new app.Activity();
        // console.log(this.model);
      }
      // onSubmit: function(newActivity) {
      //   //add functionality to add facebook username as initiator to newAcitity.initiator
      //   console.log(newActivity);
      //   this.model = new app.Activity();
      //   // we want to call the enterNewActivity here
      // }
    });
})(window.app || (window.app = {}));



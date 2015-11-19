# Angular filter to handle promise status

Code related to the blogpost
http://evgmya.blogspot.com/2015/11/angular-handling-promise-state-using.html

# General usage
Suppose you have a controller action

```javascript
function SubmitController($http) {
  var vm = this;

  vm.submitData = function() {
    return $http.post('....')
      .then(function() {
        //Doing something usefull
      });
  }
}
```
And you want to disable a button that triggers the action and also show some progress. So using the filter your template will look like this
```html
<button 
  ng-disabled='status.inProgress' 
  ng-click='status = (vm.submitData() | promiseStatus)'>Submit</button>
<span class='ng-hide' ng-show='status.inProgress'>Submitting...</span>
<span class='ng-hide' ng-show='status.resolved'>Submitted succsssfully!</span>
<span class='ng-hide' ng-show='status.rejected'>Failed to submit!</span>
```

'use strict';

/* Directives */
dailyOjApp.directive('datepicker', function() {
  return {
   restrict: 'A',
   link: function(scope, elm, attrs, ctrl) {
     var dp = $(elm);

     dp.datepicker({
      format:"yyyy-mm-dd",
      todayBtn:"linked",
      todayHighlight:true
    }).on("changeDate",function(e){
      scope.redirectTo(date);
      dp.datepicker("hide");
      return;
    });

  }
}
})

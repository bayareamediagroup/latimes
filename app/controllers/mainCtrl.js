m.controller("mainCtrl", ["$scope", function($scope) {
    var self = this;
    self.message = "Patrick";

    self.currentConditions = function() {
       this.message = "Anabelle"; 
    };
}]);

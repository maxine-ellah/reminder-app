var app = angular.module('ReminderApp', []);
app.controller('PanelCtrl', function () {
  this.tab = 1;

  this.selectTab = function(setTab) {
    this.tab = setTab;
  };
  this.isSelected = function(checkTab) {
    return this.tab === checkTab;
  };
});

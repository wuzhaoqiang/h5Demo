/**
 * Created by wuzq on 2016/9/15 0015.
 */
angular.module('starter')
  .controller('AccountCtrl', function($scope) {
    console.log("AccountCtrl=====================");
    $scope.settings = {
      enableFriends: true
    };
  });

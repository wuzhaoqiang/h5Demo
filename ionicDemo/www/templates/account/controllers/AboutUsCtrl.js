/**
 * Created by wuzq on 2016/9/26 0026.
 */
angular.module('starter')
  .controller('AboutUsCtrl', function($scope,$state) {
    console.log("AboutUsCtrl=====================");

    $scope.aboutUs = function () {
      console.log("aboutUs=======starting==============");
      $state.go('aboutUs');
      console.log("aboutUs==========end===========");
    }
  });

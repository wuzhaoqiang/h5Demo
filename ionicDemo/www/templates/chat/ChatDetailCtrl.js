/**
 * Created by wuzq on 2016/9/15 0015.
 */
angular.module('starter')
  .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    console.log("ChatDetailCtrl=====================");
    $scope.chat = Chats.get($stateParams.chatId);
  });

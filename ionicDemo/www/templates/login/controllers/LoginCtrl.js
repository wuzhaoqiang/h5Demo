/**
 * Created by wuzq on 2016/9/18 0018.
 */
angular.module('starter')
  .controller('LoginCtrl', function ($scope, $state, $cordovaDevice, LoginService, $ionicHistory, ENV) {
    $scope.mes = "";
    // $scope.ENV = ENV;
    console.log("LoginCtrl=====================");
    $scope.registerClick = function () {
      $state.go('register');
      console.log("register=====================");
    };
    $scope.focusClic     = function () {
      $scope.mes = $cordovaDevice.getUUID();
      console.log("register=====================" + $scope.mes);

    };

    $scope.loginClick = function () {
      console.log("loginClick=====================");

      var url    = ENV.baseUrl + "rs/system/getLoginInfo";
      var method = "POST";
      var data   = {mobile: '17685592085', password: 'a123456', regId: '5a176e6a61eafaac'};
      LoginService.http(url, method, null, data).then(function (callback) {
        console.log(callback);
        if (callback.result.length != 0) {
          $state.go('tab.dash');
          //此段代码是使页面进入下一个页面之后不再返回到该页面
          /**
           * eg: when we login the app from the app login view ,
           * app can not feed back to the login view, it must keep in tab view .
           */
          $ionicHistory.nextViewOptions({
            disableAnimate: true,
            disableBack   : true,
            historyRoot   : true
          });
          // $ionicHistory.clearCache().then(function () {
          //   console.log("缓存已清除");
          //
          // });
        }
      }, function (call) {
        console.log("error" + call);
      })
    }
  });

/**
 * Created by wuzq on 2016/9/19 0019.
 */
angular.module('starter')
  .controller('RegisterCtrl', function ($scope, $state, ENV ,LoginService) {
    console.log("RegisterCtrl=====================");
    //定义初始化数据
    $scope.reg = {
      phone       : "",
      validateCode: "",
      localCode   : "",
      errorMsg:""
    };

    /**
     * 获取验证码
     */
    $scope.getValCode = function () {
      console.log("getValCode()");
      var URL  = ENV.baseUrl + "rs/system/getValidateCodeInfo";
      var data = {"mobile": $scope.reg.phone};
      var method = "POST";
      LoginService.http(URL,method,null,data).then(function (callback) {
        console.log(callback);
        if(callback.result != "" && callback.result != null){
          $scope.reg.localCode = callback.result;
          console.log(callback);
        }
      },function (error) {

      });
    };
    /**
     * 验证注册
     */
    $scope.checkReg = function () {
      console.log($scope.reg.localCode);
      if($scope.reg.localCode==$scope.reg.validateCode){
        var URL  = ENV.baseUrl + "rs/system/getValidateRegister";
        var data = {"mobile": $scope.reg.phone,"validateCode":$scope.reg.validateCode,"regId":'5a176e6a61eafaac'};
        var method = "POST";
        LoginService.http(URL,method,null,data).then(function (callback) {
          console.log(callback);
        },function (error) {

        });
      }else{
        $scope.reg.errorMsg = "输入验证码错误！";
      }

      //$state.go('registerInfo');
      console.log("-->>>wuzq:jump into register info page");
    };
  });

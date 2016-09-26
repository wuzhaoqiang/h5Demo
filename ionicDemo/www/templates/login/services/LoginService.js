/**
 * Created by wuzq on 2016/9/20 0020.
 */
angular.module('starter')
.factory('LoginService',function ($http,$q,$httpParamSerializerJQLike) {
  return{
      http : function(url,method,param,data){
        var deferred=$q.defer();
        $http({
          url:url,
          method: method,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          params:param,
          data: $httpParamSerializerJQLike(data)
        }).success(function(data){
          deferred.resolve(data);
         // console.log(data);

        }).error(function(error){
          deferred.resolve(error);
        }).finally(function() {
          //$scope.$broadcast('scroll.refreshComplete');
        });
        return deferred.promise;
      }
  }

});

angular.module("LpcWebTest2018").service("LpcTranslateService", [
  "$http",
  "$rootScope",
  function($http, $rootScope) {
    var properties,
      setPropertiesUrlImpl = function(url) {
        //TODO
        $http.get(url).success(data => {
          if (localStorage.getItem("locale"))
            $rootScope.locale = localStorage.getItem("locale");
          else $rootScope.locale = Object.keys(data)[1];
          properties = data;
        });
      },
      loadPropertiesImpl = function() {
        //TODO
        return properties;
      };

    return {
      setPropertiesUrl: setPropertiesUrlImpl,
      loadProperties: loadPropertiesImpl
    };
  }
]);

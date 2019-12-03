angular.module("LpcWebTest2018").service("LpcTranslateService", [
  "$http",
  "$rootScope",
  function($http, $rootScope) {
    var propertiesURL,
      setPropertiesUrlImpl = function(url) {
        //TODO
        propertiesURL = url;
      },
      loadPropertiesImpl = function() {
        //TODO
        // send GET request to server
        $http.get(propertiesURL).success(data => {
          $rootScope.locale = localStorage.getItem("locale")
            ? localStorage.getItem("locale")
            : Object.keys(data)[1];
          $rootScope.properties = data;
        });
      };

    return {
      setPropertiesUrl: setPropertiesUrlImpl,
      loadProperties: loadPropertiesImpl
    };
  }
]);

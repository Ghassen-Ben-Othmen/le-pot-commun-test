"use strict";

angular.module("LpcWebTest2018").filter("lpcTranslate", [
  "LpcTranslateService",
  "$rootScope",
  function(LpcTranslateService, $rootScope) {
    //TODO
    // load prperties from server
    LpcTranslateService.loadProperties();
    var filter = function(key, locale) {
      //TODO
      if ($rootScope.properties) return $rootScope.properties[locale][key];
    };
    //TODO
    return filter;
  }
]);

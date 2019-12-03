"use strict";

angular.module("LpcWebTest2018").filter("lpcTranslate", [
  "LpcTranslateService",
  "$rootScope",
  function(LpcTranslateService, $rootScope) {
    //TODO

    var filter = function(key, locale) {
      //TODO
      let properties = LpcTranslateService.loadProperties();
      if (properties) {
        return properties[locale][key];
      }
    };
    //TODO
    return filter;
  }
]);

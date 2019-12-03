"use strict";

angular.module("LpcWebTest2018").run([
  "LpcTranslateService",
  "RESOURCES",
  function(LpcTranslateService, RESOURCES) {
    //TODO
    // set prperties url
    LpcTranslateService.setPropertiesUrl(RESOURCES.PROPERTIES_URL);
  }
]);

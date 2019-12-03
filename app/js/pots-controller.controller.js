"use strict";

angular.module("LpcWebTest2018").controller("PotsController", [
  "$scope",
  "PotsService",
  function($scope, PotsService) {
    //TODO
    PotsService.get().success(data => {
      $scope.pots = data;
    });

    $scope.changeLocale = function(lang) {
      // change language
      $scope.locale = lang;
      localStorage.setItem("locale", lang);
    };
  }
]);

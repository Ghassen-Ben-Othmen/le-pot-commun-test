"use strict";

angular.module("LpcWebTest2018").directive("lpcLazyBackground", [
  function() {
    var lpcLazyBackgroundLink = function(scope, elem, attr) {
      //TODO
      //console.log(scope);
      let node = document.createElement("img");
      node.src = scope["lpcLazyBackground"];
      node.className = "pot-item-img";
      elem[0].appendChild(node);
    };
    return {
      restrict: "A",
      scope: { lpcLazyBackground: "=" },
      link: lpcLazyBackgroundLink
    };
  }
]);

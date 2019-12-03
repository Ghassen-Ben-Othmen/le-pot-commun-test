"use strict";

angular.module("LpcWebTest2018").directive("lpcLazyBackground", [
  function() {
    var lpcLazyBackgroundLink = function(scope, elem, attr) {
      //TODO
      // create loader
      let loader = document.createElement("img");
      loader.src = "/app/img/loading.svg";
      loader.className = "pot-item-img-loader";
      elem[0].appendChild(loader);

      // create img html
      let node = document.createElement("img");
      // remove loader when image is fully loaded!
      node.onload = function() {
        loader.remove();
      };

      // add src to image
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

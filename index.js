(function(){
  angular.module('MyApp',['ngMaterial', 'users'])
      .config(function($mdThemingProvider, $mdIconProvider){
          $mdIconProvider.icon("menu", "./svg/menu.svg", 24);

          $mdThemingProvider.theme('default')
              .primaryPalette('cyan')
              .accentPalette('indigo');
      });
})();

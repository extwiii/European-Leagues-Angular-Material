(function() {
    angular.module('MyApp', ['ngMaterial', 'league'])
        .config(function($mdThemingProvider, $mdIconProvider) {
            $mdIconProvider.icon("menu", "./svg/menu.svg", 24);

            $mdThemingProvider.theme('default')
                .primaryPalette('indigo')
                .accentPalette('pink');
        });
})();

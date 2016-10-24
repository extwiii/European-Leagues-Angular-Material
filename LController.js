(function() {

    angular.module('league')
        .controller('LController', ['lService', '$mdSidenav', LController]);

    function LController(lService, $mdSidenav) {
        var self = this;

        self.url = lService.url;

        var promiseC = lService.getTeams(self.url);
        promiseC.then(function(result) {
            self.teams = result
        })

        self.selectTeam = function(team) {
            self.selected = team;
            var promise = lService.getTeamPlayers(team);
            promise.then(function(result) {
                self.players = result
            })
        }

        self.leagues = lService.leagues;

        self.toggleList = function() {
            $mdSidenav('left').toggle();
        }

        self.selectLeague = function(league) {
            self.selectedLeague = league;
            self.url = lService.setUrl(league.id);
            var promiseT = lService.getTeams(self.url);
            promiseT.then(function(result) {
                self.teams = result
            })
        }
    }
})();

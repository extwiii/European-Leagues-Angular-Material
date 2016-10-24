(function() {
    'use strict'

    angular.module('league')
        .service('lService', ['$http', LService]);

    function LService($http) {
        var url = '';
        var token = '5687c9a26e2d434088ab1df705a0cb25'
        var teams = []
        var players = []

        var setUrl = function(id) {
            return url = 'https://api.football-data.org/v1/competitions/' + id + '/teams';
        }

        var getTeams = function(url) {
            url = url || 'https://api.football-data.org/v1/competitions/398/teams';
            return $http({
                method: 'GET',
                url: url,
                headers: {
                    'X-Auth-Token': token
                }
            }).then(function successCallback(response) {
                teams = []
                for (var i = 0; response.data.teams.length > i; i++) {
                    response.data.teams[i].crestUrl = response.data.teams[i].crestUrl.replace(/^http:\/\//i, 'https://');
                    teams.push(response.data.teams[i])
                }
                return teams
            }, function errorCallback(response) {
                console.log(response.error);
            });

        }

        var getTeamPlayers = function(team) {
            url = team._links.players.href.replace(/^http:\/\//i, 'https://');
            return $http({
                method: 'GET',
                url: url,
                headers: {
                    'X-Auth-Token': token
                }
            }).then(function successCallback(response) {
                players = [];
                for (var j = 0; response.data.players.length > j; j++) {
                    players.push(response.data.players[j])
                }
                return players
            }, function errorCallback(response) {
                console.log(response.error);
            });
        }

        var leagues = [{
            "id": 398,
            "caption": "Premier League",

        }, {
            "id": 399,
            "caption": "La Liga",

        }, {
            "id": 394,
            "caption": "Bundesliga ",
        }, {
            "id": 401,
            "caption": "Serie A",

        }, {
            "id": 396,
            "caption": "Ligue 1",

        }, {
            "id": 402,
            "caption": "P. Liga",

        }, {
            "id": 405,
            "caption": "CL",

        }]

        return {
            getTeams: getTeams,
            getTeamPlayers: getTeamPlayers,
            leagues: leagues,
            setUrl: setUrl
        };
    }
})();

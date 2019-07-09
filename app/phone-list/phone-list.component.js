angular.
    module('phonecatApp').
    component('phoneList', {
        template:
            '<p>Total number of phones: {{$ctrl.phones.length}}</p>' +
            '<ul>' +
            '<li ng-repeat="phone in $ctrl.phones">' +
            '<span>{{phone.name}}</span>' +
            '<p>{{phone.snippet}}</p>' +
            '</li>' +
            '</ul>',
        controller: function PhoneListController() {
            this.phones = [
                {
                    name: 'Nexus S',
                    snippet: 'Fast just got faster with Nexus S.'
                }, {
                    name: 'Motorola XOOM™ with Wi-Fi',
                    snippet: 'The Next, Next Generation tablet.'
                }, {
                    name: 'MOTOROLA XOOM™',
                    snippet: 'The Next, Next Generation tablet.'
                }
            ];
        }
    });

var phonecatApp = angular.
    module('gameList', []);
phonecatApp.controller('GameListController', function PhoneListController($scope, $http) {
    var offset = 0;
    var limit = 30;
    $scope.games = [];
    const baseUrl = "https://www.cmsbetconstruct.com/casino/getGames?partner_id=4&lang=eng&country=AM";
    function getData() {
        let dataUrl = "";
        dataUrl = (limit ? dataUrl + "&limit=" + limit : "") + (offset ? dataUrl + "&offset=" + offset : "");
        let url = baseUrl + dataUrl;
        $http.get(url).then(function (response) {
            if (response && response.data && response.data.games.length) {
                console.log(response.data.games)
                offset += response.data.games.length;
                limit += response.data.games.length;
                $scope.games = $scope.games.concat(response.data.games);
            }
        }).catch(err => {
            console.log("error:" + err.message);
        });
    };
    getData();
    $scope.loadMore = function () {
        getData();
    }
    $scope.IsVisible = true;
    $scope.ShowHide = function () {
        this.background = this.IsVisible = false;
    }
    $scope.query = "";
    $scope.orderProp = {};
});

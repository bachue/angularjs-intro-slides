define(['angular', 'angular_route', 'controllers/controllers', 'services/services'],
    function(angular) {
    return angular.module('MyApp', ['ngRoute', 'controllers', 'services']);
});

require.config({
    paths: {
        angular: '../../js/angular.min',
        angular_route: '../../js/angular-route.min',
        angular_resource: '../../js/angular-resource.min',
        jquery: '../../js/jquery.min',
        domReady: '../../js/domReady.min'
    },
    shim: {
        angular: {
            deps: ['jquery'],
            exports: 'angular'
        },
        angular_resource: ['angular'],
        angular_route: ['angular']
    }
});

require(['angular', 'app', 'domReady', 'jquery', 'angular_route',
    'services/user_service',
    'controllers/root_controller', 'controllers/show_controller', 'controllers/new_controller', 'controllers/edit_controller'],
    function(angular, app, domReady, $) {
        app.config(function($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: 'views/root.html',
                controller: 'RootController',
                resolve: {
                    users: function(UsersLoader) {
                        return UsersLoader();
                    }
                }
            }).when('/new', {
                templateUrl: 'views/new.html',
                controller: 'NewController'
            }).when('/edit/:id', {
                templateUrl: 'views/edit.html',
                controller: 'EditController',
                resolve: {
                    user: function(UserLoader) {
                        return UserLoader();
                    }
                }
            }).when('/:id', {
                templateUrl: 'views/show.html',
                controller: 'ShowController',
                resolve: {
                    user: function(UserLoader) {
                        return UserLoader();
                    }
                }
            }).otherwise({
                redirectTo: '/'
            });
        });
        domReady(function() {
            angular.bootstrap(document, ['MyApp']);
            $('html').addClass('ng-app: MyApp');
        });
});
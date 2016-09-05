var routerApp=angular.module('routerApp',['ui.router']);

routerApp.run(function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});

routerApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('index',{
            url:'/index',
            views:{
                '':{
                    templateUrl:'pages/index.html'
                },
                'topbar@index':{
                    templateUrl:'pages/nav.html'
                },
                'main@index':{
                    templateUrl:'pages/welcome.html'
                },              
            }
        })
        .state('index.usermng',{
            // url:'/usermng',
            views:{
                'main@index':{
                    templateUrl:'pages/usermng.html',
                    // controller:function ($scope,$state) {
                    //     $scope.addUserType=function(argument) {
                    //         $state.go('index.usermng.addUserType');
                    //     }
                    // }
                },
                'leftBar@index.usermng':{
                   templateUrl:'pages/leftbar.html'
                },
                'userMain@index.usermng':{
                   templateUrl:'pages/userwelcome.html'
                },
            }
        })


        .state('index.usermng.hightendusers',{
             url:'/usermng/hightendusers' ,
             views:{
                'userMain@index.usermng':{
                    templateUrl:'pages/hightendusers.html'
                }
            }
        })
        .state('index.usermng.normalusers',{
             url:'/usermng/normalusers' ,
             views:{
                'userMain@index.usermng':{
                    templateUrl:'pages/normalusers.html'
                }
            } 
        })
        .state('index.usermng.slowusers',{
             url:'/usermng/slowusers' ,
             views:{
                'userMain@index.usermng':{
                    templateUrl:'pages/slowusers.html'
                }
            } 
        })
        .state('index.settings',{
            url:'/settings',
            views:{
                'main@index':{
                    template:'这是系统设置'
                }
            }
        });
});
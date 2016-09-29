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
                    templateUrl:'pages/main.html'
                },
                'topbar@index':{
                    templateUrl:'pages/nav.html'
                },
                'main@index':{
                    templateUrl:'pages/welcome.html'
                },              
            }
        })
        .state('usermng',{
            url:'/usermng',
            views:{
                '':{
                    templateUrl:'pages/main.html'
                },
                'topbar@usermng':{
                    templateUrl:'pages/nav.html'
                },
                'main@usermng':{
                    templateUrl:'pages/usermng/usermng.html',
                },
                'leftBar@usermng':{
                   templateUrl:'pages/usermng/leftbar.html'
                },
                'userMain@usermng':{
                   templateUrl:'pages/usermng/hightendusers.html'
                },
            }
        })

        .state('usermng.hightendusers',{
             url:'/hightendusers' ,
             views:{
                'userMain@usermng':{
                    templateUrl:'pages/usermng/hightendusers.html'
                }
            }
        })
        .state('usermng.normalusers',{
             url:'/normalusers' ,
             views:{
                'userMain@usermng':{
                    templateUrl:'pages/usermng/normalusers.html'
                }
            } 
        })
        .state('usermng.slowusers',{
             url:'/slowusers' ,
             views:{
                'userMain@usermng':{
                    templateUrl:'pages/usermng/slowusers.html'
                }
            } 
        })
        .state('settings',{
            url:'/settings',
            views:{
                '':{
                    templateUrl:'pages/main.html'
                },
                'topbar@settings':{
                    templateUrl:'pages/nav.html'
                },
                'main@settings':{
                    template:'<div class="normal-word">这是系统设置</div>'
                }
            }
        });
});
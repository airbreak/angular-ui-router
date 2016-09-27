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
        .state('usermng',{
            url:'/usermng',
            views:{
                '':{
                    templateUrl:'pages/index.html'
                },
                'topbar@usermng':{
                    templateUrl:'pages/nav.html'
                },
                'main@usermng':{
                    templateUrl:'pages/usermng.html',
                },
                'leftBar@usermng':{
                   templateUrl:'pages/leftbar.html'
                },
                'userMain@usermng':{
                   templateUrl:'pages/hightendusers.html'
                },
            }
        })


        .state('usermng.hightendusers',{
             url:'/hightendusers' ,
             views:{
                'userMain@usermng':{
                    templateUrl:'pages/hightendusers.html'
                }
            }
        })
        .state('usermng.normalusers',{
             url:'/normalusers' ,
             views:{
                'userMain@usermng':{
                    templateUrl:'pages/normalusers.html'
                }
            } 
        })
        .state('usermng.slowusers',{
             url:'/slowusers' ,
             views:{
                'userMain@usermng':{
                    templateUrl:'pages/slowusers.html'
                }
            } 
        })
        .state('settings',{
            url:'/settings',
            views:{
                '':{
                    templateUrl:'pages/index.html'
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
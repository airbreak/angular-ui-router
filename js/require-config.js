/**
 * Created by jimmy on 2016/04/26.
 */

requirejs.config({
    baseUrl: '../js',
    paths: {
        angular:'angular.min',
        router:'angular-ui-router',
        prefixfree:'sharecommon/prefixfree.min',
        fastclick:'sharecommon/fastclick',
        iscroll:'sharecommon/iscroll',
        touchslider:'hiworks/touchSlider-lib',
        scale:'hiworks/scale',
        base:'sharecommon/base-1.1',
        myscroll:'hiworks/myscroll',
        home:'hiworks/home',
    },
    shim: {
        angular: {
            exports: 'angular'
        }
        router:{
            steps:['angular'],
            output:'router'
        }
    }
});


require(['home','prefixfree'],function(works){
    var url = window.location.href;
    if(url.indexOf('%2F')>0){
        url=url.replace(/\%2F/g,'\/');
    }
    var reg = /category\/[1-9][0-9]*/g,
        id = url.match(reg)[0].toString().replace(/category\//g,'');
    window.hiworks = new works(window.hisihiUrlObj.link_url,id);
});

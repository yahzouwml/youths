 var global=angular.module('global', []);

 global.config(function($interpolateProvider) {
     $interpolateProvider.startSymbol('//');
     $interpolateProvider.endSymbol('//');
 });

 global.controller('blogCat', function($scope) {
     $scope.category = [{
         "name": "网页设计",
         "aNum": "10"
     }, {
         "name": "电子商务",
         "aNum": "7"
     }, {
         "name": "市场营销",
         "aNum": "19"
     }, {
         "name": "技术",
         "aNum": "21"
     }, {
         "name": "关于经济",
         "aNum": "2"
     }];
 });

global.controller('itnav',function($scope){
    $scope.lists=[
        {
            "name":"博客园",
            "img":"/img/n-1.png",
            "url":"http://www.cnblogs.com",
            "describe":"博客园是一个面向开发者的知识分享社区。自创建以来,博客园一直致力并专注于为开发者打造一个纯净的技术交流社区,推动并帮助开发者通过互联网分享知识,从而让更多"
        },
        {
            "name":"慕课网",
            "img":"/img/n-2.png",
            "url":"http://www.imooc.com",
            "describe":"慕课网(IMOOC)是国内最大的IT技能学习平台。慕课网提供了丰富的移动端开发、php开发、web前端、android开发以及html5等视频教程资源公开课。"
        },
        {
            "name":"csdn",
            "img":"/img/n-3.png",
            "url":"http://www.csdn.net",
            "describe":"CSDN创立于1999年，是中国最大的IT社区和服务平台，为中国的软件开发者和IT从业者提供知识传播、职业发展、软件开发等全生命周期服务，满足他们在职业发展中学习及共享知识和信息、建立职业发展社交圈、通过软件开发实现技术商业化等刚性需求。"
        },
        {
            "name":"开源中国",
            "img":"/img/n-4.png",
            "url":"http://www.cnblogs.com",
            "describe":"博客园是一个面向开发者的知识分享社区。自创建以来,博客园一直致力并专注于为开发者打造一个纯净的技术交流社区,推动并帮助开发者通过互联网分享知识,从而让更多"
        },
        {
            "name":"amaze ui",
            "img":"/img/n-5.png",
            "url":"http://www.amazeui.org",
            "describe":"Amaze UI 是一个移动优先的跨屏前端框架。... Amaze UI 以移动优先(Mobile first)为理念,从小屏逐步扩展到大屏,最终实现所有屏幕适配,适应移动互联潮流。 "
        }
    ];
});
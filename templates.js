angular.module("app.templates", []).run(["$templateCache", function ($templateCache) {
        $templateCache.put("app-templates/demo/demo.html", "<div id=\"demo-css-inject\">\r\n\r\n	<h2>Hello directive!</h2>\r\n\r\n	<button class=\"btn btn-primary\" ng-click=\"vm.demoService.getExcited = !vm.demoService.getExcited\">\r\n		Go ahead, click me - I\'m wired up to ng ready to go!\r\n	</button>\r\n	<div ng-show=\"vm.demoService.getExcited\">\r\n		<h3>Yeeehaww!</h3>\r\n	</div>\r\n<button class=\"btn btn-primary btn-sm\" ng-click=\"vm.callWebApi()\">Call WebApi</button>\r\n</div>");
        $templateCache.put("app-templates/webapi/webapi.tpl.html", "<div>\r\n    <div class=\"h3\">WebApi</div>\r\n    <ul class=\"list-group\">\r\n               <li class=\"list-group-item\">\r\n         <pre> TODO: {{vm.data.todo}} </pre>\r\n       </li>\r\n       <li class=\"list-group-item\">\r\n         <pre> {{vm.state.userDetails}} </pre>\r\n       </li>\r\n    </ul>\r\n</div>");
    }]);

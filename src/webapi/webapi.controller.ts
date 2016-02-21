/// <reference path="../../typings/tsd.d.ts" />
// interface IUserDetails {
//    Id: number;
//    UserName: string;
//    Description: string;
//    Role: string;
//    IsAdmin: boolean;
//    IsSupport: boolean;
//    IsTester: boolean;
// 
// }
// 
// interface IUserDetailsService {
//    getUserDetails: ng.IHttpPromise<IUserDetails>;
// }
// 
angular.module("app").factory("UserDetailsService", function($http: ng.IHttpService) {
    let baseHref = "http://localhost:55693/OTS.UTP/";
    return {
        getUserDetails: () => $http.jsonp(baseHref + "api/User/Details")
    };
});

angular.module("app").controller("WebApiController", function($window: ng.IWindowService) {
    let vm = this;
    vm.state = {};
    vm.data = {};
    // $window.vm = vm;
    let userDetails = {
        UserName: "Peter",
        Description: "Good guy",
        IsAdmin: false,
        IsSupport: true
    };
    vm.state.userDetails = userDetails;
    // console.log("Hello UTP");
    // vm.data.todo = "Fix up the jsonp ressponse";
    // UserDetailsService.getUserDetails().then(response => {
    //     console.log("Back from userDetails with...");
    //     console.log(response);
    //     let userDetails = response.data;
        
    // });

});
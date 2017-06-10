import './app.scss';
export const test01 = {
    template: require('./app.html'),
    controller($scope, $http, HomeService, $translate) {
        this.hello = 'TD Frontend Technical Test';

        var that = this; // your code here
        HomeService.async().then(function (d) {
            $scope.result = d; //response from service
        });
        $scope.formKey = function (value) {
            var temp = value.split(" ");
            temp = temp.join("").toUpperCase();
            return temp;
        }
        $scope.changeLanguage = function (lang) {
            if (lang == "en") {
                $translate.use('en');
            } else {
                $translate.use('de');
            }

        }

    },
    directive: 'collapseWidget'
};

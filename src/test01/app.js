import './app.scss';

export const test01 = {
    template: require('./app.html'),
    controller($scope, $http, $translate, JsonService) {
        $scope.data = "";
        JsonService.async().then(function(d) {
            $scope.data = d; //response from service
        });

        $scope.formKey = function(value) {
            var temp = value.split(" ");
            temp = temp.join("").toUpperCase();
            return temp;
        }

        $scope.changeLanguage = function(lang) {
            if (lang == "en") {
                $translate.use('en');
            } else {
                $translate.use('de');
            }
        }
    }
};
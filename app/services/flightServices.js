/**
 * Created by Amr on 2/7/2015.
 */
flight.service('flightServices', ['$http', '$rootScope',
    function(http, rootScope){

        var options = {
            type: 'GET',
            url: 'https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyDLQxMkWe1rg9w1a1sqXxxObRvYrujjj4w'
        };

        $.ajax(options)
            .then(succeeded)
            .fail(function(){

            });


}]);
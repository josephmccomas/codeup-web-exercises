(function() {
    "use strict";

    // create a circle object

    var circle = {
        radius: 3,
        area: Math.pow(this.radius, 2) * Math.PI,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2

            return this.area; // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            if (doRounding === true) return Math.round(doRounding);
                // Otherwise, output the complete value
            return doRounding;

            console.log("Area of a circle with radius: " + this.radius + ", is: ");
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
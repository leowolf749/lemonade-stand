(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// regarding the assignment for tonight, this is how i would prioritize:

// - (1) take a first stab at components. don't worry about getting them 100% working, but 
//       make a solid attempt. this is the most important part.
// - (2) work on putting together your service (even if only parts of it) and try to get 
//       *data from your service displaying in your components*
// - (3) making buy, next day, etc buttons work
// - (1000) do *not* work on css. i vow you'll have time to work on that later.

// *today's content was complex, in part because there are a lot of parts. you need to 
// study how they interconnect to feel comfortable.* react, vue, and other popular 
// frameworks make an even bigger deal out of components than angular does so this is a big one


const app = angular.module('LemonadeApp', []);

const controllers = [
    require('./controllers/lemonadestand'),
    require('./controllers/resources'),
];

for (let i = 0; i < controllers.length; i++) {
    app.controller(controllers[i].name, controllers[i].func);
};


app.component('dayInfo', {
    templateUrl: 'templates/day-info.html',
    bindings: {
        stats: '<',
    },
    controller: 'LemonadeStandController',
});

app.component('resources', {
    templateUrl: 'templates/resources.html',
    bindings: {
        supplies: '<',
    },
});

const services = [
    require('./services/lemonadeservice'),
    require('./services/resourcesservice'),
];

for (let i = 0; i < services.length; i++) {
    app.factory(services[i].name, services[i].func);
};
},{"./controllers/lemonadestand":2,"./controllers/resources":3,"./services/lemonadeservice":4,"./services/resourcesservice":5}],2:[function(require,module,exports){
module.exports = {
    name: 'LemonadeStandController',
    func: function($scope, LemonadeService) {
        $scope.log = LemonadeService.getLog();

    },
};
},{}],3:[function(require,module,exports){
module.exports = {
    name: 'ResourcesController',
    func: function($scope, ResourcesService) {
        $scope.resources = ResourcesService.getResources();
    },
};
},{}],4:[function(require,module,exports){
module.exports = {
    name: 'LemonadeService',
    func: function () {
        const log = [            
            { label: 'DAY', value: 1},
            { label: 'MONEY', value: '$' + 10},
            { label: 'VISITORS', value: 100},
            { label: 'CUSTOMERS', value: 0},
        ];
    
        return {
            getLog() {
                return log;
            },
        };

    },


}
},{}],5:[function(require,module,exports){
module.exports = {
    name: 'ResourcesService',
    func: function () {
        const resources = [
            {name: 'lemons', stock: 10, price: 2},
            {name: 'sugar', stock: 0, price: 1.25},
            {name: 'ice', stock: 0, price: .50},
            {name: 'cups', stock: 0, price: .10},
        ];

        return {
            getResources() {
                return resources;
            },
        }
    }
}
},{}]},{},[1]);

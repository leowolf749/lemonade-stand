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
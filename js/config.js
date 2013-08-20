/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


/*
 * 
 * Configuring the Require JS 
 */
requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        collections: '../collections',
        models: '../models',
        views: '../views',
        routers: '../routers'
    },
    shim: {  // for those who doesnt support AMD
        'backbone': {
            deps: ['underscore', 'jquery'], //dependencies
            exports: 'Backbone' //exports which keyword
        },
        'underscore': {
            exports: '_'
        }
    }
});
//Call the main.js whuich loads the application
requirejs(['../main'], function() {
});

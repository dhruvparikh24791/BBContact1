/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


define(['jquery', 'underscore', 'backbone', 'text!views/template.html'], // using text plugin of RequireJS
        function($, _, Backbone, http) {
            var ContactView = Backbone.View.extend({
                initialize: function(model) {
                    console.log("Contact View Initialized");
                    this.model = model;
                    this.render();

                },
                el: "#container", // where our contacts will be displayed
                render: function() {
                    var thismodel = this.model;
                    //console.log(thismodel);
                    var compiledTemplate = _.template(http,thismodel.model.toJSON());
                    //console.log("Compliled template " + compiledTemplate);
                    $(this.el).append(compiledTemplate);//add to #container

                }
            });
            return ContactView;
        });
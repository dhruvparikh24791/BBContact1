/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

define(['jquery', 'underscore', 'backbone'],
        function($, _, Backbone) {


            var ContactModel = Backbone.Model.extend({
                initialize: function() {
                    console.log("Model Initialized..");
                    this.on("change:name", function() {
                        console.log("name Changed");
                    });
                },
                defaults: {
                    name: 'NoName',
                    address: 'NoAddress',
                    id: "999"
                }
            });
            

            return ContactModel;

        });


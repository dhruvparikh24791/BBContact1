/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


define(['jquery', 'underscore', 'backbone'],
        function($, _, Backbone) {
            var Directory = Backbone.Collection.extend({
                initialize: function() {
                    console.log("Collection Initialized..");
                },
                comparator: function(collection) { // for sorting by name
                    return(collection.get('name'));
                }
            });
            return Directory;
        });
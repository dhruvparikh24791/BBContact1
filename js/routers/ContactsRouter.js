/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


define(['jquery', 'underscore', 'backbone','views/MasterView'],
        function($, _, Backbone,DirectoryView) {
            var ContactsRouter = Backbone.Router.extend({
                routes: {
                    "search/:text": "searchFilter" //for search
                },
                searchFilter: function(text) {
                    $("#search").val(text);
                    $('.searchByName').trigger("click"); //trigger search button click
                }
            });
            Backbone.history.start();
            return ContactsRouter;
        });
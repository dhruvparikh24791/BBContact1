/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var app;
//get MasterView and Router Initialized
requirejs(['views/MasterView', 'routers/ContactsRouter'],
        function(DirectoryView, ContactsRouter) {
            return (function() {  //this method is called AMD
                console.log("Loaded Everything - Main.js");


                new DirectoryView();//-> gets the collection of contacts made
                new ContactsRouter();//used to initialize router on page
                //Toggling Panels
                $('#addPanel').click(function() {
                    $('#addContact').slideToggle('fast', function() {
                        // Animation complete.
                    });
                });
                $('#searchPanel').click(function() {
                    $('#searchContact').slideToggle('fast', function() {
                        // Animation complete.
                    });
                });
                $('#editPanel').click(function() {
                    $('#editContact').slideToggle('fast', function() {
                        // Animation complete.
                    });
                });
                //Listening to Enter Key
                $("#name").keyup(function(event) {
                    if (event.keyCode === 13) {
                        $("#add").click();
                    }
                });
                $("#address").keyup(function(event) {
                    if (event.keyCode === 13) {
                        $("#add").click();
                    }
                });
                $("#search").keyup(function(event) {
                    if (event.keyCode === 13) {
                        $("#searchbutton").click();
                    }
                });
                $("#nameEdit").keyup(function(event) {
                    if (event.keyCode === 13) {
                        $("#edit").click();
                    }
                });
                $("#addressEdit").keyup(function(event) {
                    if (event.keyCode === 13) {
                        $("#edit").click();
                    }
                });
            })();


        });
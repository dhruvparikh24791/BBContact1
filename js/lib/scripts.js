var APP = APP || {};
APP.DemoModel = Backbone.Model.extend({
    defaults: {
        name: "noName",
        address: "NoAddress"
    },
    validate: function(attr) {
        if (attr.name === "noName")
        {
            console.log("Violation of name attribute");
        }
    },
    initialize: function() {
        console.log("Model initialized");
        this.on("change:name", function(model) {
            console.log("Name changed to " + model.get("name"));
        });
        this.bind("error", function(model, error) {
            alert(error);
        });

    },
    editName: function(newname) {
        this.set({name: newname});
    },
    idAttribute: "_id"

});
APP.DemoView = Backbone.View.extend({
    tagName: "div",
    initialize: function() {
        console.log("View Initialized");
        this.render();
    },
    render: function() {
        var template = _.template($("#templ1").html(), {name: "Dhruv"});
        this.$el.html(template);
    }
});
APP.DemoRouter = Backbone.Router.extend({
    routes: {
        "posts/:id": "getbyID",
        "*action": "getactions"
    },
    getbyID: function getbyID(id) {
        console.log("Get Post by Id = " + id);
    },
    getactions:function getactions(act) {
    console.log("Get Post by Actions = " + act);
}       

});
var appRouter = new APP.DemoRouter();
Backbone.history.start();

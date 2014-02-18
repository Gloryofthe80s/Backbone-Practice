var MainView = Backbone.View.extend({
    tagName: 'div',
    className: 'contact-highlight',

    createTemplate: _.template($('#contact-highlight-template').text()),

    initialize: function(){
        //get the empty tag into the DOM
        this.render();
    },

    render: function(){
        //actually fetch the template
        //insert into page
    }
})
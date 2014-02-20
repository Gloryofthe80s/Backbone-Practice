var MainMenuBar = Backbone.View.extend({
    tagName: 'div',
    className: 'main-menu-bar',

    createTemplate: _.template($('#main-menu-bar-template').text()),

    events: {
    },

    initialize: function(){
        $('.header').html( this.el ); //get the empty tag into the DOM

        this.render();
    },

    render: function(){
        var renderedTemplate = this.createTemplate();
        this.$el.html( renderedTemplate );
    },
})
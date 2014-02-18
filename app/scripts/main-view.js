var MainView = Backbone.View.extend({
    tagName: 'div',
    className: 'contact-highlight',

    createTemplate: _.template($('#contact-highlight-template').text()),

    events: {
        "click": "remove"
    },

    initialize: function(){
        $('.js-main-area').html( this.el );

        this.render();

        this.listenTo(this.model, 'change', this.render) //if the model itself changes, this will be updated
    },
    render: function(){
        var renderedTemplate = this.createTemplate( this.model.attributes );

        this.$el.html( renderedTemplate );
    },

    featureTheContact: function(){
        console.log('you clicked!')
    }
})
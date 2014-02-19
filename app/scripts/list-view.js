var ListView = Backbone.View.extend({
    tagName: 'div',
    className: 'list-item',

    createTemplate: _.template($('#list-item-template').text()),

    events: {
      "click": "featureTheContact"
    },

    initialize: function(){
        $('.js-contact-list').prepend( this.el ); //get the empty tag into the DOM

        this.render();

        this.listenTo(this.model, 'change', this.render) //if the model itself changes, this will be updated
    },

    render: function(){
        var renderedTemplate = this.createTemplate( this.model.attributes );

        this.$el.html( renderedTemplate );
    },

    featureTheContact: function(){
        new MainView( {model: this.model} );
        $( "body" ).animate({scrollTop: $(".contact-highlight").offset().top - 50 }, "slow");
    }
});
var ListView = Backbone.View.extend({
    tagName: 'div',
    className: 'list-item',

    createTemplate: _.template($('#list-item-template').text()),

    initialize: function(){
        $('.js-contact-list').prepend( this.el ); //get the empty tag into the DOM
        this.render();
    },

    render: function(){
        var renderedTemplate = this.createTemplate( this.model.attributes );

        this.$el.html( renderedTemplate );
    }
});
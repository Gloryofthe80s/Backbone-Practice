var Contact = Backbone.Model.extend({
    defaults: {
        name: 'Default contact',
        nemesis: 'Unknown',
        likes: 'Enjoys: long walks on the beach',
        avatar: 'http://www.how-to-draw-cartoons-online.com/image-files/cartoon-whale-10.gif',
        bio: 'Not a real bio.'
    }
});

var ContactsCollection = Backbone.Collection.extend({
    model: Contact //you can actually pass in an array of objects and it will create a collection of those objects in a models array
})
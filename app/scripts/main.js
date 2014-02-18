console.log("Keep trying. You'll get there someday.")

$(document).ready(function(){

    window.contacts = new ContactsCollection( data ); //create the collection and feed it our dummy data

    contacts.each(function(item){    //actually add the elements to the page by running them through the View constructor
        new ListView({model: item });
    })


})
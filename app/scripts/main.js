console.log("Keep trying. You'll get there someday.")

$(document).ready(function(){

    //start the app
    window.contacts = new ContactsCollection(); //make the contacts collection

    new MainMenuBar();

    contacts.fetch({
        success: function(){
            contacts.each(function(item){    //actually add the elements to the page by running them through the View constructor
                new ListView({model: item });
            })
        },
        error: function(){
            console.log('Error with contacts.fetch!')
        }
    })

    $('#theModal').on('click', '#villainSubmit', function(event) {

        var newObj = new Contact({
            name: $('.villain-name-input').val(),
            nemesis: $('.villain-nemesis-input').val(),
            likes: $('.villain-likes-input').val(),
            bio: $('.villain-bio-input').val()
        })

        //add it to the collection
        console.log(newObj);
        contacts.add(newObj);

        //render the new obj
        new ListView({model: newObj});

        //save it
        newObj.save();
    });


});
$(function() {

    console.log("hello");
    
    $('.create-form').on("submit", function(event) {
        event.preventDefault();
        var newBurger = {
            burger_name: $('#burgerSubmit').val().trim(),
            devoured: false
        };
        console.log(newBurger);

        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(
            function() {
                $('#burgerSubmit').val('');
                console.log("New burger created.");
                // location.reload();
            }
        );

        
        location.reload();

    });

    $('.devour').on('click', function(event) {
        var id = $(this).data('id');
        var newDevour = $(this).data('newdevoured');

        var newBurgerState = {
            devoured: newDevour
        };

        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: newBurgerState
        }).then(
            function() {
                console.log("Burger has been devoured.", newDevour);
                location.reload();
            }
        )

    })
    
})
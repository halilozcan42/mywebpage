$(function() {

    function myFunction() {
        var x = document.getElementById("nav-links");
        if (x.className === "responsive") {
            x.className = "";
        } else {
            x.className = "responsive";

        }
    }



    document.getElementById('send-button').addEventListener('click', (e) => {

        let errName = "";

        if ($("#name").val() == "") {
            errName = "<p>This area is required</p>";
        }
        if (errName != "") {
            $("#errName").html(errName);
        }

        $("#name").hover(function() {
            $("#errName").text("");
        });





        e.preventDefault();
    }, );



    /*
        var errName = "";

        $("#send-button").click(function() {
            if ($("#name").val() == "") {
                errName = "<p>This area is required.</p>"
            }

            if (errName != "") {
                $("#errName").html(errName);
            }


            preventDefault();


    });
    */

});



/*
        window.addEventListener('mousemove', function(e) {
            console.log(`x: ${ e.x } | y: ${ e.y }`)
        });
*/
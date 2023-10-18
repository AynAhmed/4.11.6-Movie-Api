$(document).ready(function() {
    var URL = "https://static.codehs.com/api/12345/movies/all";

        // click event for submit button the gets the value inputed
        $("#search").click(function() {
            var movieTitle = $("#movie").val();
            findReleaseDate(movieTitle);
        });


    function findReleaseDate(movie) {
        $.getJSON(URL, function(data) {
        
            var releaseDate = "Release date not found."; 

            // loop through the movies 
            // for (var i = 0; i < data.length; i++) {
            //     if (data[i].name === movie) {
            //         releaseDate = data[i]["release-date"];
            //         break;
            //     }
            // }

            for(var key in data){
                if(data[key].name === movie){
                    releaseDate = data[key]["release-date"]
                    break;
                }
            }

            $("#release-date").text("Release Date: " + releaseDate);
        });
    }

});
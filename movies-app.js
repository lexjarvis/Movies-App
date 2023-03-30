$(document).ready(function () {
    $("#submit-button").click(function () {
        var title = $("#title-input").val();
        var rating = $("#rating-input").val();

        //validate title input
        if (title.length < 2) {
            alert("Title must have at least 2 characters in it!");
            return;
        }
        //validate rating input
        if (rating < 0 || rating > 10) {
            alert("Rating must be between 0 and 10!");
            return;
        }

        //add the title and rating to the DOM
        var movieItem = $("<li>" + title + " - " + rating + "<button class='remove-button'>Remove</button></li>");
        movieItem.addClass("movie-item");
        $("#movie-list").append(movieItem);

        //clear input fields
        $("#title-input").val("");
        $("#rating-input").val("");

        //bind the click event to the remove button
        $(".remove-button").click(function () {
            $(this).parent().remove();
        });
    });

    //sort the movie list by title
    $("#sort-title-asc").click(function () {
        var movieList = $("#movie-list");
        var listItems = movieList.children(".movie-item");

        listItems.sort(function (a, b) {
            var titleA = $(a).text().toUpperCase();
            var titleB = $(b).text().toUpperCase();
            return (titleA < titleB) ? -1 : (titleA > titleB) ? 1 : 0;
        });

        movieList.append(listItems);
    });

    // sort the movie list by title in reverse order
    $("#sort-title-desc").click(function () {
        var movieList = $("#movie-list");
        var listItems = movieList.children(".movie-item");

        listItems.sort(function (a, b) {
            var titleA = $(a).text().toUpperCase();
            var titleB = $(b).text().toUpperCase();
            return (titleA > titleB) ? -1 : (titleA < titleB) ? 1 : 0;
        });

        movieList.append(listItems);
    });

    // Sort the movie list by rating
    $("#sort-rating-asc").click(function () {
        var movieList = $("#movie-list");
        var listItems = movieList.children(".movie-item");

        listItems.sort(function (a, b) {
            var ratingA = parseInt($(a).text().split(" - ")[1]);
            var ratingB = parseInt($(b).text().split(" - ")[1]);
            return ratingA - ratingB;
        });

        movieList.append(listItems);
    });

    // Sort the movie list by rating in reverse order
    $("#sort-rating-desc").click(function () {
        var movieList = $("#movie-list");
        var listItems = movieList.children(".movie-item");

        listItems.sort(function (a, b) {
            var ratingA = parseInt($(a).text().split(" - ")[1]);
            var ratingB = parseInt($(b).text().split(" - ")[1]);
            return ratingB - ratingA;
        });

        movieList.append(listItems);
    });
});
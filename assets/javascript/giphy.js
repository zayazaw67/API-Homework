var topics = ["overwatch", "cats", "warcraft", "ocean"];

// var apiKey = pc2wgwNui7jyP6rmS59xhw4oBClWtnID

function displayTopics() {
    var search = $(this).attr("data-topic");

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=pc2wgwNui7jyP6rmS59xhw4oBClWtnID&q=" + search + "&limit=10&offset=0&rating=PG&lang=en"
    console.log('url we are about ot hit', queryURL)

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        for (var i = 0; i < response.data.length; i++) {
            // create new div to store gifs
            var topicDiv = $("<div>");
            var pic = $('<img>');
            var picStill = response.data[i].images.fixed_height_still.url;
            var picAnimate = response.data[i].images.fixed_height.url;
            // applying attributes to the images to manipulate later
            pic.attr('data-still', picStill);
            pic.attr('data-animate', picAnimate);
            pic.attr('src', picStill);
            // adding class to target manipuation
            pic.attr('class', "topic");
            pic.attr('data-state', "still")
            // grabbing rating for images
            var type = response.data[i].rating;
            var pType = $("<p>").text("rating :" + type);
            topicDiv.append(pType, pic);

            $(".gif-dump").prepend(topicDiv);
        }

    })
};

$(document).on("click", ".topic", function () {
    var state = $(this).attr("data-state");
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});

function showButtons() {
    $(".buttons").empty();
    // loop array
    for (var i = 0; i < topics.length; i++) {
        var a = $("<button>")
        // add button class
        a.addClass("topics-button");
        a.attr("data-topic", topics[i])
        // add topics text to button
        a.text(topics[i]);
        // appends to buttons class
        $(".buttons").append(a);
    }
}

$("#add-topic").on("click", function (event) {
    event.preventDefault();
    // input from text
    var searchedTopic = $("#searched-topics").val().trim();
    // push into array
    topics.push(searchedTopic);
    // calls function to create buttons for input
    showButtons();
});

$(document).on("click", ".topics-button", displayTopics);

showButtons();


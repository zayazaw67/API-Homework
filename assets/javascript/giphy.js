let topics = ["overwatch", "cats", "warcraft", "ocean"]

// let apiKey = pc2wgwNui7jyP6rmS59xhw4oBClWtnID

function displayTopics() {

    let search = $(this).attr("search-name");
    let queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        let topicDiv = $("<div class='topic")
        let rating = response.rating
        let pRating = $("<p>").text("Rating: " + rating);
        topicDiv.append(pRating);

        $(".gif-dump").prepend(topicDiv);
    }
    )
}


function showButtons() {
    // delete movies before adding more
    $(".buttons").empty();
    // loop array
    for (let i = 0; i < topics.length; i++) {
        let a = $("<button>")
        // add button class
        a.addClass("topics-button");
        a.attr("search-name"), topics[i]
        // add topics text to button
        a.text(topics[i]);
        // appends to buttons class
        $(".buttons").append(a);
    }
}

$("#add-topic").on("click", function(event) {
    event.preventDefault();
    // input from text
    let searchedTopic = $("#searched-topics").val().trim();
    // push into array
    topics.push(searchedTopic);
    // calls function to create buttons for input
    showButtons();
});

// $(document).on("click", ".topics-btn", displayTopics);

showButtons();


// add into displayTopics later
        // let rating = response.rating
        // let pRating = $("<p>").text("Rating: " + rating);
        // topicDiv.append(pRating);
        // let rating = response.rating
        // let pRating = $("<p>").text("Rating: " + rating);
        // topicDiv.append(pRating);
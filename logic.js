var workouts = ["Squats", "Pullups", "Lunges"];

function createButton() {
  // No repeat Buttons
  $("#buttons-view").empty();

  for (var i = 0; i < workouts.length; i++) {
    // Dynamically create Button
    var generateButton = $("<button>");
    // add class
    generateButton.addClass("workout");
    // add attribute
    generateButton.attr("data-workout", workouts[i]);
    // button text
    generateButton.text(workouts[i]);
    // Add button to HTML
    $("#buttons-view").append(generateButton);

  }
}

// When button is clicked
$("#add-workout").on("click", function (event) {
  event.preventDefault();

  var workoutType = $("#workout-input").val().trim();
  // adding workout to workouts array
  workouts.push(workoutType);
  createButton();

});
createButton();


// Adding event listener to all buttons
$(document).on("click", ".workout", function () {

  // queryURL with workout in the search
  var workoutVal = $(this).data("workout");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + workoutVal +
                 "&api_key=rAAIhnZOVdDGfx5e7XgcvmVohy8R723d&limit=5";

  // Ajax request
  $.ajax({
    url: queryURL,
    method: "GET"
  })
  // data from the AJAX request comes back
    .then(function (response) {
      var gifArray = response.data;
      for (var i = 0; i < gifArray.length; i++) {
        // Saving the image_original_url and animated property
        var animatedImageUrl = gifArray[i].images.fixed_height.url;
        var stillImageUrl = gifArray[i].images.fixed_height_still.url;

      // Creating and storing an image tag
        var figContainer = $("<figure>");
        var workoutImage = $("<img>");
        var rating = $("<figcaption>");
        var ratingText = gifArray[i].rating !== "" ?
                        gifArray[i].rating.toUpperCase() :
                        "Not rated";

        // Setting the catImage src attribute to imageUrl
        workoutImage.attr("src", stillImageUrl);
        workoutImage.attr("alt", "workout image");
        workoutImage.addClass("gif")
                    .attr("data-state", "still")
                    .attr("data-still", stillImageUrl)
                    .attr("data-animate", animatedImageUrl);
        rating.text("Rated: " + ratingText);
        figContainer.append(workoutImage, rating);

        // prepending img to html gif-appear-here div
        $("#gifs-appear-here").prepend(figContainer);
      }
    });
  });

  // add event listener to dynamically created .gif image buttons
  $(document).on("click", ".gif", function () {
    if ($(this).data("state") === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).data("state", "animated");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).data("state", "still");

    }
  });

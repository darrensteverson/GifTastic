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
$(document).on("click", ".workout");
createButton();




// Adding event listener to all buttons
$(document).on("click", ".workout", function () {

  // queryURL with workout in the search
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=workouts&api_key=rAAIhnZOVdDGfx5e7XgcvmVohy8R723d&limit=5";

  // Ajax request
  $.ajax({
    url: queryURL,
    method: "GET"
  })
  // data from the AJAX request comes back
    .then(function (response) {

      // Saving the image_original_url property
      var imageUrl = response.data.image_original_url;

// Creating and storing an image tag
      var workoutImage = $("<img>");

       // Setting the catImage src attribute to imageUrl
      workoutImage.attr("src", imageUrl);
      workoutImage.attr("alt", "workout image");

      // prepending img to html gif-appear-here div
      $("#gifs-appear-here").prepend(workoutImage);

    });
  });








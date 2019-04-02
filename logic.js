var workouts = ["Squats", "Curls", "Pullups", "Lunges"];

 function createButton (){
// No repeat Buttons
  $("#buttons-view").empty();

  for (var i = 0; i < workouts.length; i++) {
      // Dynamically create Button
      var generateButton = $("<button>");
      // add class
      generateButton.addClass ("workout");
      // add attribute
      generateButton.attr("data-workout", workouts[i]);
      // button text
      generateButton.text(workouts[i]);
      // Add button to HTML
      $("#buttons-view").append(generateButton)

  }
}

// When button is clicked
$("#add-workout").on("click", function (event) {
  event.preventDefault();

  workout = $("#workout-input").val().trim();
// adding workout to workouts array
  workouts.push(workout);
  createButton();

});





 

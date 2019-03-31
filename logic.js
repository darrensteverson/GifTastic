var workouts = ["Squats", "Curls", "Pullups", "Lunges"];

 // Adding click event listen listener to all buttons
 $("add-workout").on("click", function() {
    // Grabbing and storing the data-animal property value from the button
    var workout = $(this).attr("data-workout");

    // Constructing a queryURL using the animal name
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      workout + "&api_key=rAAIhnZOVdDGfx5e7XgcvmVohy8R723d";


 });

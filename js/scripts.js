//business logic
function Movie(movie, time, age, price) {
  this.movie = movie;
  this.time = time;
  this.age = age;
  this.price = price;
}


Movie.prototype.fullMovie = function() {
  return this.movie + " " + this.time + " " + this.age + " " + this.price;
}

function resetFields() {
    $("input#new-movie").val("");
    $("input#new-time").val("");
    $("input.new-age").val("");
}

var price;
function calcPrice(inputtedMovie, inputtedTime, inputtedAge) {
  // debugger;

  if (inputtedAge > 64 || inputtedAge < 10) {
    price = 5;
  }
  else if (inputtedTime < 7) {
    price = 8;
  }
  else {
    price = 12;
  }
  return price;
}

// user interface logic
$(document).ready(function() {
  $("form#user-movie").submit(function(event) {
    event.preventDefault();
    var inputtedMovie = $("#new-movie").val();
    var inputtedTime = parseInt($("#new-time").val());
    var inputtedAge = parseInt($("input#new-age").val());

    var priceOutput = calcPrice(inputtedMovie, inputtedTime, inputtedAge);
    var newMovie = new Movie(inputtedMovie, inputtedTime, inputtedAge, priceOutput);
    $("ul#movies").append("<li><span class='movie'>" + newMovie.movie + "</span></li>");
    console.log(newMovie);
    $(".movie").last().click(function() {
      $("#show-movies").show();
      $("#show-movies h2").text(newMovie.movie);

      $(".new-time").text(newMovie.time + ":00pm");
      $(".new-age").text(newMovie.age);
      $(".new-price").text("$" + newMovie.price + ".00");
    });

    resetFields();
    console.log(price);
  });
});

// document.ready
// $('#mydiv')
//   .css('cursor', 'pointer')
//   .click(
//     function(){
//      alert('Click event is fired');
//     }
//   )
//   .hover(
//     function(){
//       $(this).css('background', 'black');
//     },
//     function(){
//       $(column).css('background', 'red');
//     }
//   );
// function elemen
// for (i = 0; i < columns.length; i++) { 
//     text += [i] + "<br>";
// }

// function
// <div class="column">1</div>
// function myFunction() {
//     document.getElementById("1").click();
// }
// console.log(go)

// var favoriteMovies = ['The Five Obstructions', 'The Triplets of Belleville', 'About Time', 'Two Weeks Notice'];

// console.log('My favorite movies are: ');
// for (var i = 0; i < favoriteMovies.length; i++) {
//   console.log([i + 1] + ". " + favoriteMovies[i]);
// }
var toggleColor = (function(){
    var currentColor = "white";
 
     return function(){
         currentColor = currentColor == "white" ? "magenta" : "white";
         d3.select(this).style("fill", currentColor);
     }
 })();
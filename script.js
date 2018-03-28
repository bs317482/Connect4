// document.ready
// $('#mydiv')
//   .css('cursor', 'pointer')
//   .click(
//     function(){
//      alert('Click event is fired');
//     


let playerOneTurn = true
const placeGamePiece = function(divtochange) {
    if(PlayerOne){
        // change divtochange to Red 
        PlayerOne = false
    } else {
        // change divtochange to black 
        PlayerOneTurn = True
    }
}
$(.1).on('click',function(){
    placeGamePiece(event.target.id)
})
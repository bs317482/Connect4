// document.ready
// $('#mydiv')
//   .css('cursor', 'pointer')
//   .click(
//     function(){
//      alert('Click event is fired');
//     


Let PlayerOneTurn = true
const PlaceGamePiece = function(divtochange) {
    if(PlayerOne){
        change divtochange to Red 
        PlayerOne = false
    } else {
        change divtochange to black 
        PlayerOneTurn = True
    }
}
$(.1).on('click',function()){
    PlaceGamePiece(event.target.id)
})
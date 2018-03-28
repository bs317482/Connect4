// $(.'piece'),on('click', function(){
//     placeGamePiece(event.target.id)
// }

// let playerOneTurn = true
// const placeGamePiece = function(divtochange) {
//     if(PlayerOne){
//         $(this).css('background', 'black')
//         PlayerOne = false
//     } else {
//         $(this).css('background', 'red')
//         PlayerOneTurn = True
//     }
// }
// let player = playerOne
// switchplayer=playerone
// ('click', '.1')
addEventListener(){
    const $piece = $(this.selector);
    
}

$('.1').on('click',function(){
    placeGamePiece(event.target.id)
})

$('.piece').click(function(){

    console.log("IM NOT LEAVING")
    $(this).css('background', 'black')
})

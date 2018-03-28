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


$('.1').on('click',function(){
    placeGamePiece(event.target.id)
})

$('.piece').click(function(){
    console.log("hello world")
    $(this).css('background', 'green')
})
// function chkLine(a,b,c,d) {
//     // Check first cell non-zero and all cells match
//     return ((a != 0) && (a ==b) && (a == c) && (a == d));
// }

// function chkWinner(bd) {
//     // Check down
//     for (r = 0; r < 3; r++)
//         for (c = 0; c < 7; c++)
//             if (chkLine(bd[r][c], bd[r+1][c], bd[r+2][c], bd[r+3][c]))
//                 return bd[r][c];

//     // Check right
//     for (r = 0; r < 6; r++)
//         for (c = 0; c < 4; c++)
//             if (chkLine(bd[r][c], bd[r][c+1], bd[r][c+2], bd[r][c+3]))
//                 return bd[r][c];

//     // Check down-right
//     for (r = 0; r < 3; r++)
//         for (c = 0; c < 4; c++)
//             if (chkLine(bd[r][c], bd[r+1][c+1], bd[r+2][c+2], bd[r+3][c+3]))
//                 return bd[r][c];

//     // Check down-left
//     for (r = 3; r < 6; r++)
//         for (c = 0; c < 4; c++)
//             if (chkLine(bd[r][c], bd[r-1][c+1], bd[r-2][c+2], bd[r-3][c+3]))
//                 return bd[r][c];

//     return 0;
// }
$('.1').on('click', function () {
    placeGamePiece(event.target.id)
})
let banana = [6, "text", 77, 100 ]

console.log(banana)

let color = ['red', 'yellow']

let piece = 0

$('.piece').click(function () {
    let column = $(this).parent().prop("id")
    console.log("column", column)
    console.log("testing stuff", banana[column])
    console.log(banana)

    if (piece % 2 == 0) {
        $(this).css('background', color[0])
        
    } else {
        $(this).css('background', color[1])
        .last(piece)

        
    }


    piece++
    console.log("clicks: ", piece)
})   

// function() {
//     var divselection = $('#2');
//     if 
// }
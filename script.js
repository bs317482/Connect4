
$('.1').on('click', function () {
    placeGamePiece(event.target.id)
})

color = ['red', 'yellow']

let piece = 0

$('.piece').click(function () {
    if (piece % 2 == 0) {
        $(this).css('background', color[0])
    } else {
        $(this).css('background', color[1])
    }

    console.log("color change")
    // $(this).css('background', color[0])
    piece++
    console.log("clicks: ", piece)
})   
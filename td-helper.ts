// Add your code here
namespace tdhelper {

    let _shouldDrawMoneyIcon = false;

    //%block
    export function drawMoneyIcon(on :boolean) {
        _shouldDrawMoneyIcon = on;
    }

    function drawMoneyIconImpl(){
        const s = info.score() | 0;

        let font: image.Font;
        let offsetY: number;
        if (s >= 1000000) {
            offsetY = 2;
            font = image.font5;
        }
        else {
            offsetY = 1;
            font = image.font8;
        }

        const num = s.toString();
        const width = num.length * font.charWidth;
        const start_x = screen.width - width - 2 - 8 
        const start_y = 1

        screen.fillRect(start_x, 0, screen.width - width - 2, image.font8.charHeight + 3, info.borderColor())
        screen.fillRect(start_x + 1, 0, screen.width - width + 10, image.font8.charHeight + 2, 1)
        screen.drawTransparentImage(img`
            . . . b b . . .
            . . b 5 5 b . .
            . b 5 d 1 5 b .
            . b 5 3 1 5 b .
            . c 5 3 1 d c .
            . c 5 1 d d c .
            . . f d d f . .
            . . . f f . . .
        `, start_x, start_y)
    }

    game.onShade(function() {
        if (_shouldDrawMoneyIcon) {
            drawMoneyIconImpl()
        }
    })

}
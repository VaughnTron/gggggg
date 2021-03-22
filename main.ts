enum ActionKind {
    Walking,
    Idle,
    Jumping
}
function CallPlayer1 () {
    let TurtleGreen: animation.Animation = null
    TurtleGreen.addAnimationFrame(img`
        . . . . . 7 7 7 7 7 7 7 . . . . 
        . . . . 7 7 7 7 7 7 7 7 7 . . . 
        . . . . 7 7 7 7 7 7 7 7 7 . . . 
        . . . . 7 7 e e e e e 7 7 . . . 
        . . . e e e e f 4 f e e e e . . 
        . 7 7 e 4 f f f f f f f 4 e 7 7 
        . 7 e f f f 4 f 4 f 4 f f f e 7 
        . 7 e f f 4 4 f f f 4 4 f f e 7 
        . 7 e 4 f f f f 4 f f f f 4 e 7 
        . 7 e f f 4 4 f 4 f 4 4 f f e 7 
        . 7 7 e 4 f f f f f f f 4 e 7 7 
        . 7 7 e e f 4 f 4 f 4 f e e 7 7 
        . . . . e e e e e e e e e . . . 
        . . . . 7 7 7 . . . 7 7 7 . . . 
        . . . . 7 7 7 . . . 7 7 7 . . . 
        . . . . 7 7 7 . . . 7 7 7 . . . 
        `)
    TurtleGreen.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 7 7 2 2 . . . . . 
        . . . . . 7 7 7 7 2 f 7 7 . . . 
        . . . 4 . 7 7 7 7 7 7 7 7 . . . 
        . . 4 f e e 7 7 f f f f f . . . 
        . . f f 4 e 7 7 7 7 7 7 7 . . . 
        . f 4 f e f 7 7 5 e . . . . . . 
        . 4 f 4 e f 7 7 7 7 7 7 7 7 7 . 
        . 4 f 4 e f 7 7 7 7 7 7 7 7 7 . 
        . f 4 f e f 7 7 7 5 . . . . . . 
        . . f f 4 e 7 7 7 e . . . . . . 
        . . 4 f e e 7 7 e 5 . . . . . . 
        . . . 4 . . 7 7 5 5 . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        `)
    TurtleGreen.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 7 7 7 . . . . . . 
        . . . 7 7 f 2 7 7 7 7 . . . . . 
        . . . 7 7 7 7 7 7 7 7 . 4 . . . 
        . . . f f f f f 7 7 e e f 4 . . 
        . . . 7 7 7 7 7 7 7 e 4 f f . . 
        . . . . . . e 5 7 7 f e f 4 f . 
        . 7 7 7 7 7 7 7 7 7 f e 4 f 4 . 
        . 7 7 7 7 7 7 7 7 7 f e 4 f 4 . 
        . . . . . . 5 7 7 7 f e f 4 f . 
        . . . . . . e 7 7 7 e 4 f f . . 
        . . . . . . 5 e 7 7 e e f 4 . . 
        . . . . . . 5 5 7 7 . . 4 . . . 
        . . . . . . . 7 7 7 . . . . . . 
        . . . . . . . 7 7 7 . . . . . . 
        . . . . . . . 7 7 7 . . . . . . 
        `)
    TurtleGreen.addAnimationFrame(img`
        . . . . . 7 7 7 7 7 7 7 . . . . 
        . . . . 7 2 2 7 7 7 2 2 7 . . . 
        . . . . 7 2 f 7 7 7 f 2 7 . . . 
        . . . . 7 7 7 7 7 7 7 7 7 . . . 
        . . . 5 7 7 f f f f f 7 7 5 . . 
        . 7 7 5 5 7 7 7 7 7 7 7 5 5 7 7 
        . 7 5 e e e 5 5 5 5 5 e e e 5 7 
        . 7 5 e 5 5 e e e e e 5 5 e 5 7 
        . 7 e e 5 e e 5 5 5 e e 5 e e 7 
        . 7 5 5 e e 5 5 5 5 5 e e 5 5 7 
        . 7 7 e e 5 e e e e e 5 e e 7 7 
        . 7 7 5 5 e e 5 5 5 e e 5 5 7 7 
        . . . . e e 5 e e e 5 e e . . . 
        . . . . 7 7 7 . . . 7 7 7 . . . 
        . . . . 7 7 7 . . . 7 7 7 . . . 
        . . . . 7 7 7 . . . 7 7 7 . . . 
        `)
    if (TurtleGreen.vx < 0) {
        animation.attachAnimation(TurtleGreen, walking_foward)
        TurtleGreen.addAnimationFrame(img`
            . . . . . 7 7 7 7 7 7 7 . . . . 
            . . . . 7 2 2 7 7 7 2 2 7 . . . 
            . . . . 7 2 f 7 7 7 f 2 7 . . . 
            . . . . 7 7 7 7 7 7 7 7 7 . . . 
            . . . 5 7 7 f f f f f 7 7 5 . . 
            . 7 7 5 5 7 7 7 7 7 7 7 5 5 7 7 
            . 7 5 e e e 5 5 5 5 5 e e e 5 7 
            . 7 5 e 5 5 e e e e e 5 5 e 5 7 
            . 7 e e 5 e e 5 5 5 e e 5 e e 7 
            . 7 5 5 e e 5 5 5 5 5 e e 5 5 7 
            . 7 7 e e 5 e e e e e 5 e e 7 7 
            . 7 7 5 5 e e 5 5 5 e e 5 5 7 7 
            . . . . e e 5 e e e 5 e e . . . 
            . . . . 7 7 7 . . . 7 7 7 . . . 
            . . . . 7 7 7 . . . 7 7 7 . . . 
            . . . . . . . . . . 7 7 7 . . . 
            `)
        TurtleGreen.addAnimationFrame(img`
            . . . . . 7 7 7 7 7 7 7 . . . . 
            . . . . 7 2 2 7 7 7 2 2 7 . . . 
            . . . . 7 2 f 7 7 7 f 2 7 . . . 
            . . . . 7 7 7 7 7 7 7 7 7 . . . 
            . . . 5 7 7 f f f f f 7 7 5 . . 
            . 7 7 5 5 7 7 7 7 7 7 7 5 5 7 7 
            . 7 5 e e e 5 5 5 5 5 e e e 5 7 
            . 7 5 e 5 5 e e e e e 5 5 e 5 7 
            . 7 e e 5 e e 5 5 5 e e 5 e e 7 
            . 7 5 5 e e 5 5 5 5 5 e e 5 5 7 
            . 7 7 e e 5 e e e e e 5 e e 7 7 
            . 7 7 5 5 e e 5 5 5 e e 5 5 7 7 
            . . . . e e 5 e e e 5 e e . . . 
            . . . . 7 7 7 . . . 7 7 7 . . . 
            . . . . 7 7 7 . . . 7 7 7 . . . 
            . . . . 7 7 7 . . . . . . . . . 
            `)
    }
}
function CallPlayer2 () {
    let TurtleBlue: animation.Animation = null
    TurtleBlue.addAnimationFrame(img`
        . . . . . 8 8 8 8 8 8 8 . . . . 
        . . . . 8 8 8 8 8 8 8 8 8 . . . 
        . . . . 8 8 8 8 8 8 8 8 8 . . . 
        . . . . 8 8 e e e e e 8 8 . . . 
        . . . e e e e f 4 f e e e e . . 
        . 8 8 e 4 f f f f f f f 4 e 8 8 
        . 8 e f f f 4 f 4 f 4 f f f e 8 
        . 8 e f f 4 4 f f f 4 4 f f e 8 
        . 8 e 4 f f f f 4 f f f f 4 e 8 
        . 8 e f f 4 4 f 4 f 4 4 f f e 8 
        . 8 8 e 4 f f f f f f f 4 e 8 8 
        . 8 8 e e f 4 f 4 f 4 f e e 8 8 
        . . . . e e e e e e e e e . . . 
        . . . . 8 8 8 . . . 8 8 8 . . . 
        . . . . 8 8 8 . . . 8 8 8 . . . 
        . . . . 8 8 8 . . . 8 8 8 . . . 
        `)
    TurtleBlue.addAnimationFrame(img`
        . . . . . . 8 8 8 8 8 . . . . . 
        . . . . . 8 8 8 8 2 2 8 . . . . 
        . . . . . 8 8 8 8 2 f 8 8 . . . 
        . . . 4 . 8 8 8 8 8 8 8 8 . . . 
        . . 4 f e e 8 8 f f f f f . . . 
        . . f f 4 e 8 8 8 8 8 8 8 . . . 
        . f 4 f e f 8 8 5 e . . . . . . 
        . 4 f 4 e f 8 8 8 8 8 8 8 8 8 . 
        . 4 f 4 e f 8 8 8 8 8 8 8 8 8 . 
        . f 4 f e f 8 8 8 5 . . . . . . 
        . . f f 4 e 8 8 8 e . . . . . . 
        . . 4 f e e 8 8 e 5 . . . . . . 
        . . . 4 . . 8 8 5 5 . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        `)
    TurtleBlue.addAnimationFrame(img`
        . . . . . 8 8 8 8 8 . . . . . . 
        . . . . 8 2 2 8 8 8 8 . . . . . 
        . . . 8 8 f 2 8 8 8 8 . . . . . 
        . . . 8 8 8 8 8 8 8 8 . 4 . . . 
        . . . f f f f f 8 8 e e f 4 . . 
        . . . 8 8 8 8 8 8 8 e 4 f f . . 
        . . . . . . e 5 8 8 f e f 4 f . 
        . 8 8 8 8 8 8 8 8 8 f e 4 f 4 . 
        . 8 8 8 8 8 8 8 8 8 f e 4 f 4 . 
        . . . . . . 5 8 8 8 f e f 4 f . 
        . . . . . . e 8 8 8 e 4 f f . . 
        . . . . . . 5 e 8 8 e e f 4 . . 
        . . . . . . 5 5 8 8 . . 4 . . . 
        . . . . . . . 8 8 8 . . . . . . 
        . . . . . . . 8 8 8 . . . . . . 
        . . . . . . . 8 8 8 . . . . . . 
        `)
    TurtleBlue.addAnimationFrame(img`
        . . . . . 8 8 8 8 8 8 8 . . . . 
        . . . . 8 2 2 8 8 8 2 2 8 . . . 
        . . . . 8 2 f 8 8 8 f 2 8 . . . 
        . . . . 8 8 8 8 8 8 8 8 8 . . . 
        . . . e 8 8 f f f f f 8 8 e . . 
        . 8 8 e 5 8 8 8 8 8 8 8 5 e 8 8 
        . 8 e e e e 5 5 5 5 5 e e e e 8 
        . 8 e e 5 5 e e e e e 5 5 e e 8 
        . 8 e 5 5 e e 5 5 5 e e 5 5 e 8 
        . 8 e 5 e e 5 5 5 5 5 e e 5 e 8 
        . 8 8 e e 5 e e e e e 5 e e 8 8 
        . 8 8 e 5 e e 5 5 5 e e 5 e 8 8 
        . . . . e e e e e e e e e . . . 
        . . . . 8 8 8 . . . 8 8 8 . . . 
        . . . . 8 8 8 . . . 8 8 8 . . . 
        . . . . 8 8 8 . . . 8 8 8 . . . 
        `)
    if (TurtleBlue.vx < 0) {
        animation.attachAnimation(TurtleBlue, walking_foward)
    }
}
let walking_foward: animation.Animation = null
CallPlayer1()
CallPlayer2()

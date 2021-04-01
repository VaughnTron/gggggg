enum ActionKind {
    Walking,
    Idle,
    Jumping,
    Walk_Right,
    Walk_Foward,
    Walk_Back,
    Walk_Left,
    IDLE
}
function CallPlayer3 () {
    Straw = sprites.create(assets.image`Straw`, SpriteKind.Player)
    anim1back = animation.createAnimation(ActionKind.Walk_Back, 175)
    anim1back.addAnimationFrame(assets.image`Straw`)
    anim1back.addAnimationFrame(assets.image`Straw`)
    anim1back.addAnimationFrame(assets.image`Straw`)
    anim1back.addAnimationFrame(assets.image`Straw`)
    animation.attachAnimation(Straw, anim1back)
    anim2foward = animation.createAnimation(ActionKind.Walk_Foward, 175)
    anim2foward.addAnimationFrame()
    anim2foward.addAnimationFrame(img`
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . 2 2 e e e e e 2 2 . . . 
        . . . e e e e f 4 f e e e e . . 
        . 2 2 e 4 f f f f f f f 4 e 2 2 
        . 2 e f f f 4 f 4 f 4 f f f e 2 
        . 2 e f f 4 4 f f f 4 4 f f e 2 
        . 2 e 4 f f f f 4 f f f f 4 e 2 
        . 2 e f f 4 4 f 4 f 4 4 f f e 2 
        . 2 2 e 4 f f f f f f f 4 e 2 2 
        . 2 2 e e f 4 f 4 f 4 f e e 2 2 
        . . . . e e e e e e e e e . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        . . . . 2 2 2 . . . . . . . . . 
        . . . . 2 2 2 . . . . . . . . . 
        `)
    anim2foward.addAnimationFrame(img`
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . 2 2 e e e e e 2 2 . . . 
        . . . e e e e f 4 f e e e e . . 
        . 2 2 e 4 f f f f f f f 4 e 2 2 
        . 2 e f f f 4 f 4 f 4 f f f e 2 
        . 2 e f f 4 4 f f f 4 4 f f e 2 
        . 2 e 4 f f f f 4 f f f f 4 e 2 
        . 2 e f f 4 4 f 4 f 4 4 f f e 2 
        . 2 2 e 4 f f f f f f f 4 e 2 2 
        . 2 2 e e f 4 f 4 f 4 f e e 2 2 
        . . . . e e e e e e e e e . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        `)
    anim2foward.addAnimationFrame(img`
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . 2 2 e e e e e 2 2 . . . 
        . . . e e e e f 4 f e e e e . . 
        . 2 2 e 4 f f f f f f f 4 e 2 2 
        . 2 e f f f 4 f 4 f 4 f f f e 2 
        . 2 e f f 4 4 f f f 4 4 f f e 2 
        . 2 e 4 f f f f 4 f f f f 4 e 2 
        . 2 e f f 4 4 f 4 f 4 4 f f e 2 
        . 2 2 e 4 f f f f f f f 4 e 2 2 
        . 2 2 e e f 4 f 4 f 4 f e e 2 2 
        . . . . e e e e e e e e e . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        . . . . . . . . . . 2 2 2 . . . 
        . . . . . . . . . . 2 2 2 . . . 
        `)
    animation.attachAnimation(Straw, anim2foward)
    anim3right = animation.createAnimation(ActionKind.Walk_Right, 275)
    anim3right.addAnimationFrame(assets.tile`myTile`)
    anim3right.addAnimationFrame(assets.tile`myTile`)
    anim3right.addAnimationFrame(assets.tile`myTile`)
    anim3right.addAnimationFrame(assets.tile`myTile`)
    animation.attachAnimation(Straw, anim3right)
    anim4left = animation.createAnimation(ActionKind.Walk_Left, 275)
    anim4left.addAnimationFrame(assets.image`Straw`)
    anim4left.addAnimationFrame(assets.image`Straw`)
    anim4left.addAnimationFrame(assets.image`Straw`)
    anim4left.addAnimationFrame(assets.image`Straw`)
    animation.attachAnimation(Straw, anim4left)
    anim = animation.createAnimation(ActionKind.IDLE, 275)
    anim.addAnimationFrame(assets.image`Straw`)
    animation.attachAnimation(Straw, anim)
}
function CallPlayer1 () {
    TurtleBlue = sprites.create(img`
        . . . . . 6 6 6 6 6 6 6 . . . . 
        . . . . 6 1 1 6 6 6 1 1 6 . . . 
        . . . . 6 1 f 6 6 6 f 1 6 . . . 
        . . . . 6 6 6 6 6 6 6 6 6 . . . 
        . . . e 6 6 f f f f f 6 6 e . . 
        . 6 6 e 5 6 6 6 6 6 6 6 5 e 6 6 
        . 6 e e e e 5 5 5 5 5 e e e e 6 
        . 6 e e 5 5 e e e e e 5 5 e e 6 
        . 6 e 5 5 e e 5 5 5 e e 5 5 e 6 
        . 6 e 5 e e 5 5 5 5 5 e e 5 e 6 
        . 6 6 e e 5 e e e e e 5 e e 6 6 
        . 6 6 e 5 e e 5 5 5 e e 5 e 6 6 
        . . . . e e e e e e e e e . . . 
        . . . . 6 6 6 . . . 6 6 6 . . . 
        . . . . 6 6 6 . . . 6 6 6 . . . 
        . . . . 6 6 6 . . . 6 6 6 . . . 
        `, SpriteKind.Player)
    anim1back = animation.createAnimation(ActionKind.Walk_Back, 175)
    anim1back.addAnimationFrame(img`
        . . . . . 6 6 6 6 6 6 6 . . . . 
        . . . . 6 1 1 6 6 6 1 1 6 . . . 
        . . . . 6 1 f 6 6 6 f 1 6 . . . 
        . . . . 6 6 6 6 6 6 6 6 6 . . . 
        . . . e 6 6 f f f f f 6 6 e . . 
        . 6 6 e 5 6 6 6 6 6 6 6 5 e 6 6 
        . 6 e e e e 5 5 5 5 5 e e e e 6 
        . 6 e e 5 5 e e e e e 5 5 e e 6 
        . 6 e 5 5 e e 5 5 5 e e 5 5 e 6 
        . 6 e 5 e e 5 5 5 5 5 e e 5 e 6 
        . 6 6 e e 5 e e e e e 5 e e 6 6 
        . 6 6 e 5 e e 5 5 5 e e 5 e 6 6 
        . . . . e e e e e e e e e . . . 
        . . . . 6 6 6 . . . 6 6 6 . . . 
        . . . . 6 6 6 . . . 6 6 6 . . . 
        . . . . 6 6 6 . . . 6 6 6 . . . 
        `)
    anim1back.addAnimationFrame(img`
        . . . . . 6 6 6 6 6 6 6 . . . . 
        . . . . 6 1 1 6 6 6 1 1 6 . . . 
        . . . . 6 1 f 6 6 6 f 1 6 . . . 
        . . . . 6 6 6 6 6 6 6 6 6 . . . 
        . . . e 6 6 f f f f f 6 6 e . . 
        . 6 6 e 5 6 6 6 6 6 6 6 5 e 6 6 
        . 6 e e e e 5 5 5 5 5 e e e e 6 
        . 6 e e 5 5 e e e e e 5 5 e e 6 
        . 6 e 5 5 e e 5 5 5 e e 5 5 e 6 
        . 6 e 5 e e 5 5 5 5 5 e e 5 e 6 
        . 6 6 e e 5 e e e e e 5 e e 6 6 
        . 6 6 e 5 e e 5 5 5 e e 5 e 6 6 
        . . . . e e e e e e e e e . . . 
        . . . . 6 6 6 . . . 6 6 6 . . . 
        . . . . . . . . . . 6 6 6 . . . 
        . . . . . . . . . . 6 6 6 . . . 
        `)
    anim1back.addAnimationFrame(img`
        . . . . . 6 6 6 6 6 6 6 . . . . 
        . . . . 6 1 1 6 6 6 1 1 6 . . . 
        . . . . 6 1 f 6 6 6 f 1 6 . . . 
        . . . . 6 6 6 6 6 6 6 6 6 . . . 
        . . . e 6 6 f f f f f 6 6 e . . 
        . 6 6 e 5 6 6 6 6 6 6 6 5 e 6 6 
        . 6 e e e e 5 5 5 5 5 e e e e 6 
        . 6 e e 5 5 e e e e e 5 5 e e 6 
        . 6 e 5 5 e e 5 5 5 e e 5 5 e 6 
        . 6 e 5 e e 5 5 5 5 5 e e 5 e 6 
        . 6 6 e e 5 e e e e e 5 e e 6 6 
        . 6 6 e 5 e e 5 5 5 e e 5 e 6 6 
        . . . . e e e e e e e e e . . . 
        . . . . 6 6 6 . . . 6 6 6 . . . 
        . . . . 6 6 6 . . . 6 6 6 . . . 
        . . . . 6 6 6 . . . 6 6 6 . . . 
        `)
    anim1back.addAnimationFrame(img`
        . . . . . 6 6 6 6 6 6 6 . . . . 
        . . . . 6 1 1 6 6 6 1 1 6 . . . 
        . . . . 6 1 f 6 6 6 f 1 6 . . . 
        . . . . 6 6 6 6 6 6 6 6 6 . . . 
        . . . e 6 6 f f f f f 6 6 e . . 
        . 6 6 e 5 6 6 6 6 6 6 6 5 e 6 6 
        . 6 e e e e 5 5 5 5 5 e e e e 6 
        . 6 e e 5 5 e e e e e 5 5 e e 6 
        . 6 e 5 5 e e 5 5 5 e e 5 5 e 6 
        . 6 e 5 e e 5 5 5 5 5 e e 5 e 6 
        . 6 6 e e 5 e e e e e 5 e e 6 6 
        . 6 6 e 5 e e 5 5 5 e e 5 e 6 6 
        . . . . e e e e e e e e e . . . 
        . . . . 6 6 6 . . . 6 6 6 . . . 
        . . . . 6 6 6 . . . . . . . . . 
        . . . . 6 6 6 . . . . . . . . . 
        `)
    animation.attachAnimation(TurtleBlue, anim1back)
    anim2foward = animation.createAnimation(ActionKind.Walk_Foward, 175)
    anim2foward.addAnimationFrame(img`
        . . . . . 6 6 6 6 6 6 6 . . . . 
        . . . . 6 6 6 6 6 6 6 6 6 . . . 
        . . . . 6 6 6 6 6 6 6 6 6 . . . 
        . . . . 6 6 e e e e e 6 6 . . . 
        . . . e e e e f 4 f e e e e . . 
        . 6 6 e 4 f f f f f f f 4 e 6 6 
        . 6 e f f f 4 f 4 f 4 f f f e 6 
        . 6 e f f 4 4 f f f 4 4 f f e 6 
        . 6 e 4 f f f f 4 f f f f 4 e 6 
        . 6 e f f 4 4 f 4 f 4 4 f f e 6 
        . 6 6 e 4 f f f f f f f 4 e 6 6 
        . 6 6 e e f 4 f 4 f 4 f e e 6 6 
        . . . . e e e e e e e e e . . . 
        . . . . 6 6 6 . . . 6 6 6 . . . 
        . . . . 6 6 6 . . . 6 6 6 . . . 
        . . . . 6 6 6 . . . 6 6 6 . . . 
        `)
    anim2foward.addAnimationFrame(img`
        . . . . . 6 6 6 6 6 6 6 . . . . 
        . . . . 6 6 6 6 6 6 6 6 6 . . . 
        . . . . 6 6 6 6 6 6 6 6 6 . . . 
        . . . . 6 6 e e e e e 6 6 . . . 
        . . . e e e e f 4 f e e e e . . 
        . 6 6 e 4 f f f f f f f 4 e 6 6 
        . 6 e f f f 4 f 4 f 4 f f f e 6 
        . 6 e f f 4 4 f f f 4 4 f f e 6 
        . 6 e 4 f f f f 4 f f f f 4 e 6 
        . 6 e f f 4 4 f 4 f 4 4 f f e 6 
        . 6 6 e 4 f f f f f f f 4 e 6 6 
        . 6 6 e e f 4 f 4 f 4 f e e 6 6 
        . . . . e e e e e e e e e . . . 
        . . . . 6 6 6 . . . 6 6 6 . . . 
        . . . . 6 6 6 . . . . . . . . . 
        . . . . 6 6 6 . . . . . . . . . 
        `)
    anim2foward.addAnimationFrame(img`
        . . . . . 6 6 6 6 6 6 6 . . . . 
        . . . . 6 6 6 6 6 6 6 6 6 . . . 
        . . . . 6 6 6 6 6 6 6 6 6 . . . 
        . . . . 6 6 e e e e e 6 6 . . . 
        . . . e e e e f 4 f e e e e . . 
        . 6 6 e 4 f f f f f f f 4 e 6 6 
        . 6 e f f f 4 f 4 f 4 f f f e 6 
        . 6 e f f 4 4 f f f 4 4 f f e 6 
        . 6 e 4 f f f f 4 f f f f 4 e 6 
        . 6 e f f 4 4 f 4 f 4 4 f f e 6 
        . 6 6 e 4 f f f f f f f 4 e 6 6 
        . 6 6 e e f 4 f 4 f 4 f e e 6 6 
        . . . . e e e e e e e e e . . . 
        . . . . 6 6 6 . . . 6 6 6 . . . 
        . . . . 6 6 6 . . . 6 6 6 . . . 
        . . . . 6 6 6 . . . 6 6 6 . . . 
        `)
    anim2foward.addAnimationFrame(img`
        . . . . . 6 6 6 6 6 6 6 . . . . 
        . . . . 6 6 6 6 6 6 6 6 6 . . . 
        . . . . 6 6 6 6 6 6 6 6 6 . . . 
        . . . . 6 6 e e e e e 6 6 . . . 
        . . . e e e e f 4 f e e e e . . 
        . 6 6 e 4 f f f f f f f 4 e 6 6 
        . 6 e f f f 4 f 4 f 4 f f f e 6 
        . 6 e f f 4 4 f f f 4 4 f f e 6 
        . 6 e 4 f f f f 4 f f f f 4 e 6 
        . 6 e f f 4 4 f 4 f 4 4 f f e 6 
        . 6 6 e 4 f f f f f f f 4 e 6 6 
        . 6 6 e e f 4 f 4 f 4 f e e 6 6 
        . . . . e e e e e e e e e . . . 
        . . . . 6 6 6 . . . 6 6 6 . . . 
        . . . . . . . . . . 6 6 6 . . . 
        . . . . . . . . . . 6 6 6 . . . 
        `)
    animation.attachAnimation(TurtleBlue, anim2foward)
    anim3right = animation.createAnimation(ActionKind.Walk_Right, 275)
    anim3right.addAnimationFrame(img`
        . . . . . . 6 6 6 6 6 . . . . . 
        . . . . . 6 6 6 6 1 1 6 . . . . 
        . . . . . 6 6 6 6 1 f 6 6 . . . 
        . . . 4 . 6 6 6 6 6 6 6 6 . . . 
        . . 4 f e e 6 6 f f f f f . . . 
        . . f f 4 e 6 6 6 6 6 6 6 . . . 
        . f 4 f e f 6 6 5 e . . . . . . 
        . 4 f 4 e f 6 6 6 6 6 6 6 6 6 . 
        . 4 f 4 e f 6 6 6 6 6 6 6 6 6 . 
        . f 4 f e f 6 6 6 5 . . . . . . 
        . . f f 4 e 6 6 6 e . . . . . . 
        . . 4 f e e 6 6 e 5 . . . . . . 
        . . . 4 . . 6 6 5 5 . . . . . . 
        . . . . . . f 6 6 . . . . . . . 
        . . . . . . f 6 6 . . . . . . . 
        . . . . . . f 6 6 . . . . . . . 
        `)
    anim3right.addAnimationFrame(img`
        . . . . . . 6 6 6 6 6 . . . . . 
        . . . . . 6 6 6 6 1 1 6 . . . . 
        . . . . . 6 6 6 6 1 f 6 6 . . . 
        . . . 4 . 6 6 6 6 6 6 6 6 . . . 
        . . 4 f e e 6 6 f f f f f . . . 
        . . f f 4 e 6 6 6 6 6 6 6 . . . 
        . f 4 f e f 6 6 5 e . . . . . . 
        . 4 f 4 e f 6 6 6 6 6 6 6 6 6 . 
        . 4 f 4 e f 6 6 6 6 6 6 6 6 6 . 
        . f 4 f e f 6 6 6 5 . . . . . . 
        . . f f 4 e 6 6 6 e . . . . . . 
        . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
        . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
        . . f f f f 6 6 6 6 6 6 6 6 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    anim3right.addAnimationFrame(img`
        . . . . . . 6 6 6 6 6 . . . . . 
        . . . . . 6 6 6 6 1 1 6 . . . . 
        . . . . . 6 6 6 6 1 f 6 6 . . . 
        . . . 4 . 6 6 6 6 6 6 6 6 . . . 
        . . 4 f e e 6 6 f f f f f . . . 
        . . f f 4 e 6 6 6 6 6 6 6 . . . 
        . f 4 f e f 6 6 5 e . . . . . . 
        . 4 f 4 e f 6 6 6 6 6 6 6 6 6 . 
        . 4 f 4 e f 6 6 6 6 6 6 6 6 6 . 
        . f 4 f e f 6 6 6 5 . . . . . . 
        . . f f 4 e 6 6 6 e . . . . . . 
        . . 4 f e e 6 6 e 5 . . . . . . 
        . . . 4 . . 6 6 5 5 . . . . . . 
        . . . . . . f 6 6 . . . . . . . 
        . . . . . . f 6 6 . . . . . . . 
        . . . . . . f 6 6 . . . . . . . 
        `)
    anim3right.addAnimationFrame(img`
        . . . . . . 6 6 6 6 6 . . . . . 
        . . . . . 6 6 6 6 1 1 6 . . . . 
        . . . . . 6 6 6 6 1 f 6 6 . . . 
        . . . 4 . 6 6 6 6 6 6 6 6 . . . 
        . . 4 f e e 6 6 f f f f f . . . 
        . . f f 4 e 6 6 6 6 6 6 6 . . . 
        . f 4 f e f 6 6 5 e . . . . . . 
        . 4 f 4 e f 6 6 6 6 6 6 6 6 6 . 
        . 4 f 4 e f 6 6 6 6 6 6 6 6 6 . 
        . f 4 f e f 6 6 6 5 . . . . . . 
        . . f f 4 e 6 6 6 e . . . . . . 
        . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
        . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
        . . 6 6 6 6 6 6 6 6 f f f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    animation.attachAnimation(TurtleBlue, anim3right)
    anim4left = animation.createAnimation(ActionKind.Walk_Left, 275)
    anim4left.addAnimationFrame(img`
        . . . . . 6 6 6 6 6 . . . . . . 
        . . . . 6 1 1 6 6 6 6 . . . . . 
        . . . 6 6 f 1 6 6 6 6 . . . . . 
        . . . 6 6 6 6 6 6 6 6 . 4 . . . 
        . . . f f f f f 6 6 e e f 4 . . 
        . . . 6 6 6 6 6 6 6 e 4 f f . . 
        . . . . . . e 5 6 6 f e f 4 f . 
        . 6 6 6 6 6 6 6 6 6 f e 4 f 4 . 
        . 6 6 6 6 6 6 6 6 6 f e 4 f 4 . 
        . . . . . . 5 6 6 6 f e f 4 f . 
        . . . . . . e 6 6 6 e 4 f f . . 
        . . . . . . 5 e 6 6 e e f 4 . . 
        . . . . . . 5 5 6 6 . . 4 . . . 
        . . . . . . . 6 6 f . . . . . . 
        . . . . . . . 6 6 f . . . . . . 
        . . . . . . . 6 6 f . . . . . . 
        `)
    anim4left.addAnimationFrame(img`
        . . . . . 6 6 6 6 6 . . . . . . 
        . . . . 6 1 1 6 6 6 6 . . . . . 
        . . . 6 6 f 1 6 6 6 6 . . . . . 
        . . . 6 6 6 6 6 6 6 6 . 4 . . . 
        . . . f f f f f 6 6 e e f 4 . . 
        . . . 6 6 6 6 6 6 6 e 4 f f . . 
        . . . . . . e 5 6 6 f e f 4 f . 
        . 6 6 6 6 6 6 6 6 6 f e 4 f 4 . 
        . 6 6 6 6 6 6 6 6 6 f e 4 f 4 . 
        . . . . . . 5 6 6 6 f e f 4 f . 
        . . . . . . e 6 6 6 e 4 f f . . 
        . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
        . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
        . . 6 6 6 6 6 6 6 6 f f f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    anim4left.addAnimationFrame(img`
        . . . . . 6 6 6 6 6 . . . . . . 
        . . . . 6 1 1 6 6 6 6 . . . . . 
        . . . 6 6 f 1 6 6 6 6 . . . . . 
        . . . 6 6 6 6 6 6 6 6 . 4 . . . 
        . . . f f f f f 6 6 e e f 4 . . 
        . . . 6 6 6 6 6 6 6 e 4 f f . . 
        . . . . . . e 5 6 6 f e f 4 f . 
        . 6 6 6 6 6 6 6 6 6 f e 4 f 4 . 
        . 6 6 6 6 6 6 6 6 6 f e 4 f 4 . 
        . . . . . . 5 6 6 6 f e f 4 f . 
        . . . . . . e 6 6 6 e 4 f f . . 
        . . . . . . 5 e 6 6 e e f 4 . . 
        . . . . . . 5 5 6 6 . . 4 . . . 
        . . . . . . . 6 6 f . . . . . . 
        . . . . . . . 6 6 f . . . . . . 
        . . . . . . . 6 6 f . . . . . . 
        `)
    anim4left.addAnimationFrame(img`
        . . . . . 6 6 6 6 6 . . . . . . 
        . . . . 6 1 1 6 6 6 6 . . . . . 
        . . . 6 6 f 1 6 6 6 6 . . . . . 
        . . . 6 6 6 6 6 6 6 6 . 4 . . . 
        . . . f f f f f 6 6 e e f 4 . . 
        . . . 6 6 6 6 6 6 6 e 4 f f . . 
        . . . . . . e 5 6 6 f e f 4 f . 
        . 6 6 6 6 6 6 6 6 6 f e 4 f 4 . 
        . 6 6 6 6 6 6 6 6 6 f e 4 f 4 . 
        . . . . . . 5 6 6 6 f e f 4 f . 
        . . . . . . e 6 6 6 e 4 f f . . 
        . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
        . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
        . . f f f f 6 6 6 6 6 6 6 6 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    animation.attachAnimation(TurtleBlue, anim4left)
    anim = animation.createAnimation(ActionKind.IDLE, 275)
    anim.addAnimationFrame(img`
        . . . . . 6 6 6 6 6 6 6 . . . . 
        . . . . 6 1 1 6 6 6 1 1 6 . . . 
        . . . . 6 1 f 6 6 6 f 1 6 . . . 
        . . . . 6 6 6 6 6 6 6 6 6 . . . 
        . . . e 6 6 f f f f f 6 6 e . . 
        . 6 6 e 5 6 6 6 6 6 6 6 5 e 6 6 
        . 6 e e e e 5 5 5 5 5 e e e e 6 
        . 6 e e 5 5 e e e e e 5 5 e e 6 
        . 6 e 5 5 e e 5 5 5 e e 5 5 e 6 
        . 6 e 5 e e 5 5 5 5 5 e e 5 e 6 
        . 6 6 e e 5 e e e e e 5 e e 6 6 
        . 6 6 e 5 e e 5 5 5 e e 5 e 6 6 
        . . . . e e e e e e e e e . . . 
        . . . . 6 6 6 . . . 6 6 6 . . . 
        . . . . 6 6 6 . . . 6 6 6 . . . 
        . . . . 6 6 6 . . . 6 6 6 . . . 
        `)
    animation.attachAnimation(TurtleBlue, anim)
}
function CallPlayer2 () {
    TurtleRed = sprites.create(img`
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . . 2 1 1 2 2 2 1 1 2 . . . 
        . . . . 2 1 f 2 2 2 f 1 2 . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . e 2 2 f f f f f 2 2 e . . 
        . 2 2 e 5 2 2 1 2 1 2 2 5 e 2 2 
        . 2 e e e e 5 5 5 5 5 e e e e 2 
        . 2 e e 5 5 e e e e e 5 5 e e 2 
        . 2 e 5 5 e e 5 5 5 e e 5 5 e 2 
        . 2 e 5 e e 5 5 5 5 5 e e 5 e 2 
        . 2 2 e e 5 e e e e e 5 e e 2 2 
        . 2 2 e 5 e e 5 5 5 e e 5 e 2 2 
        . . . . e e e e e e e e e . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        `, SpriteKind.Player)
    anim1back = animation.createAnimation(ActionKind.Walk_Back, 175)
    anim1back.addAnimationFrame(img`
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . . 2 1 1 2 2 2 1 1 2 . . . 
        . . . . 2 1 f 2 2 2 f 1 2 . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . e 2 2 f f f f f 2 2 e . . 
        . 2 2 e 5 2 2 1 2 1 2 2 5 e 2 2 
        . 2 e e e e 5 5 5 5 5 e e e e 2 
        . 2 e e 5 5 e e e e e 5 5 e e 2 
        . 2 e 5 5 e e 5 5 5 e e 5 5 e 2 
        . 2 e 5 e e 5 5 5 5 5 e e 5 e 2 
        . 2 2 e e 5 e e e e e 5 e e 2 2 
        . 2 2 e 5 e e 5 5 5 e e 5 e 2 2 
        . . . . e e e e e e e e e . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        `)
    anim1back.addAnimationFrame(img`
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . . 2 1 1 2 2 2 1 1 2 . . . 
        . . . . 2 1 f 2 2 2 f 1 2 . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . e 2 2 f f f f f 2 2 e . . 
        . 2 2 e 5 2 2 1 2 1 2 2 5 e 2 2 
        . 2 e e e e 5 5 5 5 5 e e e e 2 
        . 2 e e 5 5 e e e e e 5 5 e e 2 
        . 2 e 5 5 e e 5 5 5 e e 5 5 e 2 
        . 2 e 5 e e 5 5 5 5 5 e e 5 e 2 
        . 2 2 e e 5 e e e e e 5 e e 2 2 
        . 2 2 e 5 e e 5 5 5 e e 5 e 2 2 
        . . . . e e e e e e e e e . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        . . . . . . . . . . 2 2 2 . . . 
        . . . . . . . . . . 2 2 2 . . . 
        `)
    anim1back.addAnimationFrame(img`
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . . 2 1 1 2 2 2 1 1 2 . . . 
        . . . . 2 1 f 2 2 2 f 1 2 . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . e 2 2 f f f f f 2 2 e . . 
        . 2 2 e 5 2 2 1 2 1 2 2 5 e 2 2 
        . 2 e e e e 5 5 5 5 5 e e e e 2 
        . 2 e e 5 5 e e e e e 5 5 e e 2 
        . 2 e 5 5 e e 5 5 5 e e 5 5 e 2 
        . 2 e 5 e e 5 5 5 5 5 e e 5 e 2 
        . 2 2 e e 5 e e e e e 5 e e 2 2 
        . 2 2 e 5 e e 5 5 5 e e 5 e 2 2 
        . . . . e e e e e e e e e . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        `)
    anim1back.addAnimationFrame(img`
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . . 2 1 1 2 2 2 1 1 2 . . . 
        . . . . 2 1 f 2 2 2 f 1 2 . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . e 2 2 f f f f f 2 2 e . . 
        . 2 2 e 5 2 2 1 2 1 2 2 5 e 2 2 
        . 2 e e e e 5 5 5 5 5 e e e e 2 
        . 2 e e 5 5 e e e e e 5 5 e e 2 
        . 2 e 5 5 e e 5 5 5 e e 5 5 e 2 
        . 2 e 5 e e 5 5 5 5 5 e e 5 e 2 
        . 2 2 e e 5 e e e e e 5 e e 2 2 
        . 2 2 e 5 e e 5 5 5 e e 5 e 2 2 
        . . . . e e e e e e e e e . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        . . . . 2 2 2 . . . . . . . . . 
        . . . . 2 2 2 . . . . . . . . . 
        `)
    animation.attachAnimation(TurtleRed, anim1back)
    anim2foward = animation.createAnimation(ActionKind.Walk_Foward, 175)
    anim2foward.addAnimationFrame(img`
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . 2 2 e e e e e 2 2 . . . 
        . . . e e e e f 4 f e e e e . . 
        . 2 2 e 4 f f f f f f f 4 e 2 2 
        . 2 e f f f 4 f 4 f 4 f f f e 2 
        . 2 e f f 4 4 f f f 4 4 f f e 2 
        . 2 e 4 f f f f 4 f f f f 4 e 2 
        . 2 e f f 4 4 f 4 f 4 4 f f e 2 
        . 2 2 e 4 f f f f f f f 4 e 2 2 
        . 2 2 e e f 4 f 4 f 4 f e e 2 2 
        . . . . e e e e e e e e e . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        `)
    anim2foward.addAnimationFrame(img`
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . 2 2 e e e e e 2 2 . . . 
        . . . e e e e f 4 f e e e e . . 
        . 2 2 e 4 f f f f f f f 4 e 2 2 
        . 2 e f f f 4 f 4 f 4 f f f e 2 
        . 2 e f f 4 4 f f f 4 4 f f e 2 
        . 2 e 4 f f f f 4 f f f f 4 e 2 
        . 2 e f f 4 4 f 4 f 4 4 f f e 2 
        . 2 2 e 4 f f f f f f f 4 e 2 2 
        . 2 2 e e f 4 f 4 f 4 f e e 2 2 
        . . . . e e e e e e e e e . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        . . . . 2 2 2 . . . . . . . . . 
        . . . . 2 2 2 . . . . . . . . . 
        `)
    anim2foward.addAnimationFrame(img`
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . 2 2 e e e e e 2 2 . . . 
        . . . e e e e f 4 f e e e e . . 
        . 2 2 e 4 f f f f f f f 4 e 2 2 
        . 2 e f f f 4 f 4 f 4 f f f e 2 
        . 2 e f f 4 4 f f f 4 4 f f e 2 
        . 2 e 4 f f f f 4 f f f f 4 e 2 
        . 2 e f f 4 4 f 4 f 4 4 f f e 2 
        . 2 2 e 4 f f f f f f f 4 e 2 2 
        . 2 2 e e f 4 f 4 f 4 f e e 2 2 
        . . . . e e e e e e e e e . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        `)
    anim2foward.addAnimationFrame(img`
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . 2 2 e e e e e 2 2 . . . 
        . . . e e e e f 4 f e e e e . . 
        . 2 2 e 4 f f f f f f f 4 e 2 2 
        . 2 e f f f 4 f 4 f 4 f f f e 2 
        . 2 e f f 4 4 f f f 4 4 f f e 2 
        . 2 e 4 f f f f 4 f f f f 4 e 2 
        . 2 e f f 4 4 f 4 f 4 4 f f e 2 
        . 2 2 e 4 f f f f f f f 4 e 2 2 
        . 2 2 e e f 4 f 4 f 4 f e e 2 2 
        . . . . e e e e e e e e e . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        . . . . . . . . . . 2 2 2 . . . 
        . . . . . . . . . . 2 2 2 . . . 
        `)
    animation.attachAnimation(TurtleRed, anim2foward)
    anim3right = animation.createAnimation(ActionKind.Walk_Right, 275)
    anim3right.addAnimationFrame(img`
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 1 1 2 . . . . 
        . . . . . 2 2 2 2 1 f 2 2 . . . 
        . . . 4 . 2 2 2 2 2 2 2 2 . . . 
        . . 4 f e e 2 2 f f f f f . . . 
        . . f f 4 e 2 2 2 2 2 2 2 . . . 
        . f 4 f e f 2 2 5 e . . . . . . 
        . 4 f 4 e f 2 2 2 2 2 2 2 2 2 . 
        . 4 f 4 e f 2 2 2 2 2 2 2 2 2 . 
        . f 4 f e f 2 2 2 5 . . . . . . 
        . . f f 4 e 2 2 2 e . . . . . . 
        . . 4 f e e 2 2 e 5 . . . . . . 
        . . . 4 . . 2 2 5 5 . . . . . . 
        . . . . . . f 2 2 . . . . . . . 
        . . . . . . f 2 2 . . . . . . . 
        . . . . . . f 2 2 . . . . . . . 
        `)
    anim3right.addAnimationFrame(img`
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 1 1 2 . . . . 
        . . . . . 2 2 2 2 1 f 2 2 . . . 
        . . . 4 . 2 2 2 2 2 2 2 2 . . . 
        . . 4 f e e 2 2 f f f f f . . . 
        . . f f 4 e 2 2 2 2 2 2 2 . . . 
        . f 4 f e f 2 2 5 e . . . . . . 
        . 4 f 4 e f 2 2 2 2 2 2 2 2 2 . 
        . 4 f 4 e f 2 2 2 2 2 2 2 2 2 . 
        . f 4 f e f 2 2 2 5 . . . . . . 
        . . f f 4 e 2 2 2 e . . . . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . f f f f 2 2 2 2 2 2 2 2 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    anim3right.addAnimationFrame(img`
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 1 1 2 . . . . 
        . . . . . 2 2 2 2 1 f 2 2 . . . 
        . . . 4 . 2 2 2 2 2 2 2 2 . . . 
        . . 4 f e e 2 2 f f f f f . . . 
        . . f f 4 e 2 2 2 2 2 2 2 . . . 
        . f 4 f e f 2 2 5 e . . . . . . 
        . 4 f 4 e f 2 2 2 2 2 2 2 2 2 . 
        . 4 f 4 e f 2 2 2 2 2 2 2 2 2 . 
        . f 4 f e f 2 2 2 5 . . . . . . 
        . . f f 4 e 2 2 2 e . . . . . . 
        . . 4 f e e 2 2 e 5 . . . . . . 
        . . . 4 . . 2 2 5 5 . . . . . . 
        . . . . . . f 2 2 . . . . . . . 
        . . . . . . f 2 2 . . . . . . . 
        . . . . . . f 2 2 . . . . . . . 
        `)
    anim3right.addAnimationFrame(img`
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 1 1 2 . . . . 
        . . . . . 2 2 2 2 1 f 2 2 . . . 
        . . . 4 . 2 2 2 2 2 2 2 2 . . . 
        . . 4 f e e 2 2 f f f f f . . . 
        . . f f 4 e 2 2 2 2 2 2 2 . . . 
        . f 4 f e f 2 2 5 e . . . . . . 
        . 4 f 4 e f 2 2 2 2 2 2 2 2 2 . 
        . 4 f 4 e f 2 2 2 2 2 2 2 2 2 . 
        . f 4 f e f 2 2 2 5 . . . . . . 
        . . f f 4 e 2 2 2 e . . . . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 f f f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    animation.attachAnimation(TurtleRed, anim3right)
    anim4left = animation.createAnimation(ActionKind.Walk_Left, 275)
    anim4left.addAnimationFrame(img`
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . 2 1 1 2 2 2 2 . . . . . 
        . . . 2 2 f 1 2 2 2 2 . . . . . 
        . . . 2 2 2 2 2 2 2 2 . 4 . . . 
        . . . f f f f f 2 2 e e f 4 . . 
        . . . 2 2 2 2 2 2 2 e 4 f f . . 
        . . . . . . e 5 2 2 f e f 4 f . 
        . 2 2 2 2 2 2 2 2 2 f e 4 f 4 . 
        . 2 2 2 2 2 2 2 2 2 f e 4 f 4 . 
        . . . . . . 5 2 2 2 f e f 4 f . 
        . . . . . . e 2 2 2 e 4 f f . . 
        . . . . . . 5 e 2 2 e e f 4 . . 
        . . . . . . 5 5 2 2 . . 4 . . . 
        . . . . . . . 2 2 f . . . . . . 
        . . . . . . . 2 2 f . . . . . . 
        . . . . . . . 2 2 f . . . . . . 
        `)
    anim4left.addAnimationFrame(img`
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . 2 1 1 2 2 2 2 . . . . . 
        . . . 2 2 f 1 2 2 2 2 . . . . . 
        . . . 2 2 2 2 2 2 2 2 . 4 . . . 
        . . . f f f f f 2 2 e e f 4 . . 
        . . . 2 2 2 2 2 2 2 e 4 f f . . 
        . . . . . . e 5 2 2 f e f 4 f . 
        . 2 2 2 2 2 2 2 2 2 f e 4 f 4 . 
        . 2 2 2 2 2 2 2 2 2 f e 4 f 4 . 
        . . . . . . 5 2 2 2 f e f 4 f . 
        . . . . . . e 2 2 2 e 4 f f . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 f f f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    anim4left.addAnimationFrame(img`
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . 2 1 1 2 2 2 2 . . . . . 
        . . . 2 2 f 1 2 2 2 2 . . . . . 
        . . . 2 2 2 2 2 2 2 2 . 4 . . . 
        . . . f f f f f 2 2 e e f 4 . . 
        . . . 2 2 2 2 2 2 2 e 4 f f . . 
        . . . . . . e 5 2 2 f e f 4 f . 
        . 2 2 2 2 2 2 2 2 2 f e 4 f 4 . 
        . 2 2 2 2 2 2 2 2 2 f e 4 f 4 . 
        . . . . . . 5 2 2 2 f e f 4 f . 
        . . . . . . e 2 2 2 e 4 f f . . 
        . . . . . . 5 e 2 2 e e f 4 . . 
        . . . . . . 5 5 2 2 . . 4 . . . 
        . . . . . . . 2 2 f . . . . . . 
        . . . . . . . 2 2 f . . . . . . 
        . . . . . . . 2 2 f . . . . . . 
        `)
    anim4left.addAnimationFrame(img`
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . 2 1 1 2 2 2 2 . . . . . 
        . . . 2 2 f 1 2 2 2 2 . . . . . 
        . . . 2 2 2 2 2 2 2 2 . 4 . . . 
        . . . f f f f f 2 2 e e f 4 . . 
        . . . 2 2 2 2 2 2 2 e 4 f f . . 
        . . . . . . e 5 2 2 f e f 4 f . 
        . 2 2 2 2 2 2 2 2 2 f e 4 f 4 . 
        . 2 2 2 2 2 2 2 2 2 f e 4 f 4 . 
        . . . . . . 5 2 2 2 f e f 4 f . 
        . . . . . . e 2 2 2 e 4 f f . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . f f f f 2 2 2 2 2 2 2 2 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    animation.attachAnimation(TurtleRed, anim4left)
    anim = animation.createAnimation(ActionKind.IDLE, 275)
    anim.addAnimationFrame(img`
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . . 2 1 1 2 2 2 1 1 2 . . . 
        . . . . 2 1 f 2 2 2 f 1 2 . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . e 2 2 f f f f f 2 2 e . . 
        . 2 2 e 5 2 2 1 2 1 2 2 5 e 2 2 
        . 2 e e e e 5 5 5 5 5 e e e e 2 
        . 2 e e 5 5 e e e e e 5 5 e e 2 
        . 2 e 5 5 e e 5 5 5 e e 5 5 e 2 
        . 2 e 5 e e 5 5 5 5 5 e e 5 e 2 
        . 2 2 e e 5 e e e e e 5 e e 2 2 
        . 2 2 e 5 e e 5 5 5 e e 5 e 2 2 
        . . . . e e e e e e e e e . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        `)
    animation.attachAnimation(TurtleRed, anim)
}
let anim: animation.Animation = null
let anim4left: animation.Animation = null
let anim3right: animation.Animation = null
let anim2foward: animation.Animation = null
let anim1back: animation.Animation = null
let Straw: Sprite = null
let TurtleBlue: Sprite = null
let TurtleRed: Sprite = null
CallPlayer1()
CallPlayer2()
tiles.setTilemap(tilemap`level1`)
controller.moveSprite(TurtleRed)
controller.player2.moveSprite(TurtleBlue)
forever(function () {
    if (controller.player1.isPressed(ControllerButton.Down)) {
        animation.setAction(TurtleRed, ActionKind.Walk_Back)
        TurtleRed.vy += -1.5
    } else if (controller.player1.isPressed(ControllerButton.Up)) {
        animation.setAction(TurtleRed, ActionKind.Walk_Foward)
        TurtleRed.vy += -1.5
    } else if (controller.player1.isPressed(ControllerButton.Right)) {
        animation.setAction(TurtleRed, ActionKind.Walk_Right)
        TurtleRed.vx += -1.5
    } else if (controller.player1.isPressed(ControllerButton.Left)) {
        animation.setAction(TurtleRed, ActionKind.Walk_Left)
        TurtleRed.vx += -1.5
    } else {
        animation.setAction(TurtleRed, ActionKind.IDLE)
    }
})
forever(function () {
    if (controller.player2.isPressed(ControllerButton.Down)) {
        animation.setAction(TurtleBlue, ActionKind.Walk_Back)
        TurtleBlue.vy += -1.5
    } else if (controller.player2.isPressed(ControllerButton.Up)) {
        animation.setAction(TurtleBlue, ActionKind.Walk_Foward)
        TurtleBlue.vy += -1.5
    } else if (controller.player2.isPressed(ControllerButton.Right)) {
        animation.setAction(TurtleBlue, ActionKind.Walk_Right)
        TurtleBlue.vx += -1.5
    } else if (controller.player2.isPressed(ControllerButton.Left)) {
        animation.setAction(TurtleBlue, ActionKind.Walk_Left)
        TurtleBlue.vx += -1.5
    } else {
        animation.setAction(TurtleBlue, ActionKind.IDLE)
    }
})

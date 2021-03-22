enum ActionKind {
    Walking,
    Idle,
    Jumping
}
function CallPlayer1 () {
    TurtleBlue = sprites.create(img`
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
        `, SpriteKind.Player)
    walking_foward = animation.createAnimation(ActionKind.Walking, 1000)
    walking_foward.addAnimationFrame(img`
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
    walking_foward.addAnimationFrame(img`
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
    walking_foward.addAnimationFrame(img`
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
    walking_foward.addAnimationFrame(img`
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
    animation.attachAnimation(TurtleBlue, walking_foward)
}
function CallPlayer2 () {
    TurtleBlue = sprites.create(img`
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
        `, SpriteKind.Player)
    anim = animation.createAnimation(ActionKind.Walking, 0)
    anim.addAnimationFrame(img`
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
    anim.addAnimationFrame(img`
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
    anim.addAnimationFrame(img`
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
    anim.addAnimationFrame(img`
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
    animation.attachAnimation(TurtleBlue, anim)
    Walk_RightLeft = animation.createAnimation(ActionKind.Walking, 1000)
    Walk_RightLeft.addAnimationFrame(img`
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
    Walk_RightLeft.addAnimationFrame(img`
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
    animation.attachAnimation(TurtleBlue, Walk_RightLeft)
    walk_backFowards = animation.createAnimation(ActionKind.Walking, 1000)
    walk_backFowards.addAnimationFrame(img`
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
    walk_backFowards.addAnimationFrame(img`
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
}
let walk_backFowards: animation.Animation = null
let Walk_RightLeft: animation.Animation = null
let anim: animation.Animation = null
let walking_foward: animation.Animation = null
let TurtleBlue: Sprite = null
CallPlayer1()
CallPlayer2()
tiles.setTilemap(tilemap`level1`)
controller.moveSprite(TurtleBlue)

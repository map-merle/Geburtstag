input.onButtonPressed(Button.A, function () {
    basic.showString("  Heute kann es ")
    basic.showString("regnen , stürmen ,")
    basic.showString("oder schneien, ")
    basic.showString("denn du stahlst ja  ")
    basic.showString("selber wie der")
    basic.showString("SONNENSCHEIN")
    music.playMelody("C F B E G B D C5 ", 450)
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("G F A A B E A A ", 300)
    music.playMelody("B B D A A E G C ", 300)
    music.playMelody("B C5 B A C5 A B A ", 250)
    music.playMelody("C5 B A B F E D B ", 120)
})
music.playMelody("B A A G A C5 A B ", 600)
basic.showString("Hi!")
for (let index = 0; index < 3; index++) {
    basic.showIcon(IconNames.Happy)
    basic.showLeds(`
        . . . . .
        . # . . .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showIcon(IconNames.Happy)
}
basic.showString(" Ich wuensche")
basic.showString("dir alles ")
basic.showString(" gute zum")
basic.showString(" Geburtstag")
for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
}

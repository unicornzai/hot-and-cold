function level8 () {
    basic.showLeds(`
        # # # # #
        # # # . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
function level10 () {
    basic.showLeds(`
        # # # # #
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        `)
}
function showLED (signal: number) {
    if (signal < 2) {
        level1()
    } else if (signal == 2) {
        level2()
    } else if (signal == 3) {
        level3()
    } else if (signal == 4) {
        level4()
    } else if (signal == 5) {
        level5()
    } else if (signal == 6) {
        level6()
    } else if (signal == 7) {
        level7()
    } else if (signal == 8) {
        level8()
    } else if (signal == 9) {
        level9()
    } else if (signal == 10) {
        level10()
    } else if (signal == 11) {
        level11()
    } else if (signal == 12) {
        level12()
    } else if (signal == 13) {
        level13()
    } else if (signal == 14) {
        level14()
    } else if (signal == 15) {
        level15()
    } else if (signal == 16) {
        level16()
    } else if (signal == 17) {
        level17()
    } else if (signal == 18) {
        level18()
    } else if (signal == 19) {
        level19()
    } else if (signal == 20) {
        level20()
    } else if (signal == 21) {
        level21()
    } else if (signal == 22) {
        level22()
    } else if (signal == 23) {
        level23()
    } else if (signal == 24) {
        level24()
    } else if (signal > 24) {
        level25()
    }
}
radio.onReceivedNumber(function (receivedNumber) {
    signalStrength = Math.round((radio.receivedPacket(RadioPacketProperty.SignalStrength) + 95) / 2.12)
    showLED(signalStrength)
})
function level4 () {
    basic.showLeds(`
        # # # # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
function level22 () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # . . .
        `)
}
function level1 () {
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
function level23 () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # . .
        `)
}
function level6 () {
    basic.showLeds(`
        # # # # #
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
function level16 () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # . . . .
        . . . . .
        `)
}
function level5 () {
    basic.showLeds(`
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
input.onButtonPressed(Button.A, function () {
    while (true) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
        radio.sendNumber(0)
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `)
        basic.pause(500)
    }
})
function level3 () {
    basic.showLeds(`
        # # # . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
function level19 () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # .
        . . . . .
        `)
}
function level2 () {
    basic.showLeds(`
        # # . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
function level12 () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # . . .
        . . . . .
        . . . . .
        `)
}
function level20 () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        . . . . .
        `)
}
function level17 () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # . . .
        . . . . .
        `)
}
function level21 () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # . . . .
        `)
}
function level13 () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # . .
        . . . . .
        . . . . .
        `)
}
function level14 () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # .
        . . . . .
        . . . . .
        `)
}
function level11 () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # . . . .
        . . . . .
        . . . . .
        `)
}
function level25 () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
}
function level7 () {
    basic.showLeds(`
        # # # # #
        # # . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
function level24 () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # .
        `)
}
function level18 () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # . .
        . . . . .
        `)
}
function level15 () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        . . . . .
        . . . . .
        `)
}
function level9 () {
    basic.showLeds(`
        # # # # #
        # # # # .
        . . . . .
        . . . . .
        . . . . .
        `)
}
let signalStrength = 0
radio.setGroup(77)

input.onButtonPressed(Button.A, function () {
    CurrentNumber = CurrentNumber + 1
    basic.showNumber(CurrentNumber)
})
input.onButtonPressed(Button.AB, function () {
    runningTotal = 0
    for (let i of savedNumbers) {
        runningTotal = runningTotal + i
        basic.showNumber(i)
    }
    for (let i of savedNumbers) {
        for (let index = 0; index < i; index++) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.pause(100)
        }
    }
    basic.showNumber(runningTotal)
})
input.onButtonPressed(Button.B, function () {
    if (!(savedNumbers[savedNumbers.length] == CurrentNumber)) {
        savedNumbers.push(CurrentNumber)
    }
    basic.showLeds(`
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
let runningTotal = 0
let savedNumbers: number[] = []
let CurrentNumber = 0
CurrentNumber = 0
savedNumbers = []
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . # . .
    `)

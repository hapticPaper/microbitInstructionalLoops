input.onButtonPressed(Button.A, function () {
    CurrentNumber = CurrentNumber + 1
    basic.showNumber(CurrentNumber)
})
input.onButtonPressed(Button.AB, function () {
    for (let value of savedNumbers) {
        basic.showNumber(value)
    }
})
input.onButtonPressed(Button.B, function () {
    savedNumbers.push(CurrentNumber)
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
let savedNumbers = 0
let CurrentNumber = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)

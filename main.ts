basic.clearScreen()
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P2)) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})

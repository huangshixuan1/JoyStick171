KSB045.onBtnChanged(KSB045.btnName.D, KSB045.pushType.down, function () {
    radio.sendNumber(9)
    basic.pause(50)
    basic.clearScreen()
})
KSB045.onBtnChanged(KSB045.btnName.F, KSB045.pushType.down, function () {
    radio.sendNumber(7)
    basic.pause(50)
    basic.clearScreen()
})
radio.setGroup(172)
basic.forever(function () {
    if (KSB045.getJoystickValue(KSB045.valueType.X) < 500 && KSB045.getJoystickValue(KSB045.valueType.Y) >= 400 && KSB045.getJoystickValue(KSB045.valueType.Y) < 600) {
        radio.sendNumber(4)
        basic.pause(50)
        basic.clearScreen()
    } else if (KSB045.getJoystickValue(KSB045.valueType.Y) < 500 && KSB045.getJoystickValue(KSB045.valueType.X) >= 400 && KSB045.getJoystickValue(KSB045.valueType.Y) < 600) {
        radio.sendNumber(8)
        basic.pause(50)
        basic.clearScreen()
    } else if (KSB045.getJoystickValue(KSB045.valueType.X) > 520 && KSB045.getJoystickValue(KSB045.valueType.Y) >= 400 && KSB045.getJoystickValue(KSB045.valueType.Y) < 600) {
        radio.sendNumber(6)
        basic.pause(50)
        basic.clearScreen()
    } else if (KSB045.getJoystickValue(KSB045.valueType.Y) > 520 && KSB045.getJoystickValue(KSB045.valueType.X) >= 400 && KSB045.getJoystickValue(KSB045.valueType.X) < 600) {
        radio.sendNumber(2)
        basic.pause(50)
        basic.clearScreen()
    } else {
        radio.sendNumber(0)
    }
})

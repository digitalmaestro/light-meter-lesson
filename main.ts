let _1st_light_value = 0
let _2nd_light_value = 0
input.onButtonPressed(Button.A, function () {
    _1st_light_value = input.lightLevel()
    basic.showNumber(input.lightLevel())
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + _1st_light_value + "-" + _2nd_light_value + "=")
    basic.showNumber(_1st_light_value - _2nd_light_value)
})
input.onButtonPressed(Button.B, function () {
    _2nd_light_value = input.lightLevel()
    basic.showNumber(input.lightLevel())
})
basic.forever(function () {
	
})

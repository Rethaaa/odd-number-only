let num = 0
basic.forever(function () {
    num += 1
    if (num % 2 == 0) {
        basic.showNumber(num)
        basic.pause(100)
    }
})

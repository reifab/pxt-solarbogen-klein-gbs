// Hier kann man Tests durchführen; diese Datei wird nicht kompiliert, wenn dieses Paket als Erweiterung verwendet wird.
sonnenbogen.init(DigitalPin.P0, 30)
sonnenbogen.moveSunAutomatically(10)
basic.forever(function () {
    sonnenbogen.setSunColor(Colors.White)
    basic.pause(1000)
    sonnenbogen.setSunColor(Colors.Red)
    basic.pause(1000)
    sonnenbogen.stopSun()
    basic.pause(1000)
    sonnenbogen.moveSunOneStep()
    basic.pause(1000)
    sonnenbogen.moveSunAutomatically(10)
})

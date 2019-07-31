var SerialPort = require("serialport");
var serialPort = new SerialPort("COM3", {
    baudRate:9600

}, false);

serialPort.open(function (){
    console.log('connected');
        serialPort.on('data', function(data){
        console.log('data received:' + data);
        });
});
var SerialPort = require("serialport");
var serialPort = new SerialPort("COM3", {
    baudRate:9600

}, false);


 function NfcPay(){
     return new Promise(function(resolve,reject){
        serialPort.open(function (){
            console.log('connected');
                serialPort.on('data', function(data){
                console.log('data received:' + data);
                });
        });
     })
 } 

module.exports = NfcPay;

/*

   
function afterOrder(merchant_uid){ // code   0 : success /   -1 : fail
    return new Promise(function(resolve, reject){
        pool.getConnection(function(err, connection){
            if(err) reject(err);
            else {
                var call = {
                    uri: 'https://api.iamport.kr/payments/prepare/'+ merchant_uid + '?_token=' + `${token}`,
                    method: 'GET'
                }

                request(call, function (err, response) {
                    connection.release();
                    if( err ){
                        reject(err);
                    }
                    else if (response.statusCode == 200) {
                        resolve(response.body)
                    }
                }); // end of request
            } // end of else
        });
    }); // end of Promise
}; // end of afterOrder ()



*/
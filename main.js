var five = require("johnny-five");
var board = new five.Board();

var express = require("express");
var app     = express();
var path    = require("path");
var http = require('http').Server(app);

var io = require('socket.io')(http);
//var socket = io();
//var socket = io.connect();

app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

//app.listen(8080);

//console.log("Running at Port 8080");

//var instruments = require('./public/js/instruments.js');
//console.log(instruments.changeActiveInstrument);
var musics = require('./musics.js');
console.log(musics);

var cptnb = 0;
var isAZeroZone = false;
var led;

board.on("ready", function() {

  led = new five.Led.RGB({
   pins: {
     red: 9,
     green: 10,
     blue: 11
   }
  });
  // a.strobe(500);


  this.repl.inject({
    led: led
  });

  //led.on();
  led.color("#E8AB9C");
  // led.blink(1000);
  

  // this.repl.inject({
  //   a: a
  // });


//******

/*ledR = new five.Led(9); 
ledG = new five.Led(10); 
ledB = new five.Led(11);*/

//setColor('blue');



///******

  // Assuming a button is attached to pin 9
  this.pinMode(2, five.Pin.INPUT);
  this.digitalRead(2, function(value) {
    //console.log(value);

  	if(value == 0 && isAZeroZone == false) {
	    cptnb += 1;
	    isAZeroZone = true;
  	}

  	if(value == 1) {
    	isAZeroZone = false;
  	}

  });


  this.pinMode(3, five.Pin.INPUT);
  this.digitalRead(3, function(value) {
    //console.log(value);
    //console.log("change blue");
    setTimeout(function() {
	    if(value == 1) {
	    	console.log("FIN ");
	    	console.log(cptnb);

	    	//io.on('connection', function(socket){
	    		io.emit('composingNumEnded', cptnb);
          led.on();

          //ledR.fadeIn(500); ledG.fadeIn(500); ledB.fadeIn(500); 

          /*setTimeout(function() {
            led.off();
          }, 3000);*/
	    	//});

        /*io.on('musicFinished', function(end){
          console.log("music end");
          led.off();
        });*/

	    	

	    	//instruments.changeActiveInstrument;
	    
	    	cptnb = 0;
	  	}
  	}, 100);
  });
});


/*io.on('connection', function(socket){
  socket.on('message', function(msg){
    console.log('message: ' + msg);
  });
});*/
http.listen(8080, function(){
  console.log('listening on *:8080');
});


io.on('connection', function(socket){
  socket.on('musicFinished', function(msg){
    console.log('message: ' + msg);
    led.off();
    //ledR.fadeOut(500); ledG.fadeOut(500); ledB.fadeOut(500);
  });
});




/*io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});*/

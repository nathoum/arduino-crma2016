/*var express = require("express");
var app     = express();
var path    = require("path");

var jquery = require("jQuery");*/

$(document).ready(function () {
      /*var sock = new io.Socket();
      sock.on('message', function (data) {
        var obj = JSON.parse(data);
        if(obj.message) {

       }
      });*/

window.requestAnimFrame = (function () {
			    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function ( /* function */ callback, /* DOMElement */ element) {
			        window.setTimeout(callback, 1000 / 60);
			    };
			})();    

	var socket = io();

	var average = 0;

	var numberSelected = 0;
    var instrumentSelected = "guitar";
    var instrumentPathMusic = "./audio/guitare.mp3";

    var isPlayingSound = false;



	//socket.emit('message', "test");

	socket.emit('musicFinished', "end");

	socket.on('composingNumEnded', function(numberDial){
    	console.log('composingNumEnded: ' + numberDial);
    	numberSelected = numberDial;
    	numeroCorrespondanceInstrument(numberDial);
    	console.log("instru - "+instrumentSelected);

    	changeActiveInstrument(numberSelected, instrumentSelected);
    	//change("guitare.mp3");

    	numeroCorrespondanceMusic(numberDial);
    	//setupAudioNodes();
    	//setupAudioNodes();
    	//setupAudioNodes();


    	javascriptNode.onaudioprocess = function() {

	        // get the average for the first channel
	        var array =  new Uint8Array(analyser.frequencyBinCount);
	        analyser.getByteFrequencyData(array);
	        average = getAverageVolume(array);

	        // get the average for the second channel
	        var array2 =  new Uint8Array(analyser2.frequencyBinCount);
	        analyser2.getByteFrequencyData(array2);
	        average2 = getAverageVolume(array2);


	    }

    	loadSound(instrumentPathMusic);

    	/*setTimeout(function() {
    		console.log("average : "+ average);
    	}, 500);*/
  	});

    console.log( "ready!" );

    

    $(".audioDemo").trigger('load');
    $(".audioDemo").bind("load",function(){
        $(".alert-success").html("Audio Loaded succesfully");
    });

	$( "body" ).keypress(function( event ) {

		//$(".link--urpi").removeClass("splitdown").removeClass("splitup").removeClass("link-anim");

		 if ( event.which == 49 ) {

			$(".audioDemo").trigger('stop');
			event.preventDefault();
			numberSelected = 1;
			numeroCorrespondanceInstrument(numberSelected);
            console.log("instru - "+instrumentSelected);
            changeActiveInstrument(numberSelected, instrumentSelected);
            numeroCorrespondanceMusic(numberSelected);
			console.log( "1" );
		} else if ( event.which == 50 ) {
			event.preventDefault();
			numberSelected = 2;
			numeroCorrespondanceInstrument(numberSelected);
            console.log("instru - "+instrumentSelected);
            changeActiveInstrument(numberSelected, instrumentSelected);
            numeroCorrespondanceMusic(numberSelected);

			console.log( "2" );
		} else if ( event.which == 51 ) {

			event.preventDefault();
			numberSelected = 3;
			numeroCorrespondanceInstrument(numberSelected);
            console.log("instru - "+instrumentSelected);
            changeActiveInstrument(numberSelected, instrumentSelected);
            numeroCorrespondanceMusic(numberSelected);
			console.log( "3" );
		} else if ( event.which == 52 ) {

			event.preventDefault();
			numberSelected = 4;
			numeroCorrespondanceInstrument(numberSelected);
            console.log("instru - "+instrumentSelected);
            changeActiveInstrument(numberSelected, instrumentSelected);
            numeroCorrespondanceMusic(numberSelected);
			console.log( "4" );
		} else if ( event.which == 53 ) {
			event.preventDefault();
			numberSelected = 5;
			numeroCorrespondanceInstrument(numberSelected);
            console.log("instru - "+instrumentSelected);
            changeActiveInstrument(numberSelected, instrumentSelected);
            numeroCorrespondanceMusic(numberSelected);
			console.log( "5" );
		} else if ( event.which == 54 ) {
			event.preventDefault();
			numberSelected = 6;
			numeroCorrespondanceInstrument(numberSelected);
            console.log("instru - "+instrumentSelected);
            changeActiveInstrument(numberSelected, instrumentSelected);
            numeroCorrespondanceMusic(numberSelected);
			console.log( "6" );
		} else if ( event.which == 55 ) {
			event.preventDefault();
			numberSelected = 7;
			numeroCorrespondanceInstrument(numberSelected);
            console.log("instru - "+instrumentSelected);
            changeActiveInstrument(numberSelected, instrumentSelected);
            numeroCorrespondanceMusic(numberSelected);
			console.log( "7" );
		} else if ( event.which == 56 ) {
			event.preventDefault();
			numberSelected = 8;
			numeroCorrespondanceInstrument(numberSelected);
            console.log("instru - "+instrumentSelected);
            changeActiveInstrument(numberSelected, instrumentSelected);
            numeroCorrespondanceMusic(numberSelected);
			console.log( "8" );
		} else if ( event.which == 57 ) {
			event.preventDefault();
            numberSelected = 9;
			numeroCorrespondanceInstrument(numberSelected);
            console.log("instru - "+instrumentSelected);
            changeActiveInstrument(numberSelected, instrumentSelected);
            numeroCorrespondanceMusic(numberSelected);
			console.log( "9" );
		}
	});

	function change(sourceUrl) {
		var audio = $(".audioDemo");      
		$(".audioSource").attr("src", "./audio/"+sourceUrl);
		audio[0].pause();
		audio[0].load();//suspends and restores all audio element

		//audio[0].play(); changed based on Sprachprofi's comment below
		audio[0].oncanplaythrough = audio[0].play();
	}

	function changeActiveInstrument(number, instrument) {

		$(".Menu-item").removeClass("Menu-item--active");
		console.log("change instrument");
		var selectorNumber = ".Menu-item--"+number;
		$(selectorNumber).addClass("Menu-item--active");

        


		$(".link--urpi").addClass("splitdownout").addClass("splitupout").addClass("link-anim");

		setTimeout(function(){
			$(".link--urpi").removeClass("splitdownout").removeClass("splitupout").removeClass("link-anim");
			$(".link--urpi").text(instrument);
			$(".link--urpi").attr("data-letters", instrument);
			$(".link--urpi").addClass("splitdownin").addClass("splitupin");



		}, 800);

        setTimeout(function(){
        /**** les svg instruments ***/
            $(".Svg-area").hide();
            $(".Svg-area path").attr("class", "");
            var selectorSvgInstrument = ".Svg-area-"+number;
            $(selectorSvgInstrument).fadeIn();
            $(selectorSvgInstrument).find("path").attr("class", "Svg-item--dash");
        }, 1400);

		setTimeout(function(){
			$(".link--urpi").removeClass("splitdownin").removeClass("splitupin");
		}, 2800);
		
	}

	function numeroCorrespondanceInstrument(numberDial) {
		switch (numberDial) {
    		case 1:
        		instrumentSelected = "guitar";
        	break;

        	case 2:
        		instrumentSelected = "piano";
        	break;

        	case 3:
        		instrumentSelected = "trumpet";
        	break;

        	case 4:
        		instrumentSelected = "maracas";
        	break;

        	case 5:
        		instrumentSelected = "violin";
        	break;

        	case 6:
        		instrumentSelected = "saxophone";
        	break;

        	case 7:
        		instrumentSelected = "drum";
        	break;

        	case 8:
        		instrumentSelected = "accordion";
        	break;

        	case 9:
        		instrumentSelected = "xylophone";
        	break;

        	case 10:
        		instrumentSelected = "flute";
        	break;
        }

	}

	function numeroCorrespondanceMusic(numberDial) {
		switch (numberDial) {
    		case 1:
        		instrumentPathMusic = "./audio/guitare.mp3";
        	break;

        	case 2:
        		instrumentPathMusic = "./audio/piano.mp3";
        	break;

        	case 3:
        		instrumentPathMusic = "./audio/trumpet.mp3";
        	break;

        	case 4:
        		instrumentPathMusic = "./audio/maracas.mp3";
        	break;

        	case 5:
        		instrumentPathMusic = "./audio/violin.wav";
        	break;

        	case 6:
        		instrumentPathMusic = "./audio/saxophone.mp3";
        	break;

        	case 7:
        		instrumentPathMusic = "./audio/drum.mp3";
        	break;

        	case 8:
        		instrumentPathMusic = "./audio/accordion.mp3";
        	break;

        	case 9:
        		instrumentPathMusic = "./audio/xylophone.mp3";
        	break;

        	case 10:
        		instrumentPathMusic = "./audio/flute.wav";
        	break;
        }

        return instrumentPathMusic;

	}

	//********************** AUDIO ********
	// creation of the audio context
    if (! window.AudioContext) {
        if (! window.webkitAudioContext) {
            alert('no audiocontext found');
        }
        window.AudioContext = window.webkitAudioContext;
    }
    var context = new AudioContext();
    var audioBuffer;
    var sourceNode;
    var splitter;
    var analyser, analyser2;
    var javascriptNode;

    

    // load the sound
    setupAudioNodes();

    function setupAudioNodes() {

        // setup a javascript node
        javascriptNode = context.createScriptProcessor(2048, 1, 1);
        // connect to destination, else it isn't called
        javascriptNode.connect(context.destination);


        // setup : analyzer
        analyser = context.createAnalyser();
        analyser.smoothingTimeConstant = 0.3;
        analyser.fftSize = 1024;

        analyser2 = context.createAnalyser();
        analyser2.smoothingTimeConstant = 0.0;
        analyser2.fftSize = 1024;

        // creation of a buffer source node
        sourceNode = context.createBufferSource();
        splitter = context.createChannelSplitter();

        // connect the source to the analyser and the splitter
        sourceNode.connect(splitter);

        // connect one of the outputs from the splitter to
        // the analyser
        splitter.connect(analyser,0,0);
        splitter.connect(analyser2,1,0);

        // connect the splitter to the javascriptnode
        analyser.connect(javascriptNode);

        // connect to destination
        sourceNode.connect(context.destination);
    }

    // load the specified sound
    function loadSound(url) {
    	console.log("play sound");
    	isPlayingSound = true;
        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.responseType = 'arraybuffer';

        // When loaded decode the data
        request.onload = function() {

            // decode the data
            context.decodeAudioData(request.response, function(buffer) {
                // when the audio is decoded play the sound

                playSound(buffer);

                //isPlayingSound = true;
            }, onError);
        }
        request.send();
    }


    function playSound(buffer) {
        sourceNode.buffer = buffer;
        sourceNode.start(0);
        sourceNode.onended = onEnded;

    }

    function onEnded() {
	    console.log('playback finished');
	    //setupAudioNodes();
	    setupAudioNodes();
	    isPlayingSound = false;
	    socket.emit('musicFinished', "end");
	    


	    
	}

    // log if an error occurs
    function onError(e) {
        console.log(e);
    }

    // quand le noeud javascript est appelé on utilise l'information de l'analyseur pour se servir des données de volume
    /*javascriptNode.onaudioprocess = function() {

        // get the average for the first channel
        var array =  new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(array);
        average = getAverageVolume(array);

        // get the average for the second channel
        var array2 =  new Uint8Array(analyser2.frequencyBinCount);
        analyser2.getByteFrequencyData(array2);
        average2 = getAverageVolume(array2);


    }*/

    function getAverageVolume(array) {
        var values = 0;

        var length = array.length;

        // get all the frequency amplitudes
        for (var i = 0; i < length; i++) {
            values += array[i];
        }

        average = values / length;
        return average;
    }

    animate();
	function animate() {
		//console.log('average '+ average);
	    requestAnimationFrame(animate);
	    if( average > 0 && isPlayingSound == true) {
	    	//console.log('average '+ average);
	    	socket.emit('averageLoop', average);
	    }

	    
	    //console.log("average : "+ average);
	}






});
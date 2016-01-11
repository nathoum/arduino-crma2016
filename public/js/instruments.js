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

	var socket = io();

	//socket.emit('message', "test");

	socket.on('composingNumEnded', function(numberDial){
    	console.log('composingNumEnded: ' + numberDial);
    	numberSelected = numberDial;
    	numeroCorrespondanceInstrument(numberDial);
    	console.log("instru - "+instrumentSelected);

    	changeActiveInstrument(numberSelected, instrumentSelected);
    	change("guitare.mp3");
  	});

    console.log( "ready!" );

    var numberSelected = 0;
    var instrumentSelected = "guitar";

    $(".audioDemo").trigger('load');
    $(".audioDemo").bind("load",function(){
        $(".alert-success").html("Audio Loaded succesfully");
    });

	$( "body" ).keypress(function( event ) {

		//$(".link--urpi").removeClass("splitdown").removeClass("splitup").removeClass("link-anim");

		if ( event.which == 48 ) {

			event.preventDefault();
			numberSelected = 0;
			instrumentSelected = "guitar";
			changeActiveInstrument(numberSelected, instrumentSelected);

			change("guitare.mp3");
			console.log( "0" );
		} else if ( event.which == 49 ) {

			$(".audioDemo").trigger('stop');
			event.preventDefault();
			numberSelected = 1;
			numeroCorrespondanceInstrument(numberSelected);
			changeActiveInstrument(numberSelected, instrumentSelected);

			change("battery.mp3");
			console.log( "1" );
		} else if ( event.which == 50 ) {
			event.preventDefault();
			numberSelected = 2;
			numeroCorrespondanceInstrument(numberSelected);
			changeActiveInstrument(numberSelected, instrumentSelected);

			console.log( "2" );
		} else if ( event.which == 51 ) {

			event.preventDefault();
			numberSelected = 3;
			numeroCorrespondanceInstrument(numberSelected);
			changeActiveInstrument(numberSelected, instrumentSelected);
			console.log( "3" );
		} else if ( event.which == 52 ) {

			event.preventDefault();
			numberSelected = 4;
			numeroCorrespondanceInstrument(numberSelected);
			changeActiveInstrument(numberSelected, instrumentSelected);
			console.log( "4" );
		} else if ( event.which == 53 ) {
			event.preventDefault();
			numberSelected = 5;
			numeroCorrespondanceInstrument(numberSelected);
			changeActiveInstrument(numberSelected, instrumentSelected);
			console.log( "5" );
		} else if ( event.which == 54 ) {
			event.preventDefault();
			numberSelected = 6;
			numeroCorrespondanceInstrument(numberSelected);
			changeActiveInstrument(numberSelected, instrumentSelected);
			console.log( "6" );
		} else if ( event.which == 55 ) {
			event.preventDefault();
			numberSelected = 7;
			numeroCorrespondanceInstrument(numberSelected);
			changeActiveInstrument(numberSelected, instrumentSelected);
			console.log( "7" );
		} else if ( event.which == 56 ) {
			event.preventDefault();
			numberSelected = 8;
			numeroCorrespondanceInstrument(numberSelected);
			changeActiveInstrument(numberSelected, instrumentSelected);
			console.log( "8" );
		} else if ( event.which == 57 ) {
			event.preventDefault();
			numberSelected = 9;
			numeroCorrespondanceInstrument(numberSelected);
			changeActiveInstrument(numberSelected, instrumentSelected);
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

		$(".link--urpi").text(instrument);
		$(".link--urpi").attr("data-letters", instrument);
		$(".link--urpi").addClass("splitdown").addClass("splitup").addClass("link-anim");

		setTimeout(function(){
		  $(".link--urpi").removeClass("splitdown").removeClass("splitup").removeClass("link-anim");
		}, 1500);
	}

	function numeroCorrespondanceInstrument(numberDial) {
		switch (numberDial) {
    		case 0:
        		instrumentSelected = "guitar";
        	break;

        	case 1:
        		instrumentSelected = "piano";
        	break;

        	case 2:
        		instrumentSelected = "trumpet";
        	break;

        	case 3:
        		instrumentSelected = "maracas";
        	break;

        	case 4:
        		instrumentSelected = "violin";
        	break;

        	case 5:
        		instrumentSelected = "cuivre";
        	break;

        	case 6:
        		instrumentSelected = "tambour";
        	break;

        	case 7:
        		instrumentSelected = "accordion";
        	break;

        	case 8:
        		instrumentSelected = "xylophone";
        	break;

        	case 9:
        		instrumentSelected = "flute";
        	break;
        }

	}





});
# ee-strip-png

[![Greenkeeper badge](https://badges.greenkeeper.io/eventEmitter/ee-strip-png.svg)](https://greenkeeper.io/)

remove all data parts from a png image except the required ones

## installation

	npm install ee-strip-png

## usage

	
	var   fs 			= require( "fs" )
		, pngStripper 	= require( "ee-strip-png" );

	
	// read png from a stream
	pngStripper(  fs.createReadStream( "./test/qr.png" ), function( cleanedPNGBuffer ){
		
	} );


	// read png from a buffer
	pngStripper( fs.readFileSync( "./test/qr.png" ), function( cleanedPNGBuffer ){

	} );
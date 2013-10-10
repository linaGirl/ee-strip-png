

	var   fs 			= require( "fs" )
		, pngStripper 	= require( "./" )
		, log 			= require( "ee-log" );



	var inputStream 	= fs.createReadStream( "./test/qr.png" );
	var inputBuffer 	= fs.readFileSync( "./test/qr.png" );

	pngStripper( inputStream, function( buf ){
		pngStripper( inputBuffer, function( buf2 ){
			log.info( "input length = %s", inputBuffer.length );
			log.info( "output length = %s", buf.length );
			log.info( "output length ( file ) = %s", buf2.length );
		} );
	} );
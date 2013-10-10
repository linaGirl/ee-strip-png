
	
	var   StreamBuffer 		= require( "ee-stream-buffer" )
		, StreamCollector 	= require( "ee-stream-collector" )
		, type  			= require( "ee-types" )
		, png 				= require( "png-guts" );


	module.exports = function( input, callback ){
		if ( type.buffer( input ) ) input = new StreamBuffer( input );

		var   collector = new StreamCollector() 
			, reader 	= new png.ChunkReader( input )
			, whitelist = [ "IHDR", "PLTE", "IDAT", "IEND" ];

		// png header
		collector.write( new Buffer( [0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A ] ) );

		// finished
		collector.on( "end", callback );

		// png chunk
		reader.on( "chunk", function( type, data ){
			if ( whitelist.indexOf( type ) >= 0 ) collector.write( data );
		}.bind( this ) );

		// input end
		reader.on( "end", function( type, data ){
			collector.end();
		}.bind( this ) );	
	}
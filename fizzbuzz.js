/**
 * Conventional FizzBuzz game function
 *
 * @param int intFizz Replace multiples of this number with 'fizz'
 * @param int intBuzz Replace multiples of this number with 'buzz'
 */
window.fizzBuzzNormal = function( intFizz, intBuzz ) {

	/* Conventional FizzBuzz game dictates that any number divisible by intFizz is replaced by 'fizz',
	 * any number divisible by intBuzz if replaced by 'buzz', and any that are divisible by both are 
	 * replaced by 'fizz buzz'
	 *
	 * https://en.wikipedia.org/wiki/Fizz_buzz
	 */

	for( var i=1; i<=100; i++ ) {
		
		var output = '';

		if( i % intFizz == 0 ) {
			output += 'fizz '; // trailing space in case of addition of buzz
		}

		if( i % intBuzz == 0 ) {
			output += 'buzz';
		}

		// Show either our string (if not empty) or the number
		console.log( output.trim() || i );
	}
	
};

/**
 * Variant FizzBuzz game function as interpreted from question spec
 *
 * In the question as defined in the spec, numbers divisble by intBuzz still appear in the readout 
 * (5 and 100 are clearly shown) so in this variation multiples of intFizz are substituted whereas 
 * multiples of intBuzz have 'buzz' output prior to the number. This will give the equivalent 
 * readout as defined in the original document
 *
 * @param int intFizz Replace multiples of this number with 'fizz'
 * @param int intBuzz Prepend multiples of this number with 'buzz'
 */
window.fizzBuzzVariant = function( intFizz, intBuzz ) {

	for( var i=1; i<=100; i++ ) {

		var output = '';

		if( i % intFizz == 0 ) {
			output += 'fizz '; // trailing space in case of addition of buzz

			// If this number IS NOT divisible by intBuzz we only output 'fizz' and skip the number
			if( i % intBuzz != 0 ) {
				console.log( output.trim() ); 
				continue;
			}
		}

		if( i % intBuzz == 0 ) {
			output += 'buzz';
		}

		// Only output the string if it has content 
		output.length && console.log( output );
		// Output the number
		console.log( i );
	}

};

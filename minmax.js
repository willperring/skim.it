/**
 * Calculate the minimum and maximum variation of a number by a single swap of two digits
 *
 * @param int intStart The starting number
 *
 * @return {min: int, max: int}
 */
window.minMax = function( intStart ) {

	/**
	 * Replace a character in a string
	 *
	 * @param string strValue   String to replace character in
	 * @param int    intIndex   Index of character to replace
	 * @param string strNewChar New character to insert
	 *
	 * @return string Substituted string
	 */
	var _replaceChar = function( strValue, intIndex, strNewChar ) {
		return strValue.substr( 0, intIndex ) // everything before the character
			+ strNewChar				      // the new character
			+ strValue.substr( intIndex+1 );  // everything after the character
	};

	/**
	 * Swap two numbers (characters) in an integer
	 *
	 * @param int intValue  Source number
	 * @param int intIndex1 Index of first number to swap
	 * @param int intIndex2 Index of second number to swap
	 *
	 * @return int Swapped integer 
	 */
	var _swap = function( intValue, intIndex1, intIndex2 ) {

		if( intIndex1 == intIndex2 )
			return intValue;

		var strValue = intValue.toString();
		var temp     = strValue[ intIndex1 ];
		
		strValue = _replaceChar( strValue, intIndex1, strValue[intIndex2] );
		strValue = _replaceChar( strValue, intIndex2, temp );

		return parseInt( strValue );
	};

	/**
	 * Find the extreme (max/min) using a single digit swap
	 *
	 * @param int  intValue Starting number
	 * @param bool findMax  True to find maximum, false to find minimum
	 *
	 * @return int Maximum or minimum value using a single swap
	 */
	var _findExtreme = function( intValue, findMax ) {

		findMax = findMax || false;

		strValue  = intValue.toString();
		lenValue  = strValue.length;
		intReturn = intValue;

		// iterate every possible swap
		for( var i=0; i<lenValue; i++ ) {
			for( var j=0; j<lenValue; j++ ) {

				// no point swapping the same letter
				if( i == j ) continue;

				var intSwapped = _swap( intValue, i, j );
				var strSwapped = intSwapped.toString(); // we can only read the 'length' of a string

				// if a zero has been swapped to the front, the length 
				// will be different 
				if( strSwapped.length != lenValue )
					continue; 

				intReturn = ( findMax )
					? Math.max( intReturn, intSwapped )
					: Math.min( intReturn, intSwapped )
					;
			}
		}

		return intReturn;
	};

	return {
		min : _findExtreme( intStart, false ),
		max : _findExtreme( intStart, true  )
	};

} 

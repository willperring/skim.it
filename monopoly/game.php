<?php

Class Game {

	private static $_tokens = array(
		'dog',
		'racecar',
		'top hat',
		/* etc... */
	);

	private $_players    = array();
	private $_properties = array(
		/* load properties from db, etc */
	); 

	private $_activePlayer = 0;

	public function addPlayer( Player $player ) {}

	public function takeTurn() {}

}
<?php

Class Player {

	private $_token;

	private $_funds;
	private $_properties = array();

	private $_location;
	private $_jailed = false;

	private $_missTurns = 0; // for chance / community chest

	public function purchaseProperty( Property $property ) {}
	public function remortgageProperty( Property $property ) {}

	public function advance( int $by ) {}

	public function addFunds( int $amount ) {}
	public function payFunds( int $amount, Player $player=null ) {} // some funds are paid to the bank (null)

	public function isBankrupt() {}

}
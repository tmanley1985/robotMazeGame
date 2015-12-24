"use strict";

function MazeSpace( directions )
{
	// These are booleans to determine, given a space,
	// if there is a wall on any side, north, south, east, west.
	var i;
	for ( i=0; i < directions.length; i+=1) {
		this[directions[i]] = false;
	}
}

MazeSpace.prototype.setWall = function( direction ) {
	// Using brackets around variable to distinguish
	// between a property called direction and a variable
	// called direction containing the value of an orientation.
	this[direction] = true;
}
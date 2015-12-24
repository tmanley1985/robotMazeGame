"use strict";

// Creates Maze Object

function Maze( width, height )
{
	this.width = width;
	this.height = height;

	// Starting coordinates for Robot
	this.startX = null;
	this.startY = null;

	//Starting orientation for Robot
	this.startOrientation = null;

	//End of the maze coordinates
	this.endX = null;
	this.endY = null;

	//Collection of maze space objects
	this.spaces = [];

	// Valid directions
	this.directions = ["north","south","east","west"];

	//Columns and rows
	var x, y;

	// Creates a two dimensional array.
	// The first dimension is an array of columns (x).
	// The second dimension is an array of y coordinates.
	// The second dimension also contains a MazeSpace object.
	
	for ( x = 1; x <= width; x += 1 ) {
		// Empty array of spaces
		this.spaces[x] = [];


		for ( y = 1; y <= height; y += 1 ) {
			this.spaces[x][y] = new MazeSpace( this.directions );
		}
	}
}

//Sets a method on the Maze Object to set robot's starting position
Maze.prototype.setStartingPosition = function( x, y, orientation ) {
	
	if ( this.isValidDirection( orientation ) ) {
		
		this.startX = x;
		this.startY = y;
		this.startOrientation = orientation;	
	}

}

Maze.prototype.setEndingPosition = function( x, y ) {
	this.endX = x;
	this.endY = y;
}

// Each space is its own MazeSpace object.  The Maze keeps track of all
// the spaces, where the walls are and where the robot can move.  This method
// follows the law of demeter in adding a wrapper method around the MazeSpace objects
// set wall method, allowing for clear separation of concerns and allows for decoupled objects.  
Maze.prototype.setWall = function( x, y, direction ) {
	

	// Check to see if coordinates are within bounds of the maze and direction is valid.
	if ( x > 0 && x <= this.width && y > 0 && y <= this.height && this.isValidDirection( direction ) ) {
		this.spaces[x][y].setWall( direction );
		return true;
	}

	return false;
}

Maze.prototype.isValidDirection = function( direction ) {

	return this.directions.indexOf(direction) !== -1;
}
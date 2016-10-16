#!/usr/bin/env node

var dec = require('underscore');
var monday = [
        {
            'name'     : 'Write a tutorial',

            'duration' : 180

        },

        {

            'name'     : 'Some web development',

            'duration' : 120

        }

    ];
var tuesday = [

        {

            'name'     : 'Keep writing that tutorial',

            'duration' : 240

        },

        {

            'name'     : 'Some more web development',

            'duration' : 180

        },

        {

            'name'     : 'A whole lot of nothing',

            'duration'  : 240

        }

    ];

/**
 * 1. Convert to hours using map function
 */
var dur1 = monday.map(function(monday)
{
	return monday.duration/60;
}).filter(function(monday)        
/**
 * 2. Filter out everything that took one hour or more
 */
{ 
	 return (monday>=1);
}).reduce(function(total,monday)
/**
 * 3. Sum it all up
 * 4. Multiply by 20
 */    
{
	return (total+monday)*20;
});

/*
 * Same for mon but for tues
 */
var dur2 = tuesday.map(function(tuesday)
{
   return tuesday.duration/60;    
}).filter(function(tuesday)     
{ 
	return (tuesday>=1);
}).reduce(function(total,tuesday)    
{
     return total+tuesday*20;
},0);
/**
 * 5. Output total in formatted dollar ammount (toFixed)
 */
console.log("You made $",(dur1+dur2).toFixed(2));

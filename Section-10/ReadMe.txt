Compile: tsc index.ts
Config: tsc --init
//////////////////////////////////
We can set outdir(build) and rootdir(src), then run just "tsc" in project root directory to compile.
//////////////////////////////////
watch mode: tsc -w
(Like nodemon)
///////////////////////////////////
Run: node build/index.js
///////////////////////////////////
///////////////////////////////////
Run script: npm start


NOTES:
	Strings in JS/TS are immutable.
	<char>.charCodeAt(0)  --> ASCII Value is returned.
	
	Bubble sort implementation can not swap chars in a string,
	as they are immutable. Also, our comparison condition in the "if"
	statement also needs to change.

	UPDATING THE BUBBLE SORT IMPLEMENTATION:
		TYPE GUARDS:
			Used to clarify the type we are working with, when using
			union of types (like: number | string).

			FOR TYPESCRIPT:
				Narrow type of a value to a primitive type: number, string, boolean, symbol.
				(typeof)
			
				Narrow type of other values: "Every other value that is created with a constructor function."
				(instanceof)
			
			Using type guards leads to code repetition.
		
		SOLUTION: Abstraction of implementation. --> Using interfaces.

	LINKED LIST,
	INHERITANCE: <...>Collection classes will inherit from the Sortable class,
	ABSTRACT CLASSES

	INTERFACES v/s ABSTRACT CLASSES:
		Interfaces promote loose coupling of classes, set up a contract between
		different classes, used when we have very different objects that we want
		to work together.

		Abstract classes promote strong coupling of classes, set up a contract between
		different classes, used when are trying to build up a definition of an object.		
		

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


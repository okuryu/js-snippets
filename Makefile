all: jslint

jslint: snippets.js
	jslint $^

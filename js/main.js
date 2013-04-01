var currentChapter = "http://eloquentjavascript.net/chapter3.html#p7edebe21";
var cC = document.getElementById('cC');

document.getElementById('contChap').onclick = function() {

	//if (!cC.value) {
	window.open(currentChapter);
	//};
}

function logit (arg1) {
	console.log(arg1);
}

var someObj = {};
someObj.name = "Some Name";

// This function is called before it is created
mainFunc();

//This is the created function
function mainFunc (arg) {
	console.log('main function');
}

//This is the called function from the other file
testFunc();
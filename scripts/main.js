
//document.querySelector('html').onclick = function() {
//	alert('ouch! Stop poking me!');
//}

var myImage = document.querySelector('img');

myImage.onclick = function()  {
var mySrc = myImage.getAttribute('src');
if (mySrc === 'images/tiger4.jpg') {
	myImage.setAttribute ('src','images/tiger3.jpg');
}
else {
	myImage.setAttribute ('src','images/tiger4.jpg');
}

}

var meButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'ПИСЮЛЬКЕН ЗАХВАТИТ МИР, ТЫ ПОНИМАЕШЬ, ' + myName;
}
if(!localStorage.getItem('name')) {
	setUserName();
} 
else {
	var storedName = localStorage.getItem('name'); 
	myHeading.textContent = 'ПИСЮЛЬКЕН ЗАХВАТИТ МИР, ТЫ ПОНИМАЕШЬ, ' + storedName;
}
myButton.onclick = function() {
	setUserName();
}
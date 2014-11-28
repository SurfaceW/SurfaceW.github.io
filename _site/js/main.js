/* This is the main file for JS */
// Function to change the header's bg.
function chooseBG() {
	var header;
	header = document.querySelector('.site-header');
	header.style.background = 
		'url("/img/index/0' + getRandomInt(1,6) +'.jpg")' + ' no-repeat center center';
	header.style.backgroundSize = 'cover'; 
}

// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

window.onload = function () {
	chooseBG();
}
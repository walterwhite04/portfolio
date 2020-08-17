// navbar animation

var _CONTENT = [ 
	"Chinmay Mahagaonkar", 
	"चिन्मय महागांवकर", 
];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed 
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#text");

// Cursor element 
var _CURSOR = document.querySelector("#cursor");

// Implements typing effect
function Type() { 
	// Get substring with 1 characater added
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === _CONTENT[_PART]) {
		// Hide the cursor
		_CURSOR.style.display = 'none';

		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 50);
		}, 1000);
	}
}

// Implements deleting effect
function Delete() {
	// Get substring with 1 characater deleted
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	// If sentence has been deleted then start to display the next sentence
	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		// If current sentence was last then display the first one, else move to the next
		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		
		_PART_INDEX = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			_CURSOR.style.display = 'inline-block';
			_INTERVAL_VAL = setInterval(Type, 100);
		}, 200);
	}
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);





//add function to showMore btn

if (window.matchMedia("(max-width: 500px)").matches) {

	$(".show-link").click(function() {


//	$(".project-2").css("margin-right", "30px");

	for(var i = 3; i < 7; i++) {

		if(document.querySelector(".project-" + i).style.display === "none") {

			document.querySelector(".project-" + i).style.display = "block";

			//document.querySelector(".project-2").style.marginRight = "40px";

			$(".more").addClass("toggle");

			$(".less").removeClass("toggle");


		} else {

			document.querySelector(".project-" + i).style.display = "none";
		//	document.querySelector(".project-2").style.marginRight = "40px";
		document.querySelector(".project-2").style.marginLeft = "20px";
		document.querySelector(".project-2").style.marginRight = "20px";

			$(".more").removeClass("toggle");
			$(".less").addClass("toggle");


		}

}
	});

	} 
	else {

		$(".show-link").click(function() {
			//$(".project-2").css("margin-left", "30px");

	for(var i = 3; i < 7; i++) {

		if(document.querySelector(".project-" + i).style.display === "none") {

			document.querySelector(".project-" + i).style.display = "block";

			document.querySelector(".project-2").style.marginLeft = "0px";

			$(".more").addClass("toggle");

			$(".less").removeClass("toggle");


		} else {

			document.querySelector(".project-" + i).style.display = "none";

			document.querySelector(".project-2").style.marginLeft = "20px";
			document.querySelector(".project-2").style.marginRight = "20px";
			

			$(".more").removeClass("toggle");
			$(".less").addClass("toggle");

		}




	}
});

}

// add function to mobile nav icons

document.querySelector('.nav-icon').addEventListener('click', function()  {

	document.querySelector('.menu').classList.add('opened');
	document.querySelector('.menu').classList.remove('closed');

	document.querySelector('.close').style.display = 'block';

});

document.querySelector('.close').addEventListener('click', function() {

	document.querySelector('.menu').classList.remove('opened');
	document.querySelector('.menu').classList.add('closed');

	document.querySelector('.close').style.display = 'none';


});


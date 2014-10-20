document.addEventListener('DOMContentLoaded', function(){
    var $button = document.querySelector('button');

    $button.addEventListener('click', function(){
	var $target = document.querySelector('.target');
	var $dropdown = document.getElementById('dropdown').value;  
	var $ol = document.querySelector('.target'); 
	$target.innerHTML = ""; 
	if ($dropdown === "random_student"){
	    var randomStudent = printRandomStudent();
	} else if ($dropdown === "neighbor_pairing"){
	    var docFragment = printConsecutivePair();
	} else if ($dropdown === "teams_of_three"){
	    var docFragment = printConsecutiveThree();
	} else if ($dropdown === "random_pairing"){
	    var docFragment = printRandomlyPaired();
	} else if ($dropdown === "random_n_pairing"){
	    var $n_input = document.getElementById('number_dropdown').value;
	    if ($n_input > classList.length) {
		alert("You need to select " + (classList.length) + " students or fewer!");
		return;
	    }
	    var docFragment = printRandomN();
	}    
    });
});

function showDropdown () {
    var $dropdownLoop = document.getElementById('dropdown').value;
    var $dropdownNumbers = document.getElementById('number_dropdown');
    if ($dropdownLoop === "random_n_pairing"){
	$dropdownNumbers.style.visibility='visible';
	$dropdownNumbers.classList.remove('hidden');
    } else {
	$dropdownNumbers.style.visibility='hidden';
	$dropdownNumbers.classList.add('hidden');
    }
} 

var $ol = document.querySelector('.target'); 

function addItemToList($list, itemText){
    var $li = document.createElement("li");
    $li.innerHTML = itemText;
    $list.appendChild($li);
}

var classList = ['Adam', 'Alex', 'Blaise', 'Brandon', 'Charisse', 'Colby', 'David', 'Evan', 'Gerald', 'Greg', 'Jackie', 'Jessica', 'Spencer', 'Kimberly', 'Kris', 'Leon', 'Luke', 'Rebecca', 'Seif', 'Steve', 'Sonda', 'Stephania'];

function printRandomStudent (){
    var clone = classList.slice(0);
    var randomNumber = (Math.random());
    var random_index = Math.floor(randomNumber*(clone.length));
    var randomStudent = clone[random_index];
    addItemToList($ol, randomStudent);
}

function printConsecutivePair (){
    var clone = classList.slice(0);
    while (clone.length > 0) {
	var consecutivePair = clone.splice([0], 2);
        var $pair = consecutivePair.join(" &amp; ");
	addItemToList($ol, $pair);
    }
}

function printConsecutiveThree(){
    var clone = classList.slice(0);
    while (clone.length > 0) {
	var consecutiveThree = clone.splice([0], 3);
	var $triplet = consecutiveThree.join(", ");
	addItemToList($ol, $triplet);
    }
}

function printRandomlyPaired (){
    var clone = classList.slice(0);
    while (clone.length > 0) {
	var randomNumber = Math.random();
	var random_index = Math.floor(randomNumber * (clone.length));
	var initial_splice = clone.splice([random_index], 1);
	var randomNumber2 = Math.random();
	var random_index2 = Math.floor(randomNumber * (clone.length));
	var second_splice = clone.splice([random_index2], 1);
	initial_splice.push(second_splice[0]);
	var randomPair = initial_splice.join(" &amp; ");
	addItemToList($ol, randomPair);
    }
}

function printRandomN () {
    var clone = classList.slice(0);
    var groupLength = document.getElementById('number_dropdown').value;
    while (clone.length > groupLength) {
        var finalArray = [];
	var n = document.getElementById('number_dropdown').value;
        while (n > 0) {
	    var randomNumber = Math.random();
	    var random_index = (Math.floor(randomNumber * (clone.length)));
	    var initial_splice = clone.splice([random_index], 1);
	    finalArray.push(initial_splice[0]);
	    n = n - 1
	}
	var $randomN = finalArray.join(", ");      
	addItemToList($ol, $randomN);
	addItemToList($ol, clone.join(", "));
    }
}

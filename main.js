document.addEventListener('DOMContentLoaded', function(){
    var $button = document.querySelector('button');
    var $dropdownNumbers = document.getElementById('number_dropdown');
//    if ($dropdown === "random_n_pairing") {
//	$dropdownNumbers.classList.remove('hidden');
//	 console.log($dropdownNumbers.classList);
//    }

    

//    var $dropdown = document.getElementById('dropdown').value;  
//    $dropdownNumbers.addEventListener($dropdown === "random_n_pairing", function(){
//	$dropdownNumbers.classList.remove('hidden');
//    });

    $button.addEventListener('click', function(){
	var $dropdown = document.getElementById('dropdown').value;    
	if ($dropdown === "random_student"){
	    var $target = document.querySelector('.target_random_student');
	    var docFragment = printRandomStudent();
	    $target.appendChild(docFragment);
	} else 
	if ($dropdown === "neighbor_pairing"){
	    var $target = document.querySelector('.target_random_pair');
	    var docFragment = printRandomPair();
	    $target.appendChild(docFragment);
	} else
	if ($dropdown === "teams_of_three"){
	    var $target = document.querySelector('.target_team_of_three');
	    var docFragment = printTeamOfThree();
	    $target.appendChild(docFragment);
	} else
	if ($dropdown === "random_pairing"){
	    var $target = document.querySelector('.target_randomly_paired');
	    var docFragment = printRandomlyPaired();
	    $target.appendChild(docFragment);
	} else
	if ($dropdown === "random_n_pairing"){
	    var $n_input = document.getElementById('number_dropdown').value;
	    if ($n_input > classList.length) {
		alert("You need to select " + (classList.length) + " students or fewer!");
		return;
	    }
	    var $target = document.querySelector('.target_team_of_n');
	    var docFragment = printRandomN();
	    $target.appendChild(docFragment);
	}    
    });
});

//var $button = document.querySelector('button');
//var $dropdown = document.getElementById('dropdown').value; 
//console.log($dropdown);   
//var $dropdownNumbers = document.getElementById('number_dropdown');
//if ($dropdown === "random_n_pairing") {
//	$dropdownNumbers.classList.remove('hidden');
//	 console.log($dropdownNumbers.classList);
//    }




var classList = ['Adam', 'Alex', 'Blaise', 'Brandon', 'Charisse', 'Colby', 'David', 'Evan', 'Gerald', 'Greg', 'Jackie', 'Jessica', 'Spencer', 'Kimberly', 'Kris', 'Leon', 'Luke', 'Rebecca', 'Seif', 'Steve', 'Sonda', 'Stephania'];

function printRandomStudent (){
    var docFragment = document.createDocumentFragment();
    var randomNumber = Math.random();
    var random_index = (Math.round(randomNumber*(classList.length-1)));
    if (classList.length === 0){
	alert("No more students!");
	return;
    }
    var $li = document.createElement('li');
    var $randomStudent = document.createTextNode(classList[random_index]);
    $li.appendChild($randomStudent);
    docFragment.appendChild($li);
    classList.splice([random_index], 1);
    console.log(classList.length); 
 
    return docFragment;  
}

function printRandomPair (){
    var docFragment = document.createDocumentFragment();
    
    var randomNumber = Math.random();
    var random_index = (Math.round(randomNumber*(classList.length-2)));
    var random_index2 = random_index+1
    if (classList.length < 2){
	alert("Not enough students remaining!");
	return;
    }
    var $li = document.createElement('li');
    var $randomPair = document.createTextNode(classList[random_index] + " & " + classList[random_index2]);
    $li.appendChild($randomPair);
    docFragment.appendChild($li);
    classList.splice([random_index], 2);
    console.log(random_index, random_index2);
    return docFragment;
}

function printTeamOfThree(){
    var docFragment = document.createDocumentFragment();

    var randomNumber = Math.random();
    var random_index = (Math.round(randomNumber*(classList.length-3)));
    var random_index2 = random_index+1;
    var random_index3 = random_index2+1;
    if (classList.length < 3) {
	alert("Not enough students remaining!");
	return;
    } 
    var $li = document.createElement('li');
    var $randomTriplet = document.createTextNode(classList[random_index] + ", " + classList[random_index2] + ", & " + classList[random_index3]);
    $li.appendChild($randomTriplet);
    docFragment.appendChild($li);
    console.log(random_index, random_index2, random_index3);
    classList.splice([random_index], 3);
    return docFragment;
}

function printRandomlyPaired (){
    var docFragment = document.createDocumentFragment();
    
    if (classList.length < 2) {
	alert("Not enough students remaining!");
	return;
    }
    var randomNumber = Math.random();
    var random_index = (Math.round(randomNumber * (classList.length-1)));
    var initial_splice = classList.splice([random_index], 1);
    console.log(initial_splice);
    var randomNumber2 = Math.random();
    var random_index2 = (Math.round(randomNumber * (classList.length-1)));
    var second_splice = classList.splice([random_index2], 1);
    console.log(second_splice);
    initial_splice.push(second_splice[0]);
    console.log(initial_splice);
    
// var random_index2 = (Math.round(Math.random() * (classList.length-1)));
// console.log(random_index, random_index2);
//    if (random_index == random_index2) {
//    if (random_index === 0, random_index2 === 0) {			   /* previous attempt at randomizing two array indeces */
//	    random_index = random_index + 1;
//	} else { 
//	if (random_index === 1, random_index2 === 0) {
//	    random_index = random_index - 1;
//	}
//  }   

    var $li = document.createElement('li');
    var $randomlyPaired = document.createTextNode(initial_splice[0] + " & " + initial_splice[1]);
    $li.appendChild($randomlyPaired);
    docFragment.appendChild($li);
    console.log(initial_splice);
    return docFragment;
}

function printRandomN ($n_input) {
    var docFragment = document.createDocumentFragment();

    var n = document.getElementById('number_dropdown').value;
    var finalArray = [];
    while (n > 0) {
	var randomNumber = Math.random();
	var random_index = (Math.round(randomNumber * (classList.length-1)));
	var initial_splice = classList.splice([random_index], 1);
	console.log(initial_splice);
//	var finalArray = [];
	finalArray.push(initial_splice[0]);
	n = n - 1
	console.log(finalArray);
    }
    var $randomN = finalArray.toString();      
 //   $randomN = $randomN.splice(1, n);              
    console.log($randomN);

    var $li = document.createElement('li');
    var $randomN = document.createTextNode($randomN);
    $li.appendChild($randomN);
    docFragment.appendChild($li);
    return docFragment; 
}

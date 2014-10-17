document.addEventListener('DOMContentLoaded', function(){
    var $button = document.querySelector('button');

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
	    
	}
    });
});

var classList = ['Adam', 'Alex', 'Blaise', 'Brandon', 'Charisse', 'Colby', 'David', 'Evan', 'Gerald', 'Greg', 'Jackie', 'Jessica', 'Spencer', 'Kimberly', 'Kris', 'Leon', 'Luke', 'Rebecca', 'Seif', 'Scott', 'Sonda', 'Stephania'];

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
    var random_index2 = (Math.round(Math.random() * (classList.length-1)));
    console.log(random_index, random_index2);
    if (random_index === random_index2) {
	if (random_index === 0, random_index2 === 0) {
	    random_index = random_index + 1;
	} else { if (random_index === 1, random_index2 === 0) {
	    random_index = random_index - 1;
	}
    }
    }
    var $li = document.createElement('li');
    var $randomlyPaired = document.createTextNode(classList[random_index] + " & " + classList[random_index2]);
    $li.appendChild($randomlyPaired);
    docFragment.appendChild($li);
    console.log(random_index, random_index2);
    classList.splice([random_index], 1);
    if (random_index < random_index2) {
	random_index2 = random_index2 - 1;
    } 
    classList.splice([random_index2], 1);
    return docFragment;
}



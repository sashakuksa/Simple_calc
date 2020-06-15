

/*
	function alertValues(elementParameter) {
		//console.log(elementParameter.value);
		//console.log(elementParameter.className);	
	}
	function getEl (id) {
		console.log('somebody wants find elems by Id');
		var el = document.getElementById(id);
		return el;
	}




	var firstNameId = 'first-name';
	firstNameEl = getEl(firstNameId);
	alertValues(firstNameEl);
	
	var lastNameId = 'last-name';
	var lastNameEl = getEl(lastNameId);
	alertValues(lastNameEl);

	var addressId = 'address';
	var addressEl = getEl(addressId);
	alertValues(addressEl);

	var citiesId = 'cities';
	var citiesEl = getEl(citiesId);
	alertValues(citiesEl);

	var hobbiesId = 'hobbies';
	var hobbiesEl = getEl(hobbiesId);
	alertValues(hobbiesEl);

	var avatarId = 'avka';
	var avatarEl = getEl(avatarId);
	alertValues(avatarEl);

	
	firstNameEl.value = 'Andrey';
	console.log(firstNameEl.value);
	console.log(firstNameEl.className);


	


	console.log(lastNameEl.className);
	lastNameEl.className = 'error-input';
	avatarId.src = 'http://zhzh.info/img/logo_zhzh_2011.gif';
	avatarId.title = 'I am avatar';
	lastNameId.title = 'Wrong LastName';
	citiesId.value = 'Minsk';
	hobbiesId.value = 'I have no interests';
	avatarId.innerHTML = '<ul id="list"><li>1</li><li>2</li></ul>';

	var numberList = document.getElementById('list');

	//console.log(numberList.innerHTML);
	
function firstNameLog () {
	var id = 'first-name';
	var el = document.getElementById(id);
	console.log(el.value);
}
function lastNameLog () {
	var id = 'last-name';
	var el = document.getElementById(id);
	console.log(el.value);
}

*/
/*
function addErrorClass (elementId) {
	var element = document.getElementById(elementId);
	element.className = 'error-input';
}

function addErrorClassToAllInputs() {
	addErrorClass('first-name');
	addErrorClass('last-name');
	addErrorClass('address');

}

//window.setTimeout(addErrorClassToAllInputs, 2000);

var sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', addErrorClassToAllInputs);
*/

//var buttonPlus = document.getElementById('buttonPlus');
//var buttonMinus = document.getElementById('buttonMinus');
//var buttonMultiply = document.getElementById('buttonMultiply');
//var buttonDevide = document.getElementById('buttonDevide');
var input1 = document.getElementById('number1');
var input2 = document.getElementById('number2');


//var operationButtons = [buttonPlus, buttonMinus, buttonMultiply, buttonDevide];
var operationButtons = document.getElementsByClassName('operation-button');

function makeOperation(operationCode) {
	var number1 = Number(input1.value);
	var number2 = Number(input2.value);
	if (operationCode==='+') {
		var result = number1 + number2;
	}	else if (operationCode==='-'){
		var result = number1 - number2;
	}	else if (operationCode==='*') {
		var result = number1 * number2;
	}	else if (operationCode==='/') {
		var result = number1 / number2;
	}
	window.alert(result);
}

function onOperationButtonClick (eventObject) {
	var clickedElement = eventObject.currentTarget;
	var operation = clickedElement.innerHTML;
	makeOperation(operation);
}



for (var i = 0; i < operationButtons.length; i++) {
	var button = operationButtons[i];
	button.addEventListener('click', onOperationButtonClick);
}


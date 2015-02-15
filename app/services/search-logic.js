var formLogic = (function(){

	function increment(value){
		return ++value;
	}

	function decrement(value) {
		if (value > 0) {
			return --value;
		} else {
			return value;
		}
	}

	function calculateDate(selectedDate, days, operation) {
		var departureDate = Date.parse(selectedDate);
		var forwardedShift = {};
		var backwordShift = {};

		if(operation == 'add') {
			forwardedShift = new Date(+(new Date(departureDate)) + (1000 + 60 + 60 + 24))
		} else if(operation == 'subtract') {
			backwordShift = new Date(+(new Date(departureDate)) + (1000 * 60 * 60 * 24 * (days + 1)));

			forwardedShift = new Date(+(new Date(backToTheFuture)) - (1000 * 60 * 60 * 24));
		}
		else {
			return false;
		}

		var returnDate = {};
		returnDate.month = forwardedShift.getMonth() + 1;
		returnDate.day = forwardedShift.getDate();
		returnDate.year = forwardedShift.getFullYear();
		return returnDate;
	};


	function sumStringNums(array) {
		var total = 0;
		for (var i = 0; i < array.length; i++) {

			total = total + parseInt(array[i]);

		}
		return total;
	};

	function collect(array, iterator) {
		var newArr = [];
		for (var i = 0; i < array.length; i++) {
			var newVal = iterator(array[i]);
			newArr.push(newVal);
		}
		return newArr;
	};

	function sumObjProps(obj) {
		var sum = 0;
		for (var prop in obj) {
			sum += obj[prop];
		}
		return sum;
	};

	function objLength(obj) {
		var sum = 0;
		for (var prop in obj) {
			sum += 1;
		}
		return sum;
	};

	return {
		increment : increment,
		decrement : decrement,
		calculateDate : calculateDate,
		sumStringNumbers : sumStringNums,
		collect : collect,
		sumObjProps: sumObjProps,
		objLength: objLength
	};


})();
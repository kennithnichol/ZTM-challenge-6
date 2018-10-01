// Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20],
// make a function that organizes these into individual array that is ordered.
// For example answer(ArrayFromAbove) should return: 
//    [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
// Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return 
//     [[1,2], ["2", "3"]]

const data  = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
const data2 = ['22','string','string','22'];
const data3 = [1, "2", "3", 2];

const answer = (arr) => {
	let strings = arr.filter((value) => 'string' === typeof(value));
	let numbers = arr.filter((value) => 'number' === typeof(value));

	numbers = numbers.reduce(combineDuplicates, []);
	strings = strings.reduce(combineDuplicates, []);

	if ( strings.length > 0 && numbers.length > 0) {
		return [ numbers, strings ];
	}
	return numbers.concat(strings);
;
};

const combineDuplicates = (accumulator, value) => {
	let mapped = false;
	let mappedData = [];

	if (accumulator.includes(value)) {
		let index = accumulator.indexOf(value);
		accumulator[index] = [value, value];
		return accumulator;
	}

	mappedData = accumulator.map((currentValue) => {
		if ('object' === typeof(currentValue) && currentValue[0] === value) {
			mapped = true;
			return currentValue.concat(value);
		}
		return currentValue;
	});

	return true === mapped ? mappedData : accumulator.concat(value);

}

console.log(answer(data));
console.log(answer(data2));
console.log(answer(data3));

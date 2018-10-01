// Question 2: Write a javascript function that takes an array of numbers and a target number.
// The function should find two different numbers in the array that, when added together, give the target number.
// For example: answer([1,2,3], 4) should return [1,3]

const answer = (array, sum) => {

	array.sort((x,y) => x - y);

	index = 0;
	reverse_index = array.length - 1;

	while (index < reverse_index) {
		let test_sum = array[index] + array[reverse_index];
		if ( test_sum === sum) {
			return [array[index], array[reverse_index]];
		} else if ( test_sum < sum ) {
			index++;
		} else {
			reverse_index--;
		}
	}
	return 'no match found';
};

console.log( answer([1,3,4,5], 4) ); // [1,3]
console.log( answer([1,3,13,22,54,2,6,126], 76) ); // [22,54]

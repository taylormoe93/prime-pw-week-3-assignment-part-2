console.log('****** Loops Practice *******');

// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i = 0; i < 4; i++) {
	console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 0 to 5');
// Change i<4 to i<6.
for (let i = 0; i < 6; i++) {
	console.log(i);
}

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 3 to 5');
// Change i = 0 to i = 3 so that the increment count up from 3 instead of 0.
for (let i = 3; i < 6; i++) {
	console.log(i);
}
// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');
// Change i = 0 to i = 2, so we start counting from 2. Change i++ to i += 2 so that we count in twos.
for (let i = 2; i < 11; i += 2) {
	console.log(i);
}

// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');
// Let i equal 5, condition: i greater than or equal to 0, and decrement by 1.
for (let i = 5; i >= 0; i--) {
	console.log(i);
}
// 2. For of loops
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb'];

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('Some stars:');

for (let starList of stars) {
	console.log(starList);
}

// 3. While loops
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');

index = 0;
while (index < stars.length) {
	console.log(stars[index]);
	index++;
}

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');

index = 0;
while (index < 5) {
	console.log(index);
	index++;
}

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');

index = 10;
while (index >= 5) {
	console.log(index);
	index--;
}

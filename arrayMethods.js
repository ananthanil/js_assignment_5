console.log("Question 1 concat")
let arr1=[1,2,3]
let arr2=[4,5,6]
let arr3=['ananth','sam','sijoy']

console.log(arr1.concat(arr2,arr3))
console.log(arr1.concat(arr2))

console.log("");

console.log("Question 2 every")

let arrEvery = [10,18,20,22]
console.log(arrEvery.concat());

console.log("");

console.log("Question 3 fill")

const numberArr = [1,2,3,4,5,6]
const carArr = ['Benz','BM','lexus']
const vegArr= ['Potato','Broccoli','Cabbage']
console.log(numberArr.fill(7))
console.log(carArr.fill(7))
console.log(carArr.fill('TATA'))
console.log(carArr.fill('TATA'))
console.log(vegArr.fill('Carrot',0,2))

console.log("");

console.log("Question 4 find")

// console.log(arr1.find(2))

console.log("");

console.log("Question 5 findIndex");

console.log("");

console.log("Question 6 flat");

const flatArr = [1, 2, [3, [4, 5, 6], [7,8,9],[10,11,12]] ];

console.log(flatArr.flat(1))

console.log(flatArr.flat(2))

console.log("");

console.log("Question 7 forEach");

let for_each = ['apple','orange','graps','Bannana']

let count = 1;

for_each.forEach(element => {
    console.log(count++,element)
});

console.log("");

console.log("Question 8 includes");

let include_arr = ["Banana", "Orange", "Apple", "Mango"];

console.log(include_arr.includes("Mango"));

console.log(include_arr.includes("graps"));

console.log("");

console.log("Question 9 indexOf");

let indexOf_arr = ["Banana", "Orange", "Apple", "Mango"];

console.log('index value of Mango',indexOf_arr.indexOf("Mango"));

console.log('index value of Orange',indexOf_arr.indexOf("Orange"));

console.log("");

console.log("Question 10 join");

let join_arr = [" Ananth ", " Sam ", " Kishor ", " Abhishek "];

console.log(join_arr.join(' and '));

console.log("Question 11 lastIndexOf");

let lastIndexOf_arr_1 = [" Ananth ", " Sam ", " Kishor ", " Abhishek "]

let lastIndexOf_arr_2 = [" Ananth ", " Sam ", " Kishor ", " Ananth "]

console.log('lastIndexOf',lastIndexOf_arr_1.lastIndexOf(' Kishor '));

console.log('lastIndexOf',lastIndexOf_arr_1.lastIndexOf('Kishor'));

console.log('lastIndexOf',lastIndexOf_arr_2.lastIndexOf(' Ananth '));

console.log("");

console.log("Question 12 pop");

let pop_arr = ["Banana", "Orange", "Apple", "Mango"];

console.log('poped element from array ',pop_arr.pop());

console.log('Array after pop',pop_arr);

console.log("");

console.log("Question 13 push");

let push_arr = ["Banana", "Orange", "Apple", "Mango"];

push_arr.push("graps")

console.log('Array after push',push_arr)

console.log("");

console.log("Question 14 Reverse");

let reverse_arr = ["Banana", "Orange", "Apple", "Mango"];

console.log('Array before reverse',reverse_arr);

reverse_arr.reverse()

console.log('Reversed Array',reverse_arr);

console.log("");

console.log("Question 15 unshift");

let unshiftArr = ["Banana", "Orange", "Apple", "Mango"];

unshiftArr.unshift("Lemon", "Pineapple")

console.log("Added element infront of existing array",unshiftArr)

console.log("");

console.log("Question 16 shift");

let shiftArr = ["Banana", "Orange", "Apple", "Mango"];

shiftArr.shift()

console.log('Removed 1st element from array',shiftArr);

console.log("");

console.log("Question 17 slice");

let sliceArr = ['ananth','sam','abhishek','sijoy','manikandan','adithya']

let sliced = sliceArr.slice(2,4)

console.log("sliced Array : ",sliced)

console.log("");

console.log("Question 18 some");

console.log("");

console.log("Question 19 sort");

const sortArr = ["Banana", "Orange", "Apple", "Mango"];

sortArr.sort();

console.log('Sorted Array : ',sortArr);

console.log("");

console.log("Question 20 splice");

let spliceArr = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];

let spliced = spliceArr.splice(1,2)

console.log('spliced Array',spliced);

console.log();

console.log("");

console.log("Question 21 toString");

console.log("");

console.log("Question 22 Filter");

console.log("");

console.log("Question 23 Reduce");

console.log("");

console.log("Question 24 Map");

console.log("");
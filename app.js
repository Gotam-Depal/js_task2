//task-1
console.log(" Task 1 :The Temperature Scale")
var temp = +prompt("Enter temperature in Celsius:");

if (temp > 40) {
  console.log("Extremely Hot");
} else if (temp >= 31 && temp <= 40) {
  console.log("The temperature is :"+"Hot");
} else if (temp >= 21 && temp <= 30) {
  console.log("The temperature is :"+"Warm");
} else if (temp >= 11 && temp <= 20) {
  console.log("The temperature is :"+"Cool");
} else if (temp < 10) {
  console.log("The temperature is :"+"Cold");
  console.log("\n \n \n ")
}

//task-2
console.log(" Task 2 :The Days In The Month")
var month = +prompt("Enter month number (1-12):");

switch (month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        console.log("31 days");
        break;
    case 4: case 6: case 9: case 11:
        console.log("30 days");
        break;
    case 2:
        console.log("28 days");
        break;
    default:
        console.log("Invalid month number");
        

      console.log("\n \n \n ")

    }

//task-3
console.log(" Task 3 :loop 1-20")
for (var i = 1; i <= 20; i++) {
    console.log(i);
}
  console.log("\n \n \n ")


//task-4
console.log(" Task 4 :While Condition")
var n = +prompt("Enter a number:");

while (n >= 1) {
    if (n % 3 === 0) {
        console.log(n);
    }
    n--;
}
 console.log("\n \n \n ");

//task-5
var num;

do {
    num = +prompt("Enter a number greater than 50:");
} while (num <= 50);

console.log("Final number:", num);

//task-6
for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log("Outer loop:", i);
        for (var j = 1; j <= i; j++) {
            console.log("  Inner:", j);
        }
    }
}
console.log("\n \n \n ");



//task-7
for (var i = 1; i <= 15; i++) {
    if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
console.log("\n \n \n ");



//task-8
var score = +prompt("Enter initial score:");
var original = score;

score = score + 20;

console.log("Original Score:", original);
console.log("Updated Score:", score);
console.log("\n \n \n ");




//task-9
var fname = prompt("Enter your first name:");
var originalName = fname;

fname += " " + prompt("Enter your last name or caste:");

console.log("Original Name:", originalName);
console.log("Updated Name:", fname);
console.log("\n \n \n ");



//task-10
var price = +prompt("Enter product price:");
var originalPrice = price;

price = price - (price * 0.10);

console.log("Original Price:", originalPrice);
console.log("Discounted Price:", price);
console.log("\n \n \n ");



//task-11
var items = [];

for (var i = 1; i <= 5; i++) {
    var item = prompt("Enter item " + i + ":");
    items.push(item);
}

console.log("All Items:");
for (var j = 0; j < items.length; j++) {
    console.log(items[j]);
}
console.log("\n \n \n ");




//task-12
var arr = [5, 10, 15, 20, 25];

arr[1] = 100;  
arr[3] = 200;

console.log(arr);
console.log("\n \n \n ");




//task-13
var nums = [1, 2, 3, 4, 5];

for (var i = 0; i < nums.length; i++) {
    nums[i] = nums[i] * 2;
}

console.log(nums); // [2, 4, 6, 8, 10]
console.log("\n \n \n ");




//task-14
var a1 = [1, 2, 3];
var a2 = [4, 5, 6];
var merged = [];

for (var i = 0; i < a1.length; i++) {
    merged.push(a1[i]);
}

for (var j = 0; j < a2.length; j++) {
    merged.push(a2[j]);
}

console.log(merged);
console.log("\n \n \n ");




//task-15
var nums = [10, 15, 20, 25, 30];

for (var i = 0; i < nums.length; i++) {
    if (nums[i] % 10 === 0) {
        nums[i] = nums[i] + 5;
    }
}

console.log(nums); // [15, 15, 25, 25, 35]
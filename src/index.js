// Memory test 

// Repo: boolean-uk-js-memory-test

// Description
// Test the user's memory with this simple game. This will put your new found skills to the test!

// Instructions
// - Show the user 4 random numbers between 1 and 100 using an alert
// - Ask them to enter the numbers in the right order using a prompt
//     - Delay the prompt by 15 seconds (so they have time to forget)
// - Check how many numbers they entered correctly
// - Show the user their result

// Challenge 1
// Turn your whole program into a function that will allow you to change the number of numbers displayed and asked for by just entering the desired number as an argument when calling the function
// For example:

// playMemoryTest(4) should show and ask for 4 numbers

// playMemoryTest(10) should show and ask for 10 numbers

// And so on...

// Challenge 2
// When asking the user for the numbers, add ordinality to each number you ask. i.e.:
// - Enter the 1st number
// - Enter the 2nd number
// Etc...

//Original Challenge:



setTimeout(checkNumber, 15000);

function checkNumber() {

    numbers = [];  
    for (i=0; i<4; i++) {
        numbers.push(Math.floor(Math.random() * (100-1 + 1)) + 1);
    }

    alert(numbers);

    count = 0;

    let inputArray = [];
    for (i=0; i<4; i++) {
        let input = Number(prompt("Enter the random numbers in the order seen"));
        inputArray.push(input);
        }
    console.log(inputArray);  

    for (i=0; i<inputArray.length; i++) {
        
        if (inputArray[i] === numbers[i]) {
            count += 1;
        } 
    
    }
    alert("Your score is " + count);
}       









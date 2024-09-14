// function calculateSum() {
//     // Get the values from the input fields
//     const number1 = parseFloat(document.getElementById("num1").value);
//     const number2 = parseFloat(document.getElementById("num2").value);

//     // Check if the inputs are valid numbers
//     if (isNaN(number1) || isNaN(number2)) {
//         alert("Please enter valid numbers!");
//       return;
//     }

//     // Calculate the sum
//     const sum = number1 + number2;

//     // Display the result
//     document.getElementById("result").innerText = "The sum is: " + sum;
//  }


function addName(){
    const first1 = document.getElementById('text1').value;
    const last2 = document.getElementById('text2').value;
    
    
     // Regular expression to check for digits
     const containsNumber = /\d/;

     // Check if either first or last name contains numbers
     if (containsNumber.test(first1) || containsNumber.test(last2)) {
         alert("Names should not contain numbers. Please enter a valid name.");
         return;
     }

      // Check if either first or last name is empty

    if (first1.trim() === '' || last2.trim() === '') {
        alert("Please enter both first and last name");
        return;
    }

    const sum = first1 + ' ' + last2;

    document.getElementById('result').innerText = 'User fullname is ' + sum
}
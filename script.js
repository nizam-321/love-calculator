// Selecting the "Check" button
const button = document.querySelector("#calculatBtn");

// Adding click event listener to the "Check" button
button.addEventListener("click", function(event){
    event.preventDefault(); // Prevent form submission

    // Geting the values of the input fields
    const yourName = document.querySelector("#yourName").value;
    const partnerName = document.querySelector("#partnerName").value;

    // Checking if both names are entered
    if (yourName === "" || partnerName === ""){
        alert("Please Enter Both Names!"); // Alert if any name is missing
        return;
    }

    // Calculating a random love percentage
    const percentage = Math.floor(Math.random() * 100);
    console.log(percentage); // Log the percentage to the console

    // Displaying the result in the "result" element
    document.querySelector("#result").innerText = "Your love percentage is : " + percentage + " %";
});

// Selecting the "Reset" button
const resetButton = document.querySelector("#rstBtn");

// Adding click event listener to the "Reset" button
resetButton.addEventListener("click", function(){
    document.querySelector("#result").innerText = ""; // Clear the result text
});
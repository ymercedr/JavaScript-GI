var userInput = prompt("Hello, how are you doing today?");

if (userInput.toUpperCase() === userInput) {
  console.log("This person is shouting.");
} else if (userInput.toLowerCase() === userInput) {
  console.log("This person is whispering.");
} else {
  console.log("This person is neither shouting nor whispering.");
}

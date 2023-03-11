// Array of messages to display randomly
const messages = [
	"You Are Good",
	"You Are Amazing",
	"You Are Awesome",
	"You Are Incredible",
	"You Are Fantastic",
	"You Are Phenomenal"
];

// Get message element
const messageElem = document.getElementById("message");

// Set random message on page load
messageElem.textContent = messages[Math.floor(Math.random() * messages.length)];

// Reload page on button click
function reload() {
	location.reload();
}

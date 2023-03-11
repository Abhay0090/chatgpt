function showIntelligence(intelligence) {
  const intelligenceArray = ["knowledgeable", "brilliant", "wise", "perceptive", "insightful", "cerebral", "smart", "astute", "discerning", "ingenious", "resourceful", "intuitive", "thoughtful", "logical", "analytical"];
  const randomIndex = Math.floor(Math.random() * intelligenceArray.length);
  const randomIntelligence = intelligenceArray[randomIndex];

  alert(`You are ${randomIntelligence}!`);
  setTimeout(() => {
    window.location.href = "index.html";
  }, 5000);
}

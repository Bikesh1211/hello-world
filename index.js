onload = () => {
  const audio = document.getElementById('background-audio');
  audio.play().catch(function(error) {
    console.log("Error playing audio: ", error);
  });
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
  const helloWorldText = document.querySelector('.hello-world');
  helloWorldText.style.animation = 'fadeIn 10s ease-in-out forwards';

  // Define an array of texts to rotate through
  const texts = [
    "Happy Birthday Bidwota! 🎉 Wishing you a day filled with love and joy!",
    "Have a fantastic birthday! 🎂 May all your dreams come true!",
  ];
  
  let textIndex = 0;

  // Function to apply fade animation on text change
  const changeTextWithFade = () => {
    helloWorldText.classList.remove("fade-in"); // Remove previous fade effect
    void helloWorldText.offsetWidth; // Trigger reflow to restart animation
    helloWorldText.classList.add("fade-in"); // Add fade-in effect

    helloWorldText.textContent = texts[textIndex]; // Change the text content
    textIndex = (textIndex + 1) % texts.length; // Loop through the array
  };

  setInterval(changeTextWithFade, 3000); // Change text every 5 seconds
};

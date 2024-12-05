onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

  const helloWorldText = document.querySelector('.hello-world');
  helloWorldText.style.animation = 'fadeIn 10s ease-in-out forwards';

  // Define an array of texts to rotate through
  const texts = ["Hello World!", "Welcome!", "Good Day!", "Hola Mundo!", "Bonjour le monde!", "Ciao mondo!"];
  let textIndex = 0;

  // Set the text change interval to 2 seconds (2000 ms)
  setInterval(() => {
    helloWorldText.textContent = texts[textIndex]; // Change the text content
    textIndex = (textIndex + 1) % texts.length; // Loop through the array
  }, 2000);
};

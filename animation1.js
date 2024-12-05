// Helper function to generate random values
function random(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  // Select the forest and trees
  const forest = document.querySelector('.forest');
  const trees = document.querySelectorAll('.tree');
  
  // Function to create glowing orbs for each tree
  function createOrb(tree) {
    const orb = document.createElement('div');
    orb.classList.add('orb');
    orb.style.left = `${random(-5, 5)}vmin`;
    orb.style.animationDuration = `${random(3, 6)}s`;
    orb.style.animationDelay = `${random(0, 2)}s`;
    tree.appendChild(orb);
  
    // Remove orb after animation ends
    orb.addEventListener('animationend', () => {
      orb.remove();
    });
  }
  
  // Generate orbs for each tree every second
  trees.forEach((tree) => {
    setInterval(() => createOrb(tree), 1000);
  });
  
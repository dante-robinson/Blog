// Declare Variables for button and modal
const BitcoinModal = document.querySelector(".LinuxModal");
const BitcoinModalButton = document.querySelector(".LinuxModalButton");

// Define Open Modal function to remove hidden class each button needs a function.
// If statement closes the Modal if the button is reclicked.
const openBitcoinModal = function () {
  if (LinuxModal.classList.contains("hidden")) {
    LinuxModal.classList.remove("hidden");
    LinuxModal.classList.add("modal-container");
  } else {
    LinuxModal.classList.add("hidden");
    LinuxModal.classList.remove("modal-container");
  }
};

// Run Function to open Modal on click
BitcoinModalButton.addEventListener("click", openBitcoinModal);

// Won't work with other buttons as an "||" or statement some reason
// Therefore 2 separate if statements are needed.
// If event doesnt match button Modal can't open
document.addEventListener(
  "click",
  function (event) {
    if (!event.target.matches(".BitcoinModalButton")) {
      closeLinuxModal();
    }
  },
  false,
);

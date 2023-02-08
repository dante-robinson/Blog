// Declare Variables for button and modal
const LinuxModal = document.querySelector(".LinuxModal");
const LinuxModalButton = document.querySelector(".LinuxModalButton");

const CryptoModal = document.querySelector(".CryptoModal");
const CryptoModalButton = document.querySelector(".CryptoModalButton");

// Define Open Modal function to remove hidden class each button needs a function.
// If statement closes the Modal if the button is reclicked.
const openLinuxModal = function () {
  if (LinuxModal.classList.contains("hidden")) {
    LinuxModal.classList.remove("hidden");
  } else {
    LinuxModal.classList.add("hidden");
  }
};

const openCryptoModal = function () {
  if (CryptoModal.classList.contains("hidden")) {
    CryptoModal.classList.remove("hidden");
  } else {
    CryptoModal.classList.add("hidden");
  }
};

// Run Function to open Modal on click
LinuxModalButton.addEventListener("click", openLinuxModal);
CryptoModalButton.addEventListener("click", openCryptoModal);

// Close Modal functions by re-adding hidden tag
const closeLinuxModal = function () {
  LinuxModal.classList.add("hidden");
};

const closeCryptoModal = function () {
  CryptoModal.classList.add("hidden");
};

// Won't work with other buttons as an "||" or statement some reason
// Therefore 2 separate if statements are needed.
// If event doesnt match button Modal can't open
document.addEventListener(
  "click",
  function (event) {
    if (!event.target.matches(".LinuxModalButton")) {
      closeLinuxModal();
    }

    if (!event.target.matches(".CryptoModalButton")) {
      closeCryptoModal();
    }
  },
  false
);

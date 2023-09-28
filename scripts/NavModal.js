// Declare Variables for button and modal
const LinuxModal = document.querySelector(".LinuxModal");
const LinuxModalButton = document.querySelector(".LinuxModalButton");

const CryptoModal = document.querySelector(".CryptoModal");
const CryptoModalButton = document.querySelector(".CryptoModalButton");

const BSDModal = document.querySelector(".BSDModal");
const BSDModalButton = document.querySelector(".BSDModalButton");

// Define Open Modal function to remove hidden class each button needs a function.
// If statement closes the Modal if the button is reclicked.
const openLinuxModal = function () {
  if (LinuxModal.classList.contains("hidden")) {
    LinuxModal.classList.remove("hidden");
    LinuxModal.classList.add("modal-container");
  } else {
    LinuxModal.classList.add("hidden");
    LinuxModal.classList.remove("modal-container");
  }
};

const openCryptoModal = function () {
  if (CryptoModal.classList.contains("hidden")) {
    CryptoModal.classList.remove("hidden");
  } else {
    CryptoModal.classList.add("hidden");
  }
};

const openBSDModal = function () {
  if (BSDModal.classList.contains("hidden")) {
    BSDModal.classList.remove("hidden");
  } else {
    BSDModal.classList.add("hidden");
  }
};

// Run Function to open Modal on click
LinuxModalButton.addEventListener("click", openLinuxModal);
CryptoModalButton.addEventListener("click", openCryptoModal);
BSDModalButton.addEventListener("click", openBSDModal);

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

    if (!event.target.matches(".BSDModalButton")) {
      closeBSDModal();
    }
  },
  false
);

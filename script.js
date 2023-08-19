let options = document.querySelectorAll(".menu li");
let selectedOption = options[0];
let nearlySelectedOption = options[1];
let notSelectedOption = options[2];

function setSelectedOption(option) {
  option.classList.add("selected");
  option.classList.remove("nearly-selected");
  option.classList.remove("not-selected");
}

function setNearlySelectedOption(option) {
  option.classList.add("nearly-selected");
  option.classList.remove("selected");
  option.classList.remove("not-selected");
}

function setNotSelectedOption(option) {
  option.classList.add("not-selected");
  option.classList.remove("selected");
  option.classList.remove("nearly-selected");
}

function handleMouseOver(event) {
  let targetOption = event.target.closest("li");
  if (targetOption) {
    if (targetOption !== selectedOption) {
      setNotSelectedOption(selectedOption);
      setNearlySelectedOption(nearlySelectedOption);
      selectedOption = targetOption;
      nearlySelectedOption = targetOption.nextElementSibling || targetOption.previousElementSibling;
      setSelectedOption(selectedOption);
      setNearlySelectedOption(nearlySelectedOption);
    }
  }
}

function handleArrowKeys(event) {
  if (event.keyCode === 38) { // up arrow
    if (selectedOption.previousElementSibling) {
      setNotSelectedOption(selectedOption);
      setNearlySelectedOption(nearlySelectedOption);
      selectedOption = selectedOption.previousElementSibling;
      nearlySelectedOption = nearlySelectedOption.previousElementSibling;
      setSelectedOption(selectedOption);
    } else {
      setNotSelectedOption(selectedOption);
      setNearlySelectedOption(nearlySelectedOption);
      selectedOption = options[options.length - 1];
      nearlySelectedOption = options[options.length - 2];
      setSelectedOption(selectedOption);
      setNearlySelectedOption(nearlySelectedOption);
    }
    event.preventDefault();
  } else if (event.keyCode === 40) { // down arrow
    if (selectedOption.nextElementSibling) {
      setNotSelectedOption(selectedOption);
      setNearlySelectedOption(nearlySelectedOption);
      selectedOption = selectedOption.nextElementSibling;
      nearlySelectedOption = nearlySelectedOption.nextElementSibling;
      setSelectedOption(selectedOption);
    } else {
      setNotSelectedOption(selectedOption);
      setNearlySelectedOption(nearlySelectedOption);
      selectedOption = options[0];
      nearlySelectedOption = options[1];
      setSelectedOption(selectedOption);
      setNearlySelectedOption(nearlySelectedOption);
    }
    event.preventDefault();
  }
}

function handleMouseWheel(event) {
  if (event.deltaY < 0) { // scroll up
    if (selectedOption.previousElementSibling) {
      setNotSelectedOption(selectedOption);
      setNearlySelectedOption(nearlySelectedOption);
      selectedOption = selectedOption.previousElementSibling;
      nearlySelectedOption = nearlySelectedOption.previousElementSibling;
      setSelectedOption(selectedOption);
    } else {
      setNotSelectedOption(selectedOption);
      setNearlySelectedOption(nearlySelectedOption);
      selectedOption = options[options.length - 1];
      nearlySelectedOption = options[options.length - 2];
      setSelectedOption(selectedOption);
      setNearlySelectedOption(nearlySelectedOption);
    }
    event.preventDefault();
  } else if (event.deltaY > 0) { // scroll down
    if (selectedOption.nextElementSibling) {
      setNotSelectedOption(selectedOption);
      setNearlySelectedOption(nearlySelectedOption);
      selectedOption = selectedOption.nextElementSibling;
      nearlySelectedOption = nearlySelectedOption.nextElementSibling;
      setSelectedOption(selectedOption);
    } else {
      setNotSelectedOption(selectedOption);
      setNearlySelectedOption(nearlySelectedOption);
      selectedOption = options[0];
      nearlySelectedOption = options[1];
      setSelectedOption(selectedOption);
      setNearlySelectedOption(nearlySelectedOption);
    }
    event.preventDefault();
  }
}



      function handleKeyPress(event) {
        if (event.keyCode === 13) { // enter key
          window.location.href = selectedOption.querySelector("a").href;
        }
      }
      
      document.addEventListener("DOMContentLoaded", () => {
        setSelectedOption(selectedOption);
        setNearlySelectedOption(nearlySelectedOption);
        setNotSelectedOption(notSelectedOption);
        document.addEventListener("mouseover", handleMouseOver);
        document.addEventListener("keydown", handleArrowKeys);
        document.addEventListener("wheel", handleMouseWheel);
        document.addEventListener("keypress", handleKeyPress);
      });

      function setNearlySelectedOption(option) {
        if (option) {
          option.classList.add("nearly-selected");
          option.classList.remove("selected");
          option.classList.remove("not-selected");
        }
      }
      
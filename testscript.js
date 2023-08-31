document.addEventListener("DOMContentLoaded", () => {
  const listItems = document.querySelectorAll(".menu li");
  const contentDiv = document.getElementById("content");
  let currentIndex = 0;
  let confirmedIndex = null;

  function updateClass() {
    listItems.forEach((item, index) => {
      item.classList.remove("selected", "nearly-selected", "not-selected", "confirmed");

      if (index === confirmedIndex) {
        item.classList.add("confirmed", "selected");
      } else if (index === currentIndex) {
        item.classList.add("selected");
      } else if (index === (currentIndex - 1 + listItems.length) % listItems.length || index === (currentIndex + 1) % listItems.length) {
        item.classList.add("nearly-selected");
      } else {
        item.classList.add("not-selected");
      }
    });
  }

  function showContent(index) {
    if (index === null) {
      contentDiv.innerHTML = "";
      return;
    }

    const contents = {
      '0': [
        { text: "Jeu 1", link: "/jeu-1" },
        { text: "Jeu 2", link: "/jeu-2" }
      ],
      '1': [
        { text: "Option de compte 1", link: "/compte/option-1" },
        { text: "Option de compte 2", link: "/compte/option-2" }
      ],
      // ... (ajoutez d'autres contenus ici)
    };

    const currentContent = contents[index];
    if (currentContent) {
      const newContent = `<ul>
        ${currentContent.map(item => `<li><a class="menu-button" role="button"  href="${item.link}" target="_blank">${item.text}</a></li>`).join('')}
      </ul>`;
      contentDiv.innerHTML = newContent;

      const buttonsArray = currentContent.map(item => {
        return `<button class='menu2-button' onclick='window.open("${item.link}", "_blank")'>${item.text}</button>`;
      });
      contentDiv.innerHTML += buttonsArray.join("");
    }
  }

  
    updateClass();

    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowUp") {
        currentIndex = (currentIndex - 1 + listItems.length) % listItems.length;
      } else if (e.key === "ArrowDown") {
        currentIndex = (currentIndex + 1) % listItems.length;
      } else if (e.key === "Enter") {
        if (confirmedIndex === currentIndex) {
          confirmedIndex = null;
          showContent(null);
        } else {
          confirmedIndex = currentIndex;
          showContent(confirmedIndex);
        }
      } else if (e.key === "Escape") { // Ajout de la touche "Échap"
        confirmedIndex = null;
        showContent(null);
      }
      updateClass();
    });
    
  
    document.addEventListener("wheel", (e) => {
      if (e.deltaY > 0) {
        currentIndex = (currentIndex + 1) % listItems.length;
      } else if (e.deltaY < 0) {
        currentIndex = (currentIndex - 1 + listItems.length) % listItems.length;
      }
      updateClass();
    });
  
    listItems.forEach((item, index) => {
      item.addEventListener("click", () => {
        currentIndex = index;
        confirmedIndex = index;
        updateClass();
        showContent(confirmedIndex);
      });
  
      // Ajout de l'écouteur mouseover
      item.addEventListener("mouseover", () => {
        currentIndex = index;
        updateClass();
      });
    });
  });
  


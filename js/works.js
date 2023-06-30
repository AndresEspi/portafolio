const projects = [
  {
    title: "Multy-Post Stories",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    languages: ["CSS", "HTML", "JavaScript", "Webpack"],
    image: "ressources/Ilustration/Prj.png",
  },
  {
    title: "Profesional Art Printing Data",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    languages: ["CSS", "HTML", "Ruby", "Bootstrap"],
    image: "ressources/Ilustration/Prj1.png",
  },
  {
    title: "Data Dashboard Healthcare",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    languages: ["CSS", "HTML", "JavaScript", "Webpack"],
    image: "ressources/Ilustration/Pr2.png",
  },
  {
    title: "Website Portfolio",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    languages: ["CSS", "HTML", "JavaScript", "Webpack"],
    image: "ressources/Ilustration/Pr3.png",
  },
  {
    title: "Profesional Art Printing Data",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    languages: ["CSS", "HTML", "JavaScript", "Webpack"],
    image: "ressources/Ilustration/Prj1.png",
  },
  {
    title: "Data Dashboard Healthcare",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    languages: ["CSS", "HTML", "JavaScript", "Webpack"],
    image: "ressources/Ilustration/Pr2.png",
  },
  {
    title: "Website Portfolio",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    languages: ["CSS", "HTML", "JavaScript", "Webpack"],
    image: "ressources/Ilustration/Pr3.png",
  },
];

let blurBackgroundElement = null;

window.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(
    ".button-project, .button-project1, .button-project2"
  );

  buttons.forEach(function (button, index) {
    button.addEventListener("click", function () {
      const project = projects[index];
      showPopup(project);
      addBlurBackground();
    });
  });

  function showPopup(project) {
    const existingPopups = document.querySelectorAll(".popup");
    existingPopups.forEach(function (popup) {
      document.body.removeChild(popup);
    });

    const popup = document.createElement("div");
    popup.classList.add("popup");

    const container = document.createElement("div");
    container.classList.add("container");

    const leftContainer = document.createElement("div");
    leftContainer.classList.add("left-container");

    const rightContainer = document.createElement("div");
    rightContainer.classList.add("right-container");

    const title = document.createElement("h2");
    title.textContent = project.title;

    const languages = document.createElement("ul");
    project.languages.forEach(function (language) {
      const listItem = document.createElement("li");
      listItem.textContent = language;
      languages.appendChild(listItem);
    });

    const image = document.createElement("img");
    image.src = project.image;
    image.alt = project.title;

    const infoContainer = document.createElement("div");
    infoContainer.classList.add("info-container");

    const description = document.createElement("p");
    description.textContent = project.description;

    const closeButton = document.createElement("button");
    closeButton.classList.add("close-button");
    closeButton.textContent = "X";
    closeButton.addEventListener("click", function () {
      document.body.removeChild(popup);
      removeBlurBackground();
    });

    rightContainer.appendChild(closeButton);

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");

    const button1 = document.createElement("button");
    button1.classList.add("popup-button");
    button1.textContent = "See live";

    const image1 = document.createElement("img");
    image1.src = "./ressources/icons/Export.png";
    button1.appendChild(image1);

    const button2 = document.createElement("button");
    button2.classList.add("popup-button");
    button2.textContent = "See source";

    const image2 = document.createElement("img");
    image2.src = "./ressources/icons/Frame.png";
    button2.appendChild(image2);

    leftContainer.appendChild(title);
    leftContainer.appendChild(languages);
    rightContainer.appendChild(image);
    rightContainer.appendChild(infoContainer);
    rightContainer.appendChild(buttonContainer);

    infoContainer.appendChild(description);
    infoContainer.appendChild(buttonContainer);
    buttonContainer.appendChild(button1);
    buttonContainer.appendChild(button2);

    container.appendChild(leftContainer);
    container.appendChild(rightContainer);

    popup.appendChild(container);
    document.body.appendChild(popup);
  }
});
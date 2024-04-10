// for about tab contents

function openTab(tabName) {
  // Get all tab links and tab contents.
  const tabLinks = document.querySelectorAll(".tab-links");
  const tabContents = document.querySelectorAll(".tab-contents");

  // Hide all tab contents.
  tabContents.forEach((tabContent) => {
    tabContent.classList.remove("active-tab");
  });

  // Show the specified tab content.
  const tabContent = document.querySelector(`#${tabName}`);
  tabContent.classList.add("active-tab");

  // Remove the active class from all tab links.
  tabLinks.forEach((tabLink) => {
    tabLink.classList.remove("active-link");
  });

  // Add the active class to the specified tab link.
  const tabLink = document.querySelector(
    `.tab-links[onclick="openTab('${tabName}')"]`
  );
  tabLink.classList.add("active-link");
}

// navbar

let sideMenu = document.getElementById("side-menu");

function openMenu() {
  sideMenu.style.right = "0px";
}
function closeMenu() {
  sideMenu.style.right = "-220px";
}

// form

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzmGWo-Z0C9o03oYNkrCpPuuam_860baxUYarug6jLpcppv9QGJ6t3tqT3kGYOhpA/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});

let submitBtn = document.getElementById("submit");
let nameFromForm = document.getElementById("name");
let emailFromForm = document.getElementById("email");
let messageFromForm = document.getElementById("message");

submitBtn.addEventListener("click", () => {
  nameFromForm.value = "";
  emailFromForm.value = "";
  messageFromForm.value = "";
});

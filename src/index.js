import "./styles/globalandhomepage.css";
import "./styles/Menu.css";
import GenerateHomePage from "./Modules/homepage";
import GenerateMenuPage from "./Modules/menu";
import GenerateContactPage from "./Modules/contactus";

const content = document.querySelector("#content");

// Put in object to reduce repeating myself(DRY principle)
const pageGenerators = {
  Home: GenerateHomePage,
  Menu: GenerateMenuPage,
  Contact: GenerateContactPage,
};

GenerateHomePage();

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", changetab);
});

function changetab(event) {
  const buttonText = this.textContent;
  content.innerHTML = ""; // Clear content before loading new page

  const generatePage = pageGenerators[buttonText];
  if (generatePage) {
    generatePage();
  } else {
    alert("Error: Page not found.");
    console.error("No correspoding page found.");
  }
}
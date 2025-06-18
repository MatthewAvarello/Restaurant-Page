import "./styles/globalandhomepage.css"
import "./styles/Menu.css"
import GenerateHomePage from "./Modules/homepage"
import GenerateMenuPage from "./Modules/menu"
import GenerateContactPage from "./Modules/contactus"
let content = document.querySelector("#content")


GenerateHomePage()
let buttons = document.querySelectorAll("button")

buttons.forEach(button => {
    button.addEventListener("click",changetab)
})
function changetab(){
    let buttontext = this.textContent
    content.innerHTML = ""
    if (buttontext == "Home"){
        GenerateHomePage()
    } else if (buttontext == "Menu"){
        GenerateMenuPage()
    } else if (buttontext == "Contact"){
        GenerateContactPage()
    } else{
        alert("Error Switching page")
        console.error("Error Switching Page")
    }
}
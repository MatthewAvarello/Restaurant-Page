export default function GenerateContactPage(){
    let contactusheader = document.createElement("h2"); contactusheader.textContent = "Contacts coming soon!"; contactusheader.setAttribute("class","white")
    let content = document.querySelector("#content")
    content.append(contactusheader)
}
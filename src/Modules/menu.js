import spaghettiphoto from "../images/Pork-meatballs-spagetti_Preview.jpg"
import Pizzaphoto from "../images/Margherita-Pizza.jpeg"

export default function GenerateMenuPage(){
    // Loop simplifies this and make sit more efficient but for the few items did not bother
    let content = document.querySelector("#content")
    let Menuheader = document.createElement("h2"); Menuheader.textContent = "Menu"; Menuheader.setAttribute("class", "homepage-h2");
    let foodcontainer = document.createElement("div"); foodcontainer.setAttribute("id", "food-container");
    let fooditem1 = document.createElement("div"); fooditem1.setAttribute("class", "food-item");
    let pizzahead = document.createElement("h4"); pizzahead.setAttribute("class", "white bigger"); pizzahead.textContent = "Margherita Pizza";
    let pizzaimg = document.createElement("img"); pizzaimg.setAttribute("src", Pizzaphoto); pizzaimg.setAttribute("alt", ""); pizzaimg.setAttribute("class", "foodimage");
    let pizzadetails = document.createElement("details"); pizzadetails.setAttribute("class", "white");
    let pizzasummary = document.createElement("summary"); pizzasummary.textContent = "Details";
    pizzadetails.append(pizzasummary, "The traditional italian pizza with a tomato sauce base, bocconcini and basil");
    fooditem1.append(pizzahead, pizzaimg, pizzadetails);
    let fooditem2 = document.createElement("div"); fooditem2.setAttribute("class", "food-item");
    let spaghettihead = document.createElement("h4"); spaghettihead.setAttribute("class", "white bigger"); spaghettihead.textContent = "Spaghetti and meatballs";
    let spaghettiimg = document.createElement("img"); spaghettiimg.setAttribute("src", spaghettiphoto); spaghettiimg.setAttribute("alt", ""); spaghettiimg.setAttribute("class", "foodimage");
    let spaghettidetails = document.createElement("details"); spaghettidetails.setAttribute("class", "white");
    let spaghettisummary = document.createElement("summary"); spaghettisummary.textContent = "Details";
    spaghettidetails.append(spaghettisummary, "Our Famous Spaghetti and meatballs made entirely from scratch.");
    fooditem2.append(spaghettihead, spaghettiimg, spaghettidetails);
    let fooditem3 = document.createElement("div"); fooditem3.setAttribute("class", "food-item white big");
    let p1 = document.createElement("p"); p1.textContent = "Check Back Soon for more amazing items!";
    fooditem3.append(p1);
    let fooditem4 = document.createElement("div"); fooditem4.setAttribute("class", "food-item white big");
    let p2 = document.createElement("p"); p2.textContent = "Check Back Soon for more amazing items!";
    fooditem4.append(p2);
    foodcontainer.append(fooditem1, fooditem2, fooditem3, fooditem4);
    content.append(Menuheader, foodcontainer);

}

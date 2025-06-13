export default function GenerateHomePage(){
    let content = document.querySelector("#content")
    let restaurantheader = document.createElement("h2"); restaurantheader.textContent = "Ristorante della Nonna";
    let maindiv = document.createElement("div"); maindiv.setAttribute("id","whitearea")
    let declaration = document.createElement("h3"); declaration.textContent ="Where Food meets love!"; declaration.setAttribute("class","bigger")
    let maintext = document.createElement("p"); maintext.textContent= "At Ristorante della Nonna, we bring the heart of Italy to your table with recipes inspired by our Nonna’s kitchen. Our family atmosphere and lovingly prepared dishes—like fresh handmade pasta, slow-simmered sauces, and traditional Italian desserts—offer a true taste of home. Join us for an unforgettable dining experience where every bite gives you a twinge of nostalgia."; maintext.setAttribute("class","big")
    content.append(restaurantheader,maindiv);  maindiv.append(declaration,maintext); 
    console.log("WASSUP!")
}

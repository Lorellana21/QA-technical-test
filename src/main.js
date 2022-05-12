
import "./main.css";
import './router';
import "./pages/home.page";
import "./ui/header.ui";


    const burguer = document.querySelector(".burguer");
const menu = document.querySelector("header nav ul");

burguer.addEventListener("click", function(){
    menu.classList.toggle("open");
})
  
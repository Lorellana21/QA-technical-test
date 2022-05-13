
import "./main.css";
import './router';
import "./pages/home.page";
// import img from './file.png';




const burguer = document.querySelector(".burguer");
console.log(burguer);
const menu = document.querySelector("header nav ul");

burguer.addEventListener("click", function(){
    menu.classList.toggle("open");
})
  
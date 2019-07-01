let navbartoogled = false;
let tooglebtn = document.querySelector("button")

let toogle_navbar = function(e) {
  // e.preventDefault()
  if (navbartoogled === false) {
    document.querySelector('#navbarNav').style.backgroundColor = "#edeff2";
    // document.querySelector('.mycustom_collapse').style.height = "23rem";
    navbartoogled == true;
    console.log("btn clicked")
    }
  else if(navbartoogled === true){
    document.querySelector('#navbarNav').style.backgroundColor = "transparent";
    // document.querySelector('.mycustom_collapse').style.height = "4rem";
    navbartoogled == false;}
    console.log("btn unclicked")
}

tooglebtn.addEventListener("click", toogle_navbar, false);

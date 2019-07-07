let navbartoogled = false;
let tooglebtn = document.querySelector("button")

let toogle_navbar = function(e) {
  // e.preventDefault()
  if (navbartoogled === false) {
	document.querySelector('.custom-navbar').style.height = "23rem;"
    document.querySelector('#navbarNav').style.backgroundColor = "#004b7c";
    // document.querySelector('.mycustom_collapse').style.height = "23rem";
    navbartoogled == true;
    }
  else if(navbartoogled === true){
	document.querySelector('.custom-navbar').style.height = "initial;"
    document.querySelector('#navbarNav').style.backgroundColor = "transparent";
    navbartoogled == false;}
}

tooglebtn.addEventListener("click", toogle_navbar, false);

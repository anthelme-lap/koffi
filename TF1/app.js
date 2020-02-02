const header = document.querySelector("#nav");
const sectionOne = document.querySelector(".section");

const sectionOneOption = {};

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver){
 
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      header.classList.add("nav-scrolled");
      var image = document.querySelector(".blue");
      image.src = "images/home_c/logoTfI2.svg";
    } else {
      header.classList.remove("nav-scrolled");
      var tf = document.querySelector(".blue");
      tf.src = "images/home_c/logoTfI.svg";

    }
  });

}, sectionOneOption);

sectionOneObserver.observe(sectionOne);







.nav-scrolled {
    background-color: #fff ;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.5) ;
    transition: background-color 200ms linear;
  }




.nav-scrolled #logo ul li a
{
   
    color: #01081f;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
   
}

.nav-scrolled input
{
    color: rgba(0, 0, 0, 0.5);
    font-size: 15px;
    background: transparent;
    border: none;
}
.nav-scrolled #form div i{
    color: #01081f;
}


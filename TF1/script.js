var header = document.querySelector(".tete");
var lesLI = document.querySelector(".LesLiens");
var input = document.querySelectorAll(".barreRecherche");

window.addEventListener('scroll', function (e){
        if (this.window.scrollY >= 500){
        header.style = " background:white; color:black; box-shadow: 1px 1px 2px 2px rgba(140,140,140,0.5); padding: 0 80px "
        logo.src = "image/bleu.svg"
        input.style = "color: black "
        lesLI.forEach(function (e){
                e.style = "color:black"
                })

} else{
        header.style = "  background-color: rgba(0,0,0,.45); color: #fff;"
        logo.src = "jip.svg" 
        input.style = "color: black "
        lesLI.forEach(function (e){
        e.style = "color:black"
        })
}
})

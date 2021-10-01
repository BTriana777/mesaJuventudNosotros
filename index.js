let slider = document.querySelector(".containerSliders")
let sliderIndivudial = document.querySelectorAll(".sliders")
let contador = 1;
let width = sliderIndivudial[0].clientWidth;
let intervalo = 3000;

window.addEventListener("resize", function(){
    width = sliderIndivudial[0].clientWidth
})
setInterval(function(){
    slides();
}, 5000)
function slides(){
    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "transform .8s"
    contador++;
    if (contador == sliderIndivudial.length){
        setTimeout(function(){
            slider.style.transform = "translate(0px)";
            contador = 1
        },1000)
    }
}
const buttom13 = () =>{
    slider.style.transform = "translate("+(-width*0)+"px)";
    contador = 1
}
const buttom14 = () =>{
    slider.style.transform = "translate("+(-width*1)+"px)";
    contador = 2
}
const buttom16 = () =>{
    slider.style.transform = "translate("+(-width*2)+"px)";
    contador = 3
}
const buttom17 = () =>{
    slider.style.transform = "translate("+(-width*3)+"px)";
    contador = 4
}
const buttom18 = () =>{
    slider.style.transform = "translate("+(-width*4)+"px)";
    contador = 5
}
const buttom19 = () =>{
    slider.style.transform = "translate("+(-width*5)+"px)";
    contador = 0
}
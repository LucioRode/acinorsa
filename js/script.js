/*---   Menu Cel   ---*/
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
/*----   Fin Menu Cel   ---*/

//     Tope de menu
var elementTop = $('.nav').offset().top;

$(window).scroll(function(){
    if( $(window).scrollTop() >= elementTop){
        $('body').addClass('nav_fixed');
    }else{
        $('body').removeClass('nav_fixed');
    }
});

//-----------------------------------------------------------------------

$('.btn-menu').on('click', function(){
    $('.nav').toggleClass('nav-toggle');
})

let popup = document.getElementById('popup'),
imagen = document.querySelectorAll('.img'),
imagenPopup = document.getElementById('imagenPopup'),
container = document.getElementById('container'),
close = document.getElementById('close'),
left = document.getElementById('left'),
right = document.getElementById('right'),
countImg = "",
totalImg = imagen.length

close.onclick = function(){
    popup.style.display = "none"
}

left.onclick = function(){
    countImg = countImg - 1
    if(countImg < 0){
        countImg = totalImg-1
    }
    imagenPopup.src = imagen[countImg].src
}

right.onclick = function(){
    countImg = countImg + 1
    if(countImg > totalImg-1){
        countImg = 0
    }
    imagenPopup.src = imagen[countImg].src
}
 
for(let i = 0; i < totalImg; i++){
    imagen[i].onclick = function(){
        popup.style.display = "block"
        imagenPopup.src = this.src
        countImg = i
    }
}

let slider = document.querySelector(".slider-contenedor")
let sliderIndividual = document.querySelectorAll(".contenido-slider")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 3000;

window.addEventListener("resize", function(){
    width = sliderIndividual[0].clientWidth;
})

setInterval(function(){
    slides();
},intervalo);


function slides(){
    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "transform .15s";
    contador++;

    if(contador == sliderIndividual.length){
        setTimeout(function(){
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 1s";
            contador=1;
        },2000)
    }
}

/*---   Mostrar Comision   ---*/
function openComision(evt, seccion) {
    document.getElementById(seccion).style.display = "block";
    evt.currentTarget.className += " active";
  }
/*---   Mostrar Comision   ---*/

/*---   Tabla de resultados   ---*/

function openPanel(evt, panel) {
    var i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(panel).style.display = "block";
    evt.currentTarget.className += " active";
  }

  /*---   Tabla de resultados   ---*/




 
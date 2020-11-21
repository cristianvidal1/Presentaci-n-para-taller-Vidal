/*----------------- Sidebar función-----------------*/
jQuery(document).ready(function() {
	
	/*Sidebar*/
	$('.dismiss, .overlay').on('click', function() {
        $('.sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('.open-menu-toggle').on('click', function(e) {
    	e.preventDefault();
        $('.sidebar').addClass('active');
        $('.overlay').addClass('active');
        // cerrar sub-menús abiertos
        $('.collapse.show').toggleClass('show');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
    /* cambiar el estilo de la barra lateral */
	$('a.btn-customized-dark').on('click', function(e) {
		e.preventDefault();
		$('.sidebar').removeClass('light');
	});
	$('a.btn-customized-light').on('click', function(e) {
		e.preventDefault();
		$('.sidebar').addClass('light');
	});
	/* reemplazar la barra de desplazamiento del navegador por defecto en la barra lateral, en caso de que el menú de la barra 
	lateral tenga una altura mayor que la del puerto de visualización */
	$('.sidebar').mCustomScrollbar({
		theme: "minimal-dark"
	});
});
/*------------------------------------------------*/

/*--------------------Boton de ir arriba---------------------*/
// Scroll up

document.getElementById("ir-arriba").addEventListener("click", scrollUp);

function scrollUp(){

    var currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0){
        window.requestAnimationFrame(scrollUp);
		window.scrollTo (0, currentScroll - (currentScroll / 16));
		buttonUp.style.transform = "scale(0)";

    }
}
// Esta función es para decirle cuando quiero que aparesza el boton y cuando desaparesca
buttonUp = document.getElementById("ir-arriba");

window.onscroll = function(){

    var scroll = document.documentElement.scrollTop;

    if (scroll > 500){
        buttonUp.style.transform = "scale(1)";
    }else{
        buttonUp.style.transform = "scale(0)";
    }

}

/*------------------------------------------------------------*/

/*------------------- Pantalla de carga ----------------------*/
function counter(){
    let count=setInterval(function(){
        let c = parseInt($('.counter').text());
        $('.counter').text((++c).toString());
        
        if(c==100){
            clearInterval(count);
            $('.counter').addClass('hide');
            $('.preloader').addClass('active');
        }
    },27);
}
counter();

/*Edicion de efecto del titulo */
TweenMax.staggerFrom(".leRollFromTop span", 1,{autoAlpha:0, y:-60, rotationX:180, perspective:600, ease:Power2.easeOut}, 0.2);


/*----------POPOVERS----------*/ 


'use stric';

const boton = $('#menu');
let click =1;
boton.on("click",(e)=>{
  // $("#menu-movil").toggle("movil-menu");
  if(click == 1){
			  $("#menu-movil").animate({
				left: '0'
			});
			click = 0;
		} else {
			click = 1;
		  $("#menu-movil").animate({
				left: '-100%'
			});
		}
})
console.log("hola");

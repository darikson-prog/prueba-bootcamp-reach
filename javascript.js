 function calcularprecio(preciobase, descuento){

    if(preciobase <=0 || descuento <0 || descuento >100 ){
        return ("valores invalidos");
    }
    
    if(descuento ===0){
        return ("el precio final con descuento es $") + preciobase
    }

    if(descuento >0 && descuento <=100){
        var preciobase = preciobase - (preciobase * descuento / 100)
        return("el precio final con descuento es $") + preciobase
    }

}

 console.log(calcularprecio(100, 80))



 
  
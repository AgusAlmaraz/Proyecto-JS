let marca= prompt("Hola ingrese marca de auto y modelo")

let fabricacion = prompt("año de fabricacion: 1-2000 a 2009 2-2010 a 2019 3-2020 en adelante")

let km= prompt("Ingrese cantidad de kilometros: 1-0 a 100000 kl 2-100000 a 200000 3-200000 0 más")


function cotizacion (marca,fabricacion,km){
        console.log("Hola usuario de "+marca);

        let cotizacionInicial=10000
        let cotizacionFinal=0
        
        if(fabricacion==="1"){
            cotizacionFinal=cotizacionInicial * 1.15
            // console.log(cotizacionFinal);
        }
        else if(fabricacion==="2"){
            cotizacionFinal=cotizacionInicial * 1.30
            // console.log(cotizacionFinal);
        }
        else if(fabricacion==="3") {
            cotizacionFinal=cotizacionInicial * 1.50
            // console.log(cotizacionFinal);

        }
        else{
            console.log("Ingrese opcion valida");
        };
        
        if (km==="1") {
            cotizacionKm=cotizacionFinal * 1.30
            console.log("El total a pagar por su seguro sera $" +cotizacionKm);
        }
        else if(km==="2"){
            cotizacionKm=cotizacionFinal * 1.50
            console.log("El total a pagar por su seguro sera $" +cotizacionKm);
        }
        else if(km==="3"){
            cotizacionKm=cotizacionFinal * 1.70
            console.log("El total a pagar por su seguro sera $" +cotizacionKm);
        }
        else {
            console.log("Ingrese opcion valida");
        }
  

}
while(marca.length>0){
    cotizacion(marca,fabricacion,km)
    break;

}
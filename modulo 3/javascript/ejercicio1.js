var distancia =prompt('Ingrese distancia del destino en metros:','');
var vehiculo = '';

if(distancia <= 1000){
    vehiculo = 'a pie'
    document.write('Para esa distancia es conveniente ir ' + vehiculo)
}
else if(distancia > 1000 && distancia <= 10000){
    vehiculo = 'en bicicleta'
    document.write('Para esa distancia es conveniente ir ' + vehiculo)
}
else if(distancia > 10000 && distancia <= 30000){
    vehiculo = 'en colectivo'
    document.write('Para esa distancia es conveniente ir ' + vehiculo)
}
else if(distancia > 30000 && distancia <= 100000){
    vehiculo = 'en auto'
    document.write('Para esa distancia es conveniente ir ' + vehiculo)
}
else{
    vehiculo = 'en avión'
    document.write('Para esa distancia es conveniente ir ' + vehiculo)
}
/* calculo año bisiesto  */

$('#btnArreglo-1').click(function(){
    
    let aleatorios = Array.from({length: 20}, () => Math.floor(Math.random() * 100));
    var codigo = '<table class="table table-bordered"><thead><tr>';
    for(var i = 0; i<20;i++){
        codigo += '<th scope="col" id="num_' + i + '">' + aleatorios[i] + '</th>';
    }
    codigo += '</tr></thead>'
    $('#sinordenar_1').html(codigo);

});

$('#btnOrdena-1').click(function(){
    var numeros = new Array(20);
    for(var i = 0; i<20;i++){
        numeros[i]= $('#num_' + i).text();
    };

    var ordenados = new Array(1);
    ordenados[0]=0;
    console.log(...ordenados);

    for(i=0; i<4; i++){
        cifra = numeros[i];
        alert(cifra);
        console.log('cifra: ' + i + ' - ' + cifra);
        var salir = 0;
        alert('max:' + Math.max(...ordenados) );
        alert('min:' + Math.min(...ordenados) );

        if(Math.min(...ordenados)==0){
            ordenados[0]=cifra;
        } else {
            if(cifra > Math.max(...ordenados)){
                alert("max");
                ordenados[ordenados.length]= cifra;                
                alert("array max: " + ordenados);
            } else if(cifra < Math.min(...ordenados)){
                alert("min");
                var ordenados_temp = new Array();
                ordenados_temp[0]= cifra;
                for(var h=0; h < ordenados.length;h++){
                    ordenados_temp[h+1]= ordenados[h];
                }
                ordenados = ordenados_temp;
                alert("array min: " + ordenados);
            } else {
                alert("interno");
                for(var m=0; m < ordenados.length; m++ ){
                    alert("m " + m + " -interno: " + ordenados[m]);

                    if(ordenados[m] > cifra){
                        ordenados_temp = ordenados;
                        ordenados_temp[m+1]=ordenados_temp[m];
                        ordenados_temp[m]=cifra;                        
                        alert("temp_previo:" , ordenados_temp);
                        for(var l = m; l<ordenados.length;l++){
                            ordenados_temp[m+1]=ordenados[m];
                        }
                        alert("temp_final:" , ordenados_temp);
                        ordenados = ordenados_temp;
                        
                        var salir= 1;
                    } 
                    if(salir==1) break;
                }
            }
    
            


        }

        
        
        
    }

alert(ordenados);

    
});

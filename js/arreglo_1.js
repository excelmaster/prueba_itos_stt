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
    /* for(var i = 0; i<20;i++){
        numeros[i]= $('#num_' + i).text();
    }; */
    numeros =[22,89,21,95,3,48,13,7,24,4,21,25,15,41,38,12,17,20,13,31];
    
    var ordenados = new Array(1);
    ordenados[0]=0;
    var ordenados_fin = new Array(1);
    ordenados_fin[0] =0; 
    console.log(...ordenados);

    for(i=0; i<20; i++){
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

                    if( parseInt( ordenados[m]) > cifra){
                        alert("cifra: " +  cifra + " - " +ordenados[m]);
                        ordenados_temp = ordenados;                        
                        var largo_ordenado =ordenados_temp.length;
                        alert("largo_ordenado: " + largo_ordenado);

                        for(n=largo_ordenado;n > m ;n--){
                            ordenados_temp[n]= ordenados[n-1];
                        };
                        
                        alert("temp 1: " + ordenados_temp);
                        ordenados_temp[m+1]=ordenados_temp[m];
                        alert("temp 2: " + ordenados_temp);
                        ordenados_temp[m]=cifra;  
                        alert("temp 3: " + ordenados_temp);                      
                        alert("temp_previo: " + ordenados_temp);
                        alert("m: " + m + ' / largo ordenado: ' + largo_ordenado);
                        alert("temp_final: " + ordenados_temp);
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

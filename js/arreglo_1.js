/* genera 20 posiciones de numeros  */

$('#btnArreglo-1').click(function(){
    //crea los números aleatorios
    let aleatorios = Array.from({length: 20}, () => Math.floor(Math.random() * (100-1) + 1 )) ;
    //render
    var codigo = '<table class="table table-bordered"><thead><tr>';
    for(var i = 0; i<20;i++){
        codigo += '<th scope="col" id="num_' + i + '">' + aleatorios[i] + '</th>';
    }
    codigo += '</tr></thead>'
    $('#sinordenar_1').html(codigo);

});

$('#btnOrdena-1').click(function(){
    //trae los numeros
    var numeros = new Array(20);
    for(var i = 0; i<20;i++){
        numeros[i]= $('#num_' + i).text();
    };
    
    //ordena el array
    var ordenados = new Array(1);
    ordenados[0]=0;
    var ordenados_fin = new Array(1);
    ordenados_fin[0] =0; 
    console.log(...ordenados);

    for(i=0; i<20; i++){
        cifra = numeros[i];
        console.log('cifra: ' + i + ' - ' + cifra);
        var salir = 0;

        if(Math.min(...ordenados)==0){
            ordenados[0]=cifra;
        } else {
            if(cifra > Math.max(...ordenados)){
                ordenados[ordenados.length]= cifra;                
            } else if(cifra < Math.min(...ordenados)){
                var ordenados_temp = new Array();
                ordenados_temp[0]= cifra;
                for(var h=0; h < ordenados.length;h++){
                    ordenados_temp[h+1]= ordenados[h];
                }
                ordenados = ordenados_temp;
            } else {
                for(var m=0; m < ordenados.length; m++ ){

                    if( parseInt( ordenados[m]) > cifra){
                        ordenados_temp = ordenados;                        
                        var largo_ordenado =ordenados_temp.length;
                        for(n=largo_ordenado;n > m ;n--){
                            ordenados_temp[n]= ordenados[n-1];
                        };
                        
                        ordenados_temp[m+1]=ordenados_temp[m];
                        ordenados_temp[m]=cifra;  
                        ordenados = ordenados_temp;
                        
                        var salir= 1;
                    } 
                    if(salir==1) break;
                }
            }
        }
    }
    //render
    var codigo = '<table class="table table-bordered"><thead><tr>';
    for(var i = 0; i<20;i++){
        codigo += '<th scope="col" id="num_' + i + '">' + ordenados[i] + '</th>';
    }
    codigo += '</tr></thead>'
    $('#ordenado_1').html(codigo);

});

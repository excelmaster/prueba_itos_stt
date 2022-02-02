/* render de tablas  */

$('#btn_tabla').click(function(){
    $('#error_filas').hide();
    $('#error_columnas').hide();
    //toma las variables
    var filas = $('#filas').val();
    var columnas = $('#columnas').val();
    if(filas == ""){$('#error_filas').show(); };
    if(columnas == ""){$('#error_columnas').show(); };

    var codigo = '<table class="table table-bordered"><thead><tr>';
    for(var i = 1 ; i<=columnas; i++){
        codigo += '<th scope="col">Col-' + i + '</th>';
    };

    codigo += '</tr></thead><tbody>'
    //render
    for(var j = 1 ; j<= filas; j++){
        codigo += '<tr>';
            for(var x = 1 ; x<=columnas; x++){
                codigo += (x==1) ? '<td>' + j + '</td>' : '<td> - </td>';
            };
        codigo += '</tr>';
    }

    $('#tablagenerada').html(codigo);
    //alert(filas);

});

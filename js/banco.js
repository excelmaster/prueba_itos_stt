/* rest api banco mx  */
$(function(){
    //Token de consulta generado: 4cb1125a9b7c712a43f4e16778ed408f15f0d158d4c7ea7b6a48bf4a4156e072
    let fecha_fin = moment().format('YYYY-MM-DD');;
    let fecha_ini = moment().add(-5,'d').format('YYYY-MM-DD');
    //alert(fecha_ini + ' -- ' + fecha_fin);

	$.ajax({
		url : 'https://www.banxico.org.mx/SieAPIRest/service/v1/series/SF60653/datos/' + fecha_ini + '/' + fecha_fin  + '?token=4cb1125a9b7c712a43f4e16778ed408f15f0d158d4c7ea7b6a48bf4a4156e072',
		jsonp : 'callback',
		dataType : 'jsonp', //Se utiliza JSONP para realizar la consulta cross-site
		success : function(response) {  //Handler de la respuesta
			var series=response.bmx.series[0].datos;
			console.log(series);

			//Se carga una tabla con los registros obtenidos
            var codigo = '<table class="table table-bordered"><thead><tr>';
            codigo += '<th scope="col">Fecha</th>';
            codigo += '<th scope="col">Dato</th></tr></thead>';
            codigo += '<tbody>'
			for (var i in series) {
                var serie =series[i];
                codigo += '<tr>'
                codigo += '<td>' + serie['fecha'] + '</td>';
                codigo += '<td>' + serie['dato'] + '</td>';
                console.log('serie: ' + serie['fecha']);
                codigo += '</tr>';
			}
            codigo += '</tbody>';
            $('#tabla').html(codigo);

		}
	});
});

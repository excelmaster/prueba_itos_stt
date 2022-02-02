/* calculo año bisiesto  */

function arrayLetras(){
    //Generación de arrays
    var grupo = new Array();
    grupo = ['a','b'];
    
    grupo.forEach(element => {
        var result = [];
        n = 10; // cantidad de letras a generar
        for(var i=0;i<n;i++){
            // Genera un número de 0 a 25
            var ranNum = Math.ceil(Math.random() * 25);
            // llamamos un código ASCII entre 25 y 65
            result.push(String.fromCharCode(65+ranNum));
        }
        
        //render de la tabla
        var codigo = '<table class="table table-bordered"><thead><tr>';
        for(var i = 0; i<10;i++){
            codigo += '<th scope="col" id="num_' + i + '">' + result[i] + '</th>';
        }
        codigo += '</tr></thead>'
        $('#array_' + element).html(codigo);
        $('#matriz_' + element).text(result.toLocaleString());    
    });
    //recrea los array
    let matriz_a = $('#matriz_a').text();
    array_a= matriz_a.split(',');
    let matriz_b = $('#matriz_b').text();
    array_b= matriz_b.split(',');

    //union de conjunto
    array_union = array_a.concat(array_b);

    var codigo = '<table class="table table-bordered table-responsive"><thead><tr>';
    for(var i = 0; i<array_union.length;i++){
        codigo += '<th scope="col" id="num_' + i + '">' + array_union[i] + '</th>';
    }
    codigo += '</tr></thead>'
    $('#union').html(codigo);

    //intersección
    let array_inter = array_a.filter(value => array_b.includes(value));
    let array_inter_unique = array_inter.filter((value, index, self) => self.indexOf(value) === index);
    var codigo = '<table class="table table-bordered table-responsive"><thead><tr>';
    for(var i = 0; i<array_inter_unique.length;i++){
        codigo += '<th scope="col" id="num_' + i + '">' + array_inter_unique[i] + '</th>';
    }
    codigo += '</tr></thead>'
    $('#inter').html(codigo);

    // diferencia
    let array_diff = array_a.filter(value => !array_b.includes(value));
    var codigo = '<table class="table table-bordered table-responsive"><thead><tr>';
    for(var i = 0; i<array_diff.length;i++){
        codigo += '<th scope="col" id="num_' + i + '">' + array_diff[i] + '</th>';
    }
    codigo += '</tr></thead>';
    $('#diff').html(codigo);

    //diferencia simetrica
    let array_simetrica = array_union.filter( element => !array_inter_unique.includes(element));
    let array_simetrica_unique = array_simetrica.filter((value, index, self) => self.indexOf(value) === index);
    var codigo = '<table class="table table-bordered table-responsive"><thead><tr>';
    for(var i = 0; i<array_simetrica_unique.length;i++){
        codigo += '<th scope="col" id="num_' + i + '">' + array_simetrica_unique[i] + '</th>';
    }
    codigo += '</tr></thead>';
    $('#simetrica').html(codigo);

}
/* calculo año bisiesto  */
$('#comprobar').click(function(){
    var y = $('#byear').val();
    if(y != "" ){
        
        if( (y % 4 == 0 && y % 100 != 0) || y % 400 == 0 ){
            alert ("si") ;
            $('#rbisiesto').removeClass('alert-info');
            $('#rbisiesto').addClass('alert-success');
            $('#rbisiesto').val('el año ' + y + 'es bisiesto');        
        } else {
            alert (" no");
            $('#rbisiesto').removeClass('alert-info');
            $('#rbisiesto').addClass('alert-warning');
            $('#rbisiesto').val('el año ' + y + 'es bisiesto');
        };
        
        $('#resultado').show();

    };

    
});
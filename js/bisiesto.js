/* calculo año bisiesto  */

$('#my').click(function(){
    var y = $('#byear').val();
    if(y != "" ){
        if( (y % 4 == 0 && y % 100 != 0) || y % 400 == 0 ){
            alert ("el año " + y + " ES Bisiesto") ;
            $('#rbisiesto').removeClass('alert-info');
            $('#rbisiesto').addClass('alert-success');
            $('#rbisiesto').text('el año ' + y + ' es bisiesto');
        } else {
            alert ("El año " + y + " NO ES bisiesto");
            $('#rbisiesto').removeClass('alert-info');
            $('#rbisiesto').addClass('alert-warning');
            $('#rbisiesto').text('el año ' + y + ' NO ES bisiesto');
        };

        $( '#rbisiesto' ).fadeIn( 3000 ).delay( 1500 ).fadeOut( 4000 );
        $('#rbisiesto').addClass('show');
    };

});

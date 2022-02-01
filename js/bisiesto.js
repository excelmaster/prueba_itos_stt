/* calculo año bisiesto  */

$('#my').click(function(){
    $('#error_year').hide();
    var y = $('#byear').val();
    if(y != "" ){
        if( (y % 4 == 0 && y % 100 != 0) || y % 400 == 0 ){
            alert ("el año " + y + " ES Bisiesto") ;
            $('#rbisiesto').removeClass('alert-light');
            $('#rbisiesto').addClass('alert-success');
            $('#rbisiesto').text('el año ' + y + ' es bisiesto');
        } else {
            alert ("El año " + y + " NO ES bisiesto");
            $('#rbisiesto').removeClass('alert-light');
            $('#rbisiesto').addClass('alert-warning');
            $('#rbisiesto').text('el año ' + y + ' NO ES bisiesto');
        };

        $( '#rbisiesto' ).fadeIn( 1500 ).delay( 3000 ).fadeOut( 1500 );
        $('#rbisiesto').addClass('show');
    } else {
        $('#error_year').show();
    };

});

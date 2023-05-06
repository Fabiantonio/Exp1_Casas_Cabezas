
// Validaciones de formulario
$(function() {
    $("#formulario").validate({
        rules: {
                nombre: {
                    required:true
                },
                email: {
                    required: true,
                    email: true
                },
                edad:{
                    required:true,
                },
                fono: {
                    required:true,
                    number:true
                },
                direccion: {
                    required:true,
                    
                }  
            }, //rules
        messages: {
            nombre:{
                required: 'Ingrese su nombre',
                minlength: 'Caracteres insuficientes'
            },
            email: {
                required: 'Ingresa tu correo electrónico',
                email: 'Formato de correo no válido'
            },
            edad: {
                required: 'Ingrese su edad',
            },
            fono:{
                required: 'Ingrese un número de celular',
                minlength: 'Cantidad de digitos insuficiente'
            },
            direccion:{
                required: 'Ingrese su domicilio'
            }
        }
    }); 
});

// Calculadora

$(function() {
    $('#sumar').click(function(){
        document.getElementById('resultado').value += '+';
    });
    $('#restar').click(function(){
        document.getElementById('resultado').value += '-';
    });
    $('#multiplicar').click(function(){
        document.getElementById('resultado').value += '*';
    });
    $('#dividir').click(function(){
        document.getElementById('resultado').value += '/';
    });

    $('#7').click(function(){
        document.getElementById('resultado').value += '7';
    });
    $('#8').click(function(){
        document.getElementById('resultado').value += '8';
    });
    $('#9').click(function(){
        document.getElementById('resultado').value += '9';
    });

    $('#4').click(function(){
        document.getElementById('resultado').value += '4';
    });
    $('#5').click(function(){
        document.getElementById('resultado').value += '5';
    });
    $('#6').click(function(){
        document.getElementById('resultado').value += '6';
    });

    $('#1').click(function(){
        document.getElementById('resultado').value += '1';
    });
    $('#2').click(function(){
        document.getElementById('resultado').value += '2';
    });
    $('#3').click(function(){
        document.getElementById('resultado').value += '3';
    });

    $('#0').click(function(){
        document.getElementById('resultado').value += '0';
    });
    $('#p').click(function(){
        document.getElementById('resultado').value += '.';
    });

    $('#reset').click(function(){
        document.getElementById('resultado').value = '';
    });


    $('#equal').click(function(){
        var result = eval($('#resultado').val());
        $('#resultado').val(result);
    });
});


// $('#resultado').val('99');
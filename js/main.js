$(document).ready(function() {


    $('#telefone').mask('(00) 00000-0000',{
        placeholder: '(00) 00000-0000'
    })

    $('#cpf').mask('000.000.000-00',{
        placeholder: '___.___.___-__'
    })

    $('#cep').mask('00000-000',{
        placeholder: '_____-___'
    })

    $('form').validate({
        rules: {
            nome: {
                required:true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
            },
            cpf: {
                required: true,
            },
            endereço: {
                required: true,
            },
            cep: {
                required: true,
            },
        },
        messages: {
            nome: 'Por favor, insira seu mome'
        },
        submitHandler: function(form) {
            console.log(submit)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})
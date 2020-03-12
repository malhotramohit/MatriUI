$(function () {
    $('#sign_in').validate({
        highlight: function (input) {
            console.log(input);
            $(input).parents('.form-line').addClass('error');
        },
        unhighlight: function (input) {
            $(input).parents('.form-line').removeClass('error');
        },
        errorPlacement: function (error, element) {
            $(element).parents('.input-group').append(error);
        }
    });

    $(document).ready(function () {
        $('#sign_in').submit(function(event) {
            register(event);
        });
    });

    function register(event){
        event.preventDefault();
        window.location.href = contextPath+"/main.html";
    }
    

});


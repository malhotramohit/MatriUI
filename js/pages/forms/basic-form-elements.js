$(function () {
    //Textarea auto growth
    autosize($('textarea.auto-growth'));

    //Datetimepicker plugin
    $('.datetimepicker').bootstrapMaterialDatePicker({
        format: 'dddd DD MMMM YYYY - HH:mm',
        clearButton: true,
        weekStart: 1
    });

    $('.datepicker').bootstrapMaterialDatePicker({
        format: 'dddd DD MMMM YYYY',
        clearButton: true,
        weekStart: 1,
        time: false
    });

    $('.timepicker').bootstrapMaterialDatePicker({
        format: 'HH:mm',
        clearButton: true,
        date: false
    });

    //Bootstrap datepicker plugin
    $('#bs_datepicker_container input').datepicker({
        autoclose: true,
        container: '#bs_datepicker_container'
    });

    $('#bs_datepicker_component_container').datepicker({
        autoclose: true,
        container: '#bs_datepicker_component_container'
    });
    //
    $('#bs_datepicker_range_container').datepicker({
        autoclose: true,
        container: '#bs_datepicker_range_container'
    });

    
    var religionDD = document.getElementById('religionDD');
    var religionDDLength = document.getElementById("religionDD").length;
	$.ajax({  
        type: "GET",  
        url: "http://localhost:8080/v1/api/dd/religion",  
        success: function (data) { 
            $("#religionDD").append('<option value="'+'-1'+'" selected="">'+'-- Please select --' +'</option>');
            for (var i = 0; i < data.length; i++) {  
                $("#religionDD").append('<option value="'+data[i].value+'" selected="">'+data[i].name +'</option>');
            }  
              
            // Append the option to select
  
            // Set the select value with new option
            $("#religionDD").val('-1');

            $("#religionDD").selectpicker("refresh");  

        }  
    });  
    
});

var contextPath = "http://localhost:8080";

$(document).ready(function () {

    fetch("jsons/index/motherTongue.json")
    .then(response => response.json())
    .then(json => console.log(json));

    $('#regitser_form').submit(function(event) {
        register(event);
    });
});

function register(event){
    event.preventDefault();
    window.location.replace(contextPath+"/main.html");

}





let dropdown = $('#motherTongueLists');



const url = 'https://matri.free.beeceptor.com/mothertounge';

// Populate dropdown with list of provinces
$.getJSON(url, function (data) {
  $.each(data, function (key, data) {
    dropdown.append('<li><a href="l_list.html?param='+data+'">'+key+'</a></li>');
  })
});
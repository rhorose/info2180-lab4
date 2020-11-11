// window.onload = function() {
//     var loadBtn = document.querySelector('#theBtn');

//     loadBtn.addEventListener('click', function(e) {
//         e.preventDefault();
  



//         var httpRequest = new XMLHttpRequest();
//         var url = "http://localhost:8080/superheroes.php";
//         httpRequest.onreadystatechange = superHero;
//         httpRequest.open('GET', url, true);
//         httpRequest.send();

//         function superHero() {
//             if (httpRequest.readyState === XMLHttpRequest.DONE) {
//               if (httpRequest.status === 200) {
                
//                 var response = httpRequest.responseXML;
//                 var results = document.querySelector('#result');
                
//                 results.innerHTML= response;
              
//               } else {
//                 alert('There was a problem with the request.');
//               }
//             }
//         }
//     });
// };



$(document).ready(function() {
    var loadBtn = $('#theBtn');

    loadBtn.on('click', function() {

        $.ajax('superheroes.php', {
            method: "GET",
            dataType: 'json'
        }).done(function(response) {
            var superheroes = response.superheroes;

            $('#results').append("<ul></ul>");
            $(superheroes).each(function() {
                $('#results ul').append('<li><h3>' + this.name + ' (a.k.a ' + this.alias + ')</h3><p>' + this.email + '</p></li>');
            });
        }).fail(function() {
            alert('There was a problem with the request.');
        });
    });
});





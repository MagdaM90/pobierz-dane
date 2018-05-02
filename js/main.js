'use strict'

function ajax(method, url){
    let httpReq = new XMLHttpRequest();
    
    httpReq.open(method, url);
    
    httpReq.onreadystatechange = function() {
        if(httpReq.readyState == 4) {
            if(httpReq.status ==200){
                let returnData = httpReq.responseText;
                
                httpReq.onsuccess(returnData);
                
                httpReq = null;
            }
        }
    }
    httpReq.onsuccess = function(response) {
        let jsonObj = JSON.parse(response);
        console.log(jsonObj);
    }
httpReq.send();
}

//ajax('GET', 'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php');


function pobierzDane() {
    $('#btn').click(function(){
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function(data){
           $('#container').append('<div>' + data.imie + '<br>' + data.nazwisko + '<br>' + data.zawod +'<br>' + data.firma + '</div>').children().attr('id', 'dane-programisty');
        
        })
    })
}
pobierzDane();
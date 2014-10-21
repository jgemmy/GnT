$( document ).ready(function() {
    console.log( "ready!" );
        
       $.ajax({
            method: 'GET',
            url: 'js/db/im36parq.json',
            dataType: "json",
            success: function (data) {
                
                for (var i=0; i<data.length; i++) {
                        $('<tr>').append(
                        $('<td>').text(data[i].idp),
                        $('<td>').text(data[i].dim),
                        $('<td>').text(data[i].qual),
                        $('<td>').text(data[i].desc),
                        $('<td>').text(data[i].prezzo)).appendTo('#records_table');
                    }
            },
            error: function (a,b,c) {
                alert("Error");
            }
        });
    });
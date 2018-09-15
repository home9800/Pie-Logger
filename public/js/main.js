function devour(pie_id) {

    //  PUT request
    $.ajax({
        type: "PUT",
        url: '/api/updatePie/',
        data: {
            pieId: pie_id,
        },
        success: (data) => {
            console.log('It worked (Request)');
            window.location.assign("/"); 
        }
    });
}

function addPie() {
    
    let newPie = $('#pie_name').val().trim();
    
    if(newPie.length > 3) {

        //  POST request
        $.ajax({
            type: "POST",
            url: '/api/addPie/',
            data: {
                pieName: newPie,
            },
            success: (data) => {
                console.log('Posted');
                window.location.assign("/"); 
            }
        });
    }
}

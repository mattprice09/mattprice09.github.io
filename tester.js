

function on_request_success(response) {
    console.debug('response', response);
    document.write("Success!!!");
} 

function on_request_error(r, text_status, error_thrown) {
    console.log(r);
    console.debug('error' + text_status + ", " + error_thrown + ":\n" + r.responseText);
    document.write("Failure line 11");
}

var request = {"Data":"Success!!"};

function addTrack() {
    $.ajax({
    url: 'http://mattprice09.github.io/addTrack.py',
    type: ['GET', 'POST'],
    cache: false,
    data: JSON.stringify(request),
    contentType: 'application/json',
    processData: false,
    success: on_request_success,
    error: on_request_error
});
}
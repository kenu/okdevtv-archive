$(function () {
    $("#form").on("submit", function () {
        sendMessage();
        return false;
    });
    getList();
});

function sendMessage() {
    if ($("#name").val() && $("#message").val()) {
        $.ajax({
            url: "http://okdevtv.com:3000/register/",
            data: {
                category: 'kenu.heo@gmail.com',
                name: $("#name").val(),
                email: $("#email").val(),
                message: $("#message").val()
            },
            dataType: "jsonp",
            type: "POST"
        })
            .done(function (r) {
                $("#result").html("sent:" + r);
            });
        // clear form
        $("#form").find("input[type=text], textarea").val("");
    } else {
        if (!($("#name").val())) {
            $("#name").focus();
            return;
        }
        if (!($("#message").val())) {
            $("#message").focus();
            return;
        }
    }
}
function getList() {
    $.ajax({url: "http://okdevtv.com:3000/list", dataType : "jsonp"})
    .done(function(data){
        var list = data.list;
        for(var i in list) {
            var row = '<div><span>' + list[i].message + '</span>';
            var datetime = $.datepicker.formatDate('yy/mm/dd', getDate(list[i]._id));
            row += '<br><span>' + datetime + '</span>';
            row += ' <span>' + list[i].name + '</span></div>';
            $("#list").append(row);
        }})
    .fail(function(e){
        console.log(e);
    });
}
function getDate(_id) {
    return new Date(parseInt(_id.substring(0, 8), 16) * 1000 );
}

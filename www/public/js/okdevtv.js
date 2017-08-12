$(function () {
    $('#form').on('submit', function (e) {
        e.preventDefault();
        var data = $(e.currentTarget).serialize();
        $.ajax('/apis/tip', {
                method: 'post',
                data: data,
                dataType: 'json' // data type
            })
            .done(function (res) {
                //console.log(res);
                //alert('감사합니다.');
                $('form#form')[0].reset();
            });
    });
});

function sendMessage() {
    if ($("#name").val() && $("#message").val()) {
        $.ajax({
            url: "/register/",
            data: {
                category: 'kenu.heo@gmail.com',
                name: $("#name").val(),
                email: $("#email").val(),
                message: $("#message").val()
            },
            dataType: "jsonp",
            type: "POST"
        }).done(function (r) {
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
    $.ajax({
        url: "//okdevtv.com/list",
        dataType: "jsonp"
    }).done(function (data) {
        var list = data.list;
        for (var i in list) {
            if (!list[i].message) {
                continue;
            }
            var row = '<div><span>' + list[i].message.linkify() + '</span>';
            var datetime = $.datepicker.formatDate('yy/mm/dd', getDate(list[i]._id));
            row += '<br><span>' + datetime + '</span>';
            row += ' <span>' + list[i].name + '</span></div>';
            $("#list").append(row);
        }
    }).fail(function (e) {
        throw e;
    });
}

function getDate(_id) {
    return new Date(parseInt(_id.substring(0, 8), 16) * 1000);
}
/**
 * "'버전의 의미 http://semver.org/lang/ko/ '".linkify()
 * "'버전의 의미 <a href="http://semver.org/lang/ko/">http://semver.org/lang/ko/</a> '"
 * http://stackoverflow.com/a/7123542
 * @Roshambo
 */
if (!String.linkify) {
    String.prototype.linkify = function () {
        // http://, https://, ftp://
        var urlPattern = /\b(?:https?|ftp):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*[a-z0-9-+&@#\/%=~_|]/gim;
        // www. sans http:// or https://
        var pseudoUrlPattern = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
        // Email addresses
        var emailAddressPattern = /[\w.]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,6})+/gim;
        return this.replace(urlPattern, '<a href="$&">$&</a>').replace(pseudoUrlPattern, '$1<a href="http://$2">$2</a>').replace(emailAddressPattern, '<a href="mailto:$&">$&</a>');
    };
}

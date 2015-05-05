function change(mdfile) {
    loadMarkdown(mdfile);
    $('body').scrollTop(0);
    history.pushState({
            page: mdfile
        },
        mdfile, '#' + mdfile);
}

window.onpopstate = function (event) {
    loadStateContent(event.state);
};

function loadStateContent(state) {
    loadMarkdown(state.page);
}

function loadMarkdown(mdfile) {
    $.ajax(mdfile).done(success);
}

function success(data) {
    var md = data;
    $('#content').html(marked(md));
}

$(function () {
    var mdfile = getMdFile();
    change(mdfile);
});

function getMdFile() {
    var mdFile = 'intellij/intellij-shortcuts.md';
    var href = location.href;
    if (href.indexOf('#') > 0) {
        var hash = href.substring(href.indexOf('#') + 1);
        mdFile = hash;
    }
    return mdFile;
}

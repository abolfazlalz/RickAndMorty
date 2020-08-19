function showLoading() {
    let parent = document.createElement('div');
    parent.setAttribute('id', 'loading');
    $("#loading").load("/loading.html");
}

function closeLoading() {
    setTimeout(function () {
        $(".loading").remove();
    }, 150);

}
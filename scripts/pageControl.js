let pageTitle = 'Rick & Morty';

function onLoadingComplete() {
    let pathname = window.location.pathname;
    pathname = pathname.substring(1, pathname.length);
    let requests = pathname.split('/');
    if (requests.length > 0) {
        switch (requests[0].toLowerCase()) {
            case 'characters':
                showCharactersList();
                break;
            case 'home':
            case '':
                showHome();
                break;
            default:
                show404();
        }
    } else {
        showHome()
    }
}

function showHome() {
    showFile('/pages/home.html', '/', function () {

    })
}

function showCharactersList() {
    showFile('/pages/characters.html', 'Characters', function () {
        fillCharactersList('characters');
    });
}

function showFile(address, title, complete) {
    if (typeof closeMenu() != 'undefined')
        closeMenu();
    const xhr = new XMLHttpRequest();
    xhr.open('GET', address, true);
    xhr.onreadystatechange = function () {
        if (this.readyState !== 4) return;
        if (this.status !== 200) return;
        document.getElementById('contents').innerHTML = this.responseText;
        window.history.pushState({}, "address", title);
        complete();
    };
    xhr.send();
}

function show404() {

}
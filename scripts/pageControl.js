let pageTitle = 'Rick & Morty';
window.onpopstate = history.onpushstate = function () {
    onLoadingComplete(false)
}

function onLoadingComplete(setPush = true) {
    let pathname = window.location.pathname;
    pathname = pathname.substring(1, pathname.length);
    let requests = pathname.split('/');
    if (requests.length > 0) {
        switch (requests[0].toLowerCase()) {
            case 'characters':
                showCharactersList(setPush);
                break;
            case 'home':
            case '':
                showHome(setPush);
                break;
            case 'character':
                if (requests.length > 1)
                    showCharacter(requests[1], setPush);
                else
                    show404(setPush);
                break;
            default:
                show404();
        }
    } else {
        showHome(setPush)
    }
}

function showHome(setPush) {
    showFile('/pages/home.html', '/', function () {

    }, setPush)
}

function showCharactersList(setPush) {
    showFile('/pages/characters.html', 'Characters', function () {
        fillCharactersList('characters');
    }, setPush);
}

function showCharacter(name, setPush) {
    showFile('/pages/character.html', "character/" + name, function () {

    }, setPush)
}

function show404(setPush) {

}

function showFile(address, title, complete, setPush = true) {
    if (typeof closeMenu() != 'undefined')
        closeMenu();
    const xhr = new XMLHttpRequest();
    xhr.open('GET', address, true);
    xhr.onreadystatechange = function () {
        if (this.readyState !== 4) return;
        if (this.status !== 200) return;
        document.getElementById('contents').innerHTML = this.responseText;
        if (setPush)
            window.history.pushState({}, "address", title);
        document.title = title
        complete();
    };

    xhr.send();
}
function getCharacters(listener) {
    $.getJSON(SITE_ADDRESS + "api/characters", function (result) {
        listener(result.data.result);
    });
}

function fillCharactersList(id) {
    let list = document.getElementById(id);
    showLoading()
    getCharacters(function (characters) {
        for (let item of characters) {
            let card = document.createElement('div');
            card.classList.add('card');

            let character = document.createElement('div');
            character.classList.add('character');
            character.classList.add('no-select');

            let background = document.createElement('div');
            background.style.backgroundImage = "url('" + item.backgroundImage + "')";
            let image = document.createElement('img');
            image.setAttribute('src', item.picture);
            background.appendChild(image);
            background.classList.add('background');

            let name = document.createElement('h3');
            name.innerText = item.name;

            let description = document.createElement('div');
            description.innerText = item.description;
            description.classList.add('description');

            card.appendChild(character);
            character.appendChild(background);
            character.appendChild(name);
            character.appendChild(description);

            list.appendChild(card);
        }
        closeLoading()
    });
}
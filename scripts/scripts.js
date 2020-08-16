function toggleMenu() {
    const x = document.getElementById('menu');
    if (x == null) return;
    x.classList.toggle("change");
    let navigation = document.getElementById('navigation');
    if (x.classList.contains('change')) {
        navigation.classList.add("show");
    } else {
        navigation.classList.remove("show");
    }
}

function closeMenu() {
    const x = document.getElementById('menu');
    if (x == null) return;
    let navigation = document.getElementById('navigation');
    navigation.classList.remove("show");
    x.classList.remove('change');
}
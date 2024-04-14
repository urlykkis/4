function hideAll() {
    let root = document.getElementsByClassName("content_container")
    let container = root[0]
    let button = document.getElementById("hide_button")

    if (container.style.display == 'block') {
        container.style.display = 'none';
        button.textContent = 'Показать все'
    }
    else {
        container.style.display = 'block';
        button.textContent = 'Скрыть все'
    }
}

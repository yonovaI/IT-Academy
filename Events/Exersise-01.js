(function () {
    var btn = document.getElementById("clickable"),
            targetedDiv = document.querySelector('DIV'),
            zoomIn = document.createElement('BUTTON'),
            zoomOut = document.createElement('BUTTON'),
            fontSize = 12;

    zoomIn.id = 'zoomIn';
    zoomIn.innerText = '+';
    zoomOut.id = 'zoomOut';
    zoomOut.innerText = '-';

    btn.addEventListener("click", function () {
        targetedDiv.style.backgroundColor = 'pink';
    }, false);

    function resizeText(button, target) {
        button.id === "zoomIn" ? fontSize += 5 : fontSize -= 5;
        var stringified = fontSize.toString() + "px";
        target.style.fontSize = stringified;
    }

    zoomIn.addEventListener("click", function () {
        resizeText(this, targetedDiv)
    }, false);

    zoomOut.addEventListener("click", function () {
        resizeText(this, targetedDiv)
    }, false);

    document.body.appendChild(zoomOut);
    document.body.appendChild(zoomIn);
})();
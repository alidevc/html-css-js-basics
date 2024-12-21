const inputColor = document.querySelector("input");

inputColor.oninput = function() {
    const selectedColor = this.value 
    document.querySelector('span').style.backgroundColor = selectedColor;
    document.querySelector('span').style.color = invertColor(selectedColor);
};

function invertColor(hexColor) {
    // Remove the "#" if it's there
    hexColor = hexColor.replace("#", "");

    const r = 255 - parseInt(hexColor.substr(0, 2), 16);
    const g = 255 - parseInt(hexColor.substr(2, 2), 16);
    const b = 255 - parseInt(hexColor.substr(4, 2), 16);

    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

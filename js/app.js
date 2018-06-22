// var getButton = document.getElementById('insideButton');
// var inside = document.createEventListener(onclick, 'button');
// getButton.innerHTML = 'click me!';
// function button() {
//    var letters = '0123456789ABCDEF';
//    var color = '#';
//    for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() *16)];
//    }
//    return color;
// }

// function getButton() {
//     inside.css('backgroun-color', button());
// }

var getButton = document.createElement('button');
getButton.innerHTML = 'click me!';
getButton.id = 'button';
document.body.appendChild(getButton);
getButton.addEventListener('click', changeColor);

function makeColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor() {
    document.body.style.backgroundColor = makeColor();
}

function changeInside() {
    
}
// SETS HEADER TEXT TO INPUT CONTENT========================
const $headerText = document.getElementById('headerText');

function setTitle ( $newTitle ) {
    $headerText.textContent = $newTitle;
}


// SETS BODY TEXT TO INPUT CONTENT==========================
const $bodyText = document.getElementById('bodyText');

function setDescription ( $newBody ) {
    $bodyText.textContent = $newBody;
}

// SETS BACKGROUND COLOUR TO INPUT NAME=====================
const $bodyStyle = document.body.style;

function setBackgroundColor ( $newBG ) {
    $bodyStyle.backgroundColor = $newBG; 
}

// SET FONT COLOUR TO INPUT NAME============================
function setFontColor ( $newColor) {
    $bodyStyle.color = $newColor;
}

function setTheme () {

}


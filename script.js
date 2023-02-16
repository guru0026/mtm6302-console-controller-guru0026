// SETS HEADER TEXT TO INPUT CONTENT========================
const $headerText = document.getElementById('headerText');

function setTitle ( $newTitle ) {
    $headerText.textContent = $newTitle;
    console.log("You renamed the title to: " + $newTitle);
}

// SETS BODY TEXT TO INPUT CONTENT==========================
const $bodyText = document.getElementById('bodyText');

function setDescription ( $newBody ) {
    $bodyText.textContent = $newBody;
    console.log("You entered the following body text: " + $newBody);
}

// SETS BACKGROUND COLOUR TO INPUT NAME=====================
const $bodyStyle = document.body.style;

function setBackgroundColor ( $newBG ) {
    $bodyStyle.backgroundColor = $newBG;
    console.log("You set the background colour to: " + $newBG);
}

// SET FONT COLOUR TO INPUT NAME============================
function setFontColor ( $newColor) {
    $bodyStyle.color = $newColor;
    console.log("You set the font colour to: " + $newColor);
}

// SET THEME TO DARK OR LIGHT PRESET OPTIONS================
const $bodyTheme = document.body;

function setTheme ( $themeName) {
    if ($themeName == 'dark') {
        // $bodyTheme.classList.Add("dark-mode");
        document.body.classList.remove("light-mode");
        document.body.classList.add("dark-mode");
        console.log("You selected the dark theme");
    } else if ($themeName == 'light') {
        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode");
        console.log("You selected the light theme")
    } else {
        console.log('Your theme selection could not be processed. Themes currently available are "dark" and "light"')
    }
}



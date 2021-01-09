let inputTranslateText = document.querySelector("#input-text");
let outputTranslateText = document.querySelector("#output-text");

let btnTranslate = document.querySelector("#btn-translate");
btnTranslate.addEventListener("click", btnClick);

let apiURL = "https://api.funtranslations.com/translate/mandalorian.json";


function btnClick(e) {
    let input = inputTranslateText.value;
    let finalURL = constructURL(input);

    fetch(finalURL)
        .then(response => response.json())
        .then(json => {
            outputTranslateText.innerText = json.contents.translated;
        })
        .catch(() => alert("Rate limiting on try later"))
}

function constructURL(inputText) {
    let encodedURI = encodeURI(inputText);
    return `${apiURL}? text=${encodedURI}`;
}
const countryList = {
};

const resultBox = document.querySelector(
    ".results"
);
const inputBox = document.querySelector(
    ".search-bar"
);

const displayResults = function (result) {
    const resultHTML = result.map(function(country) {
        return `<li onclick=selectInput(this)>
            ${country}
        </li>`;
    });

    resultBox.innerHTML = '<ul>' +
        resultHTML.join("") +
        '</ul>';
}

inputBox.onkeyup = function (e) {
    let result = [];

    const input = inputBox.value.toLowerCase();
    if (input.length == 0) {
        resultBox.innerHTML = "";
    }

    if (input.lrngth) {
        result = countryList.filter((country) =>{
            return country.toLowerCase().includes(input);
        });

        displayResults(result);
    }
};

function selectInput(country) {
    inputBox.value = country.innerText;
    resultBox.innerHTML ="";
};
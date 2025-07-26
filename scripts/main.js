
/* Useful JavaScript functions */
// confirm, prompt, alert.

localStorage.clear();

function isBigInt(value) {
    return typeof value === "bigint";
}

function analyzeBigInt(value) {
    if (isBigInt(value)) {
        console.log("¡" + value + " es un BigInt!");
    } else {
        console.log("¡" + value + " NO es un BigInt!");
    }
}

function setUserName() {
    // let userName = prompt("Please, insert your name.");
    if (!userName || userName === null) {
        setUserName();
    } else {
        localStorage.setItem("name", userName);
        myHeading.textContent = "Hi, " + userName;
        // myHeading.innerHTML = "Hi, " + userName;
    }
}

function main () {
    "use strict";
    const myImg = document.querySelector("img");
    myImg.onclick = function () {
        const imgSrc = myImg.getAttribute("src");
        if (imgSrc === "images/profile-img.jpeg") {
            myImg.setAttribute("src", "images/profile-img-rotated.jpeg");
            myImg.setAttribute("alt", "My face rotated");
        } else {
            myImg.setAttribute("src", "images/profile-img.jpeg");
            myImg.setAttribute("alt", "My face");
        }
    }

    let myButton = document.querySelector("button");
    let myHeading = document.querySelector("h1");

    if (!localStorage.getItem("name")) {
        setUserName();
    } else {
        let storedName = localStorage.getItem("name");
        myHeading.textContent = "Hi, " + storedName;
    }
    myButton.onclick = setUserName;
}

main();
